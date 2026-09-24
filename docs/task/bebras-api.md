---
title: Bebras API
parent: Task engines, libs and API
nav_order: 1
has_toc: true
---

# Bebras API

November 2017

1. TOC
{:toc}

# Introduction

The goal of this document is to define a standard format and API for tasks so that the same task, without any change, can be used in any platform that implements that standard.

The objective of this API is to make it easy for organizations to share tasks, platforms, or both. Tasks can be of any type, from very basic multiple choice tasks, to interactive tasks where students manipulate objects visually, or even to advanced interactive tasks where students can write and run small programs.

The first implementation of this API both for tasks and for a platform can be tested here:
[http://concours.castor-informatique.fr/index_en.html](http://concours1.castor-informatique.fr/index_en.html). The API works on top of the scripts present at

- [https://github.com/France-ioi/pem-task](https://github.com/France-ioi/pem-task) (to be included by a task)
- [https://github.com/France-ioi/pem-platform](https://github.com/France-ioi/pem-platform) (to be included by a platform)

They must always be included.

Summary

The api provides a way for a platform to present tasks from various origins to its users, and for tasks to be used in all kinds of platforms.

The API doesn't specify how the task's main resources are loaded in the browser, but assumes that they, and in particular the "Task" object, are already available in one of the following ways:

- Independently of the platform: the task may have been loaded directly through an url loaded within an iframe, in the same domain or a different domain from the platform.

- Through the platform: the content of the task may have been loaded in the browser, either within the platform’s main page or within an iframe. This is possible in particular for tasks that implement the installation API, an extension to the present API, documented separately.

Some of the elements of the task, such as the solution, hints or the grader, may not be loaded, in which case the corresponding features are not available.

What the API specifies however, is how the platform and the task exchange information, for the following purposes:

The platform may:

- tell the task to initialize itself, given some parameters: task.load(...)  
- ask the task for the current answer provided by a user: task.getAnswer(...)  
- reload a previously saved answer: task.reloadAnswer(...)  
- obtain the height of the task content, so that it can adjust the layout: task.getHeight(...)  
- obtain the list of views (task, solution, ...) that the task is able to display: task.getViews(...)  
- provide the task with a signed token that proves that it allows the user to access to some content: task.updateToken(...)

If a grader is available with the task, the platform may:

- ask the grader to grade a given answer: grader.gradeTask()

On the other hand, the task may contact the platform to indicate that the user wants to:

- validate her current answer: platform.validate(...)  
- obtain a new hint: platform.askHint(...)  
- access to a different view (statement, solution, ...): platform.showView(...)  
- open a different page: platform.openUrl(...)

# Actors

## **Tasks and platforms**

The API implies two main actors: the task and the platform.

A task may consist of a statement, a question, examples, hints, a grader, or a detailed solution, some of which may include illustrations or even some interactivity.

A platform may present a task statement to a user, while keeping some of the other components secret, for example until the user has solved the task.

Both loaded in a browser, the usual case is the student being on the platform website, and the task being loaded in an iFrame by the platform.

The operation API provides a way for platforms and tasks to interact with each other, while preserving secrets when necessary.

## **Tasks views**

A task may provide multiple views. A view can be seen as a container providing one specific information or functionality. Only one view at a time is displayed by the task. There is only one mandatory view, but some have a mandatory name they must follow:

- **task:** the view containing the task wording  
- **solution:** the view containing the task solution  
- **hints:** the view containing the task hints  
- **hint\_n:** the view containing the nth hint  
- **forum:** the view containing the help forum, when available  
- **editor:** the view containing the answer editor interface  
- **answer\_n:** the view containing the nth answer submitted by the user

It’s up to the task to provide any name for other views they contains. The only requirement is that it is unique. An example is provided in the Task API section.

## **Communication between actors**

Any compliant platform should have a javascript object named *platform* in its global scope (window.platform) that implements the functions described in the API, while any compliant task should have an object named *task*, as well as an object named *grader*, that implement the functions described in the corresponding API.

When the platform object and the task / grader are not loaded directly in the same page, calls can’t be made directly, and the actors communicate through proxy objects having the same names: *platform*, *task* and *grader*.

When a task makes a call to *platform.myFunction()*, the object *platform* is either the true *platform* object if the task is loaded in the same page as the platform, or a proxy object whose role is to send the message to the true platform object, if the task is loaded within an iFrame. In this last case, if the two objects are in pages that are not from the same domain, the call may be done using various means such as postmessage, depending on the browser used.

The *platform* object will send the call to the platform, in the parent window.

The proxies are implemented by two files:

- task-pr.js has to be loaded by the platform and when needed, creates a proxy so that the platform can access the task and grader objects. In case the task is on another domain, task-xd-pr.js must be used.  
- platform-pr.js has to be loaded by the task, and when needed, creates a proxy so that the task can access the platform. It adapts automatically cross-domain cases.

**Note :** Please note that when two consecutive calls are made to the platform or the task, there is no guarantee that the calls will be received in the same order by the destination actor.

# Securing communications with tokens

When a platform provides a task to a student, it manages the student’s access to its different parts (access to the task itself, to hints, solution, submission, etc.). To do so, it can provide an encrypted token to the task, containing the associated student’s rights as well as a date of generation (a token is valid for 48h) and the platform’s url. The token is [jws](https://datatracker.ietf.org/doc/draft-ietf-jose-json-web-signature/) using RS512 algorithm.

Tokens can also be used in the other direction, when the platform needs to be sure that the message it received comes from the task (in the case of a grader message in a contest). In this case, the token is signed by the task’s private key.

# API versions

The API version is an integer which is incremented each time there are changes which are incompatible with the previous version.  
Tasks and platforms can support different API versions. Through the task.getMetaData call, the task tells the platform whichs versions it supports with the parameters apiVersion and minApiVersion, which tell the highest and lowest API versions supported (by default 1).  
If the task and platform have no supported API version in common, task isn’t loaded and an error is raised.

## **Version history**

v2: Add task.reloadAnswerWithOptions

v1: Initial version

# Task and platform objects access

In order for the platform to call functions on the task and the task to call functions on the platform, each must know an object on which they can call the functions. This object can be the direct object or a proxy object if the platform and task can only communicate through postMessage (see implementation for examples of this).  
The *platform* object is always present in the global scope of the task’s iframe. The task and grader object are accessed by the platform through a *TaskProxyManager* object in the root scope. The following conventions apply:

## **Task side**

The task must provide a *task* object and a *grader* object in the global scope, containing the functions listed below.

## **Platform side**

The platform has access to a *TaskProxyManager* object in the global scope, containing two functions:

**getTaskProxy(idIframe, success, createNew, error)**

This function returns the task object from an iframe, based on the iframe id attribute. Once the task object is ready, *success* is called, with the task proxy as argument. If the operation fails, *error* is called, with no argument.

The *createNew* argument is a boolean. If not set or set to *false*, the function will return a proxy it has in cache corresponding to *idIframe*. If set to true, it will always create a new proxy.

**setPlatform(task, platform)**

This function tells the task object (as returned by previous function) that it should use *platform* as platform.

**deleteTaskProxy(idIframe)**

This function removes the task proxy.

**getUrl(taskUrl, token, platform, prefix)**

This function returns the url to give to the iframe. taskUrl is the base url of the task, token is the initial token that will be used, platform is the name of the platform as understood by the task, and prefix is an optional prefix added to communication messages, for debugging purpose only.

# Task functions

The following functions are provided by the task. Each function has a **callback** and an **errorCallback** parameters. The first is called in case of success, with the result of the function, the second is called in case of failure, with a string describing the error. The **errorCallback** parameter is optional.

**task.getViews(callback, errorCallback)**

This function provides an object containing the task views as root keys. It is used in combination with the task.load’s views parameter.

All views listed in the “Task Views” sections of this document are mandatory to appear in the root keys. The associated values are empty objects when the view is provided, and objects containing :

- the key *requires* and the value of the mapped view when the view is not available separately  
- the key *includes* and an array of views it includes

For example, a simple task providing views for statement and solution will return :

{  
  “task”: {},  
  “solution”: {},  
  “hint” : {requires: “task”},  
“forum” : {requires: “task”},  
“editor” : {includes: \[“submission”\]},  
“submission”: {}  
}

callback(views) takes one parameter, the javascript object as described above.

**task.load(views, callback, errorCallback)**

This is called after the task html has been loaded into the DOM, and may perform further initialization steps.

The views parameter tells the tasks which views to load. The parameter is an object describing the different parts to load. It describes, among other things, the views that will be loaded (other views may not be available if not asked here). This argument has the same structure as the argument of task.showViews(), but adds other possibilities as if these were views:

- *grader* must be set for task.gradeTask() to work  
- *metadata* must be set for task.getMetaData() to work

You need to call *showViews()* after *load()* in order to display a view.

callback() takes no parameter.

**task.getMetaData(callback, errorCallback)**

This function returns (as first argument of the callback) the metadata associated to the task. The function might not work if *metadata* was not passed to *task.load*.

*callback(metadata) takes one object parameter*, containing the following properties:

- **id (string)**: a unique identifier of the task, in the form of a unique uri, such as “<http://castor-informatique.fr/tasks/2012-FR-01-en>”  
- **language (string)**: the language code (ISO 639-1)  
- **version (number)**: a version number  
- **title (string, max 25 characters)**: the title of the task, to be displayed on the platform  
- **authors (array of strings)**: one or more authors  
- **translators (optional, array of strings)**: one or more translators  
- **license (string)**: the name of the license  
- **autoHeight (boolean, optional)**: true if the task can adapt itself to whatever height the platform offers (usually that height will be the height of the window minus the heights of a header and a footer in the platform)  
- **minWidth (int or string, optional):** minimum width (in px) the task needs to be displayed, default is 800\. The value “auto” should allow the task to take as much room as it can  
- **usesRandomSeed (boolean, optional)**: true if the task requires to get a randomSeed, default false  
- **usesTokens (boolean, optional)**: true if the task requires a task token (see below in “Token format”), default false  
- **browserSupport (optional, array):** list of browsers, and for each, if it’s supported / unsupported / untested. TODO: define format.
- **nbHints (int, optional):** the number of hints provided by the task. Default value is 0\.  
- **fullFeedback (boolean, optional):** a boolean indicating whether the task provides full feedback to the user on the validity of his answer (default is false)  
- **editorUrl (string, optional):** a direct URL to the editor for this task  
- **apiVersion (number, optional):** highest Bebras API version supported (default: 1\)  
- **minApiVersion (number, optional):** lowest Bebras API version supported (default: 1\)  
- TODO : boolean that says if grading can be validated by a token

When a task handles tokens, the fields returned by this function depend on the following fields of the token:

- *nbHints* is returned according to the token field *bHintsAllowed*  
- *authors* is returned according to *bAuthorsDisplayed*  
- *fullFeedback* is always returned  
- others are returned according to *bAllowPrivateMetaData*

**task.showViews(views, callback, errorCallback)**

This function makes the task display the views passed as argument.

The argument is an object containing the asked views as key, and *true* as value. For example, a platform asking the *hint* and *task* views should call *showViews()* with the argument

{  
  “task”: true,  
  “hint”: true  
}

In case the asked view is not provided by the task but mapped to another view (see *requires* key of the object returned by *getViews()*), the platform should call the mapped view. But the task should also provide a mapping to show the correct view if it is an unprovided view is asked. In such a case, the task must also raise an error.

callback() takes no parameter, and should be called when the views are visible

**task.unload(callback, errorCallback)**

This is called before the task html is removed from the DOM.

This function might be needed for tasks that use timers, which would otherwise execute code after the task’s html has been removed from the DOM. No timers should occur after this function calls the callback.

callback() takes no parameter and should be called once the task is completely unloaded.

**task.getAnswer(callback, errorCallback)**

This function is called by the platform to get the current answer provided by the user. It could be because the user requested to validate this answer, or because she selected a different question and the current state needs to be saved, etc.

callback(strAnswer) takes one string parameter: the current answer.

An empty string means no answer. In the rare case where an empty string is a valid answer for a given task, and not the absence of an answer, it should be up to the task to encode it with a special value. Depending on the task, values other than empty string can be the default value, it’s up to the platform to handle this.

When it makes sense, the task should store the answer in a way that doesn’t depend on the random seed.

~~The maximum length of an answer must be 10240 bytes.~~

**task.reloadAnswer(answer, callback, errorCallback)**

This is called to reload an answer. By convention, the default answer of the task is loaded when the answer argument is the empty string.

callback() takes no parameter and should be called when the answer has been loaded.

**task.reloadAnswerWithOptions(answer, options, callback, errorCallback)**

*Minimum API version: 2*  
This functions like reloadAnswer, but allows passing options, an object with the following parameters:

- **idUserAnswer (string, optional):** Specifies the idUserAnswer the answer corresponds to, for the task to possibly reload related submission data

**task.getHeight(callback, errorCallback)**

This function can be used to get the current height of the task, it is useful when the task is loaded in an iframe, so the platform can adapt it without showing a vertical scrollbar.

callback(height) takes one integer parameter: the current height of the task in px.

**task.updateToken(token, callback, errorCallback)**

Updates the task’s authentication token. callback() takes no parameter.

**task.getState(callback, errorCallback)**

This function returns a string representing the current state of the task as presented by the user. The platform does not have to understand its structure. It is only used for next function.

A state might contain, for example, the way things are currently being displayed to the user, with answers he did not validate yet, etc.

The maximum length of a state string must be 10240 bytes.

**task.reloadState(state, callback, errorCallback)**

This function reloads a state, as returned by previous function, in the task. When the answer validated by the user is not in the state, this function must be called after task.reloadAnswer().

By convention, the initial state is the empty string.

**task.gradeAnswer(answer, answerToken, callback, errorCallback)**

The answer field is a string

callback(score, message, scoreToken) should be called with three arguments:

- the score, a number between minScore and maxScore as returned by platform.getTaskParams()  
- a short message (preferably \< 50 characters) giving an overview of the evaluation  
- an optional JWS token signed by the task, containing the fields *score*, *idUser* and *idItem*

The grader is in javascript, but this does not mean that the student has access to it during the contest. For instance, the grading may take place after the contest is over, in the contest organizer’s browser. In this case, the platform can load all the answers in the browser, grade them one by one, and have the browser send the results back to the platform where they are saved.

This function is available if *grader* was passed to *task.load*. For tasks handling tokens, grader should be available only if the token field *bAllowGrading* is true.

The **answerToken** is a token containing the answer (field *sAnswer*), as well as *idUser* and *idItem* and *score*. This argument is mandatory for tasks using the token system and can be ignored by the others. This field is necessary to check if the user has informed the platform about the submission of this answer.

**task.deviceProxy(type, methodName, args, callback, errorCallback)**

Allows the device proxy ([https://github.com/France-ioi/bebras-device-proxy](https://github.com/France-ioi/bebras-device-proxy)) to send information to the task side, usually to notify of events.

# Platform functions

**platform.getTaskParams(key, default, callback, errorCallback)**

where *key* and *default* are an optional parameters.

If no parameter is passed, the callback should be called, with one parameter: an object containing the following key-value pairs:

- *minScore*: the score when the answer is false  
- *maxScore*: the score when the answer is completely right  
- *noScore*: the score when there is no answer  
- *randomSeed*: see below  
- *readOnly*: can be set to true to prevent the task from displaying validation buttons  
- *fullFeedback*: should the task display full feedback to the user, default true  
- *options*: an object containing options as defined by the task  
- *returnUrl* is optional, and its use is optional too. It contains an url that will be called if the evaluation is done in an asynchronous way. The url will be called with the POST variables *score*, *message* and *scoreToken* with the same value as those of the javascript callback, plus an additional ‘action’ variable with value ‘  rReturn’.

*randomSeed* is an integer that can be used to shuffle choices, or add other types of randomness, but should do so in a deterministic manner, such that two uses of the task with the same random seed generate exactly the same question. If the metadata returned by task.getMetaData doesn’t contain usesRandomSeed: true, this value should be 0\.

*options* can be used when the same task has several versions. For example, there could be two difficulty levels, defined with *options \= { difficulty: ‘hard’ }* or *{ difficulty: ‘easy’ }*.

If *key* parameter is passed, the callback should be called, with one parameter: the value corresponding to the argument, in the main object, or, if not present, in the options object. If no parameter is found, the function returns or *default* if present.

**platform.validate(mode, callback, errorCallback)**

This function may be called by the task when the user indicates, through the task, that the current answer should be validated. The parameter mode gives an indication to the platform as to what to do next. It can have the following values:

- “**stay**”: the platform should stay on this question after storing the answer.  
- “**done**”: the user is probably done with this question. The platform may go to the next question.  
- “**next**”: the user is definitely done with this question. The platform should go to the next question.  
- “**cancel**”: the user wants to cancel his submission to the question.

When the result of platform.getTaskParams has *readOnly* set to true (and, for tasks handling tokens, if the token field *bReadOnly* is set to true), this function should not be called by the task. If it is, it should have no effect.

**TODO: change API to simplify grading process :**

- taskPlatform can call task.gradeAnswer for old answers  
- otherwise, a task calls platform.authorizeGrading(answer) first, then grades the answer by itself  
- it then calls platform.updateScore({answer: …, score: …, message: …}, signature)  
- we add a separate function for the current mode parameter in platform.validate : platform.taskDone()

**platform.showView(views, callback, errorCallback)**

Function called when the user asks the task to change the view from a button or other interface within the task itself. In this case, the task should ask the platform to handle the view change (the task should not change the view directly).

The parameter is a string corresponding to a single view.

**platform.openUrl(pathParams, callback, errorCallback)**

This function tells the platform that it should open another item or URL.  
It is called with an argument pathParams which is an object with the parameters :

- one of :  
  - itemId (string) : numerical ID of the item in the platform  
  - path (string) : path to the item in the platform, for instance ‘123/456/789’  
  - url (string) : URL to open, for instance ‘<http://google.com>’  
  - textId (string) : text ID of the item to open  
- newTab (boolean, optional) : open in a new tab/window

For legacy reasons, pathParams can also be a string ; in that case, that string will be interpreted as the ‘path’ parameter.

Example : platform.openUrl({path: ‘123/456/789’, newTab: true}, callback, errorCallback);

**platform.askHint(hintToken, callback, errorCallback)**

The task should notify the platform when the user asks for an hint for it to save the request.  
If a token is present, the task does not perform any action and waits for the platform to update the token, then call the callback.

*hintToken* is a signed token containing a property “askedHint”, a json object describing the hint being asked.

The platform is expected to make sure that the new hint has not already been requested in the past, and call errorCallback otherwise.

The task is expected to prevent the user from asking for another hint if the callback for another hint has not been called yet. It may only repeat asking for the same hint until it works.

The reason hintToken needs to be signed, is that we want to make sure this is a valid hint to ask, before storing the fact that it was asked. This way, we don’t have to check that the hint request is valid everywhere else, potentially many times.

TODO: we might rename askHint into authorizeHint

**~~platform.updateHeight(height, callback, errorCallback)~~ Deprecated**

*~~The task can notify the platform when it knows its height changes. The new height is passed to the platform through this function, the argument is in px.~~*

**platform.updateDisplay(options, callback, errorCallback)**

The task can notify the platform when it knows its display changes. The options argument is an object with optional properties :

- height : the new height of the task in px  
- views : the new list of available views for the task  
- scrollTop (integer) : request the platform to scroll to this distance in px from the top of the task

**platform.log(data, callback, errorCallback)**

Tells the platform to log some data.

Data must be an array, whose first item is a string describing the type of log it is, such as :

- “error”  
- “activity”  
- …

The other items of the array are the data corresponding to the log.

**platform.initWithTask(task)**

When the task is ready, it tells the platform it is by calling this function with the task itself as argument.

**platform.deviceProxy(type, methodName, args, callback, errorCallback)**

Allows the device proxy ([https://github.com/France-ioi/bebras-device-proxy](https://github.com/France-ioi/bebras-device-proxy)) to request the platform side to execute operations.

# Platform events

It is necessary for some APIs (such as standard buttons and messages) to be able to hook on some events of the platform. This is done by a subscribe system based which is described here.

# Events

The different events that need to be emitted are the following:

- **load:** at *task.load()*  
- **unload:** at *task.unload()*  
- **reloadAnswer:** at *task.reloadAnswer()*  
- **validate:** at *platform.validate()*

They correspond to events triggered after calls to functions.

# Subscribing to events

**platform.subscribe(object)**

This function makes an object subscribe to all the previously described events. When one of these events occur, the platform will call **object\[eventName\](params)** with *eventName* being one of the names described above, and *params* the parameters of the function the signal corresponds to, in an array. *name* is an identifier of the object.

**platform.unsubscribe(object)**

This function unsubscribes the object.

# Grader API

**Warning:** the grader object is deprecated, the grader.gradeTask function is replaced by task.gradeAnswer, with the same signature

**grader.gradeTask(answer, answerToken, callback, errorCallback)**

See task.gradeAnswer

# Token format

In general, the required values to be put in all jws tokens are:

- date (string, format ‘d-m-Y’): the day the token has been generated (a token is valid until the end of the day after)  
- itemUrl (string): the url of the task  
- idUser (number): the user ID according to the platform

In most cases, platforms need to differentiate their users, and be sure that a user cannot access other users’s tasks. In these cases, when a token is used it can contain the field ‘idUser’. Tasks recording user informations should take care of conflicts between identical idUser from different platforms.

**TODO: we should just have a date+signature added to regular data, so that the format is basically the same whether we use tokens or not**

## **Task token**

Here is a list of standard rights which can be encoded in the token sent by the platform to the task. Some platforms and tasks may include additional rights for specific needs.

| Parameter | Description |
| :---- | :---- |
| itemUrl | Url of the task, which may contain an id of the task |
| randomSeed | A random seed, used to identify a specific task instance for a given itemUrl |
| platformName | Name of the platform, to be used to verify signatures |
| idItemLocal | An id of this instance of the item in the platform. The task may store a state for a (itemUrl, idItemLocal) |
| idAttempt | An id of the attempt on the platform side |
| idUser | Unique identifier of the user within the platform. Makes it easier to recover data. |
| bAccessSolutions | True if the task may display the solution and explanations |
| bAuthorsDisplayed | True if the task should display the authors |
| bSubmissionPossible | True if the user may attempts submissions.Ex: submissions may be blocked once a contest is over |
| bAllowPrivateMetaData | True if the task may load private data (origin, etc.) |
| bHintsAllowed | True if the user may ask for hints (assuming hints exist) |
| nbHintsGiven | Number of hints authorized so far |
| sHintsRequested | JSON array of hints authorized so far |
| bIsAdmin | Not used yet. Insteard, there should be a bAccessWrite |
| bReadAnswers (?) | **TODO: check why it’s there** |
| aAnswers (?) | **TODO: check why it’s there** |
| idItem (?) | **TODO: check why it’s there (it shouldn’t)** |
| sSupportedLangProg | Optional parameter specific to programming tasks where multiple languages may be available. |

The token is signed with the platform’s private key. The task must check the validity of the token before engaging any of the following actions:

- give access to the task  
- authorize a hint  
- authorize a submission  
- give access to the solution

The token is passed to the task by the url *sToken* query parameter. For example if a platform loads [http://task.pem.dev/my/task/](http://task.pem.dev/my/task/), it will include an iframe with src [http://task.pem.dev/my/task/](http://task.pem.dev/my/task/)?sToken=...

## **Answer Token**

Answer tokens are sent when calling task.gradeAnswer, they contain the fields:

| Parameter | Description |
| :---- | :---- |
| itemUrl | Url of the task, which may contain an id of the task |
| randomSeed | A random seed, used to identify a specific task instance for a given itemUrl |
| platformName | Name of the platform, to be used to verify signatures |
| idItemLocal | An id of this instance of the item in the platform. The task may store a state for a (itemUrl, idItemLocal) |
| idAttempt | An id of the attempt on the platform side |
| idUser | Unique identifier of the user within the platform. Makes it easier to recover data. |
| sAnswer  | Content of the answer (a string) |
| idUserAnswer | This identifies the record that stores the answer on the platform side. This should be sent back by the task in the grader token. |
| sHintsRequested | JSON list of hints requested. The score may depend on them |
| nbHintsGiven | Number of hints given (could be computed from sHintsRequested) |
| idItem | **TODO: check why it’s there (it shouldn’t)** |

## **Grader/Score Token**

The token sent by the grader contains the following fields (in addition to the usual fields):

| Parameter | Description |
| :---- | :---- |
| itemUrl | Url of the task, which may contain an id of the task |
| randomSeed | A random seed, used to identify a specific task instance for a given itemUrl |
| idUser | Unique identifier of the user within the platform. Makes it easier to recover data. |
| score | The score given to the graded answer |
| message | A message that explains the score |
| idUserAnswer | The identifier of the answer, as sent in the answer token |
| idItemLocal | An id of this instance of the item in the platform. The task may store a state for a (itemUrl, idItemLocal) |
| idAttempt | An id of the attempt on the platform side |
| idItem | **TODO: check why it’s there (it shouldn’t)** |

# Appendix 1

## Examples of function calls

### Task initialization

1. user clicks on the link of a task  
2. the platform generates a token containing at least:  
   - the user login  
   - the date  
   - the asked task  
   - the maximum hint number the user is allowed to ask  
3. the platform calls an iFrame with this token  
4. when the iFrame is loaded, the platform get the task object from the iFrame through **task \= TaskProxyManager.getTask(idIframe)**  
5. the platform makes the necessary initialization steps to have a platform object implementing the different functions of the API, and tells the task to communicate with this object, through **TaskProxyManager.setPlatform(task, platform).**  
6. the platform calls **task.load()** with the views it wants to load  
7. it then calls **task.setViews()** with the view it wants to be displayed  
8. it can then, if relevant, call **task.reloadAnswer()** with a previously saved answer, or/and **task.reloadState()** with a previously saved state.

### Hint asking

1. User asks for a hint by pressing a button inside the task  
2. the task calls **platform.askHint()**  
3. the platform performs some checks and decides to allow the user to obtain this hint  
4. the platform builds a new token, incrementing its maxAllowedHintNum field  
5. the platform calls **task.updateToken()** with this new token and waits for the callback to be called  
6. The platform calls the callback sent by the task inthe platform.askHint() call  
7. The task shows the hint

### Answer validation

1. User types an answer in the task and validates  
2. the task calls **platform.validate()**  
3. the platform registers the fact that the user is submitting an answer  
4. the platform calls **task.getAnswer()** to get the answer  
5. the platform update the token with permission values and creates an answer token  
6. the platform calls **grader.gradeTask()** with this token, if relevant.

# Appendix 2

# Planned changes

## **Answer vs state**

The main changed planned for this API is to replace getAnswer \+ getState and reloadAnswer \+ reeloadState, with just getStateAndAnswer, and reloadStateAndAnswer.

The main goal is to make sure both are always saved and reloaded simultaneously.

In some cases, the task may only reload an answer but have an empty state, for example when we display a user’s submission on a forum or to a teacher, in which case the current state doesn’t matter.

On the other hand, if we reload the state, we always want to also reload the answer associated with it if there was one.

A platform may decide to ignore the state and only store the answer. Or it may temporarily save the state in the browser, but only send the answer to the servers, to save space.

## **Tokens**

Tokens are basically an encoded object with its signature.

Some tasks support tokens and others don’t, but the API should be similar in both cases.

Idea: for tasks that don’t support tokens, we just provide a non-encoded object, while for tasks that support tokens, we provide the exact same object, but encoded and with a signature.
