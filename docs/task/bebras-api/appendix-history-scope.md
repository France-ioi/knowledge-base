---
title: "Appendix: Task editor history"
parent: Bebras API
nav_order: 1
---

# Appendix: Task editor history

September 2026 (mainly ST and DL, also MB and MH)

This page explains the main design decisions behind `task.getHistory` and `task.reloadHistory` (Bebras API v3). The signatures and field definitions are in the main API document; this page only records *why* they are shaped that way.

## Background

Two kinds of saved work exist for a task:

- **Submissions**: answers the user sent for grading. The platform stores them with their score, lists them in its History tab, and reloads them with `task.reloadAnswer` / `task.reloadAnswerWithOptions`.
- **Work in progress**: what is in the editor between submissions (code, personal tests, etc.).

Before API v3, the platform kept only one copy of the work in progress per attempt. It was overwritten on every autosave (once a minute and when leaving the task). The only other copy was a backup made when the user reloaded an older submission, so the current work would not be lost. There was no way to go back to an earlier version of the work in progress.

API v3 adds that history. Terms used below:

- **History element**: one saved version of the work in progress.
- **Participant**: the user, or the team when the user works as a team.
- **Attempt**: one run of a participant on a task. A participant may have several attempts on the same task (for instance to start over).

## Decision 1: the task owns the history, the platform only sees metadata

The task (and its backend) stores the history. The platform never receives the code or the diffs. `getHistory` returns only what is needed to display a list (id, datetime, author, tags, sizes, character counts), and `reloadHistory` asks the task to restore an element by id.

**Why**

- The task knows its own state format, so it can store it compactly (for instance as diffs between versions) and decide when a save is worth keeping. Storing every version of every state on the platform would be very expensive: the platform database is already large without any history.
- The same API works for any kind of task, whatever its state looks like.
- Submissions stay in the platform, so the two lists remain independent. The platform can show submissions only, or merge both lists in its History tab.

## Decision 2: a history list is keyed by the attempt, not by the user

History is always the one of the task instance currently loaded, as identified by its **task token**. There is no option to ask for another list.

A list is uniquely identified by these task token fields:

| Token field | Meaning |
| --- | --- |
| `platformName` | The platform. Ids are only unique within one platform. |
| `idItemLocal` | The task, in the platform. |
| `idAttempt` | The participant and the attempt (see Decision 3). |

`idUser` is **not** part of the key. It is stored on each element and returned by `getHistory`, so the platform can show who made each save.

**Why**

- **The platform works per attempt.** Algorea stores progress and submissions per `(item, participant, attempt)`. The user who made a submission is kept only as information. The history follows the same model.
- **A user-based key mixes attempts.** With `(task, user)`, the work of several attempts would end up in one list. Consecutive elements would come from unrelated states, so diffs and character counts would be meaningless.
- **A user-based key splits teams.** Teammates work on the same attempt, so they should see the same history.
- **The token already contains the user.** For a user working alone, the participant is the user, and `idAttempt` already contains the user id.
- **Access control is simple.** A task token is only valid for one attempt. If the task answers only for the attempt in the token, it never has to check other permissions.

**Consequences**

- The platform cannot ask, in one call, for the history of another attempt, of all attempts of a participant, or of one teammate only. To see another attempt, it loads the task with a token for that attempt.
- Element ids are unique and increasing within one list only, not across lists.
- `reloadHistory` must fail if the id does not belong to the list of the current token.
- Earlier Task Platform tables are keyed by `(idTask, idUser, idPlatform)`. The history must not reuse that key. Task-side code and database schemas should say explicitly why `idAttempt` is used instead of `idUser`, since it looks surprising to someone used to the older tables.

## Decision 3: the task must not parse `idAttempt`

The current task token has no participant field. On Algorea, `idAttempt` is a string made of the participant id and the attempt id joined by a separator (for example `73004323124038504/0`). The task uses this string as a whole, as an opaque key.

**Why**

- The format is specific to Algorea. Other platforms may build `idAttempt` differently.
- If the task ever needs the participant and the attempt separately, the platform should add explicit fields in a new token format, rather than having tasks depend on an undocumented string layout.

## Decision 4: teammates share one list, concurrent edits are not handled

All members of a team have the same `idAttempt`, so they read and write the same history list. Each element records the `idUser` of the member who saved it.

If two members edit at the same time, consecutive elements alternate between two different states, and their diffs are large. This is accepted for now:

- team tasks are still rare, and none is expected to use history in the short term;
- the same issue exists for one user who opens the task in two browser tabs;
- solving it would require branches in the history, which would make the storage and the API much more complex.

Submissions of teammates remain a platform feature (the platform reloads them with `reloadAnswer`). They are not part of this history.

## Decision 5: checkpoints and per-element summaries

An element can be marked as a **checkpoint** (`isCheckpoint`), with tags explaining why. The platform first lists checkpoints only (`onlyCheckpoints: true`), and lets the user expand a checkpoint to see the elements saved since the previous one.

Each element also carries: the author, the active tab (name, size, language), and character counts. These counts are taken over the whole state (all tabs), compared with the immediately older element (`sinceEarlier`) and, for checkpoints, with the previous checkpoint (`sinceEarlierCheckpoint`, with the number of elements in between).

**Why**

A plain list of autosaves ("10:22, 10:23, 10:24…") is unusable: the user cannot tell which version they are looking for, and the list hides the important events, such as submissions. Checkpoints keep the list short, and the summaries give the user a hint of what changed without the platform seeing the content.

**Consequences on the options**

- Results are ordered from newest to oldest.
- `maxId` is **included** and `minId` is **excluded**. To expand checkpoint `C` whose previous checkpoint is `P`, the platform requests `minId = P.id, maxId = C.id`. It gets `C` again, this time with its delta to the element just before it, plus everything in between.
- To get the next page of results, the platform requests `maxId = lastReceivedId - 1`.

## Decision 6: saves around a reload

Before `reloadHistory` restores an element, the task saves the current state if it has changed (and the task is not read-only). After the reload, it does not save again until the user changes the restored state.

**Why**

- Saving before the reload ensures that no recent work is lost.
- Not saving right after a reload avoids flooding the history: a user often reloads several versions in a row to find the right one, and each of those reloads would otherwise create a new, nearly identical element.

## Decision 7: a dedicated `reloadHistory` instead of `reloadState`

**Why**

`reloadState` takes a full state string produced by the task. `reloadHistory` takes only an element id, and the task fetches the content from its own backend. Since the inputs and the behaviour are different, a separate function is clearer. It takes an `options` object so that parameters can be added later without changing the signature.

## Decision 8: support is advertised with the API version

A task supports history if it declares `apiVersion >= 3` in `task.getMetaData`. A task that declares version 3 must also support every earlier version feature (for instance `reloadAnswerWithOptions` from v2).

**Why**

The API version is already how the platform discovers task capabilities, so no new mechanism is needed.

**Consequences**

When the task supports v3, the task saves its own work in progress, so the platform must stop doing it:

- it no longer saves the current answer and state when the user leaves the task;
- it no longer saves a backup of the current answer and state when it reloads another answer.

Otherwise the same work would be saved twice, in two places that the user would see as two unrelated lists.
