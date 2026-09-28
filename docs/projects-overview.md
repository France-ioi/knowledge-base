---
title: Projects overview
nav_order: 1.5
---

# Projects overview

Imported from [France-ioi/projects-overview](https://github.com/France-ioi/projects-overview/blob/master/README.md). **Not updated since June 2021** — this catalogue needs a refresh (repositories, roles, and links may be outdated).

All of our tools are under MIT License, even when the License is not specified in the repository. All of our tasks published in these repositories are under [CC-BY-SA](https://creativecommons.org/licenses/by-sa/2.0/?) license.

## Presentation websites

These are just basic presentation websites for contests organized by France-ioi

* [alkindi-site](https://github.com/France-ioi/alkindi-site) corresponds to [concours-alkindi.fr](http://concours-alkindi.fr)
* [Castor-informatique.fr](https://github.com/France-ioi/Castor-informatique.fr) corresponds to [castor-informatique.fr](http://castor-informatique.fr)

## Login module

* [login-module](https://github.com/France-ioi/login-module)
  This module takes care of the authentication of users into our different platforms. Different authentication methods are supported: plain login/password, google, facebook, authentication through LTI, SAML (in progress), and some custom authentication from other platforms such as PMS.
* [lti-to-bebras](https://github.com/France-ioi/lti-to-bebras)
  This module is used here as a way to authenticate to the login-module through the LTI standard. It is also used to directly integrate tasks into platforms that support LTI (see below).

## Algorea learning platform

* [AlgoreaPlatform](https://github.com/France-ioi/AlgoreaPlatform)
  This is the main repository for our new exercise platform. The goal is for this platform to eventually replace our other platforms, once all the required features are in place. A beta version can be tested on [parcours.algorea.org](http://parcours.algorea.org)
  It uses:
  * [commonFramework](https://github.com/France-ioi/commonFramework) at its heart for client/server synchronization
  * [login-module](https://github.com/France-ioi/login-module) for authentication
  * [pem-platform](https://github.com/France-ioi/pem-platform) to integrate tasks through the task API

## Bebras contest platform

* [bebras-platform](https://github.com/France-ioi/bebras-platform)
  This platform is specialized in organizing large scale contests that make use of client-side only interactive tasks. It uses tasks that implement the task integration API as well as the installation API.
  It uses:
  * [commonFramework](https://github.com/France-ioi/commonFramework) for client/server synchronization
  * ...

Production versions of the contest side of this platform are available here (among other places):

* [concours.castor-informatique.fr](http://concours.castor-informatique.fr)
* [epreuve.concours-alkindi.fr](http://epreuve.concours-alkindi.fr)

## Alkindi contest platform

This platform is used to run the rounds 2 and up of the Alkindi cryptography contest. Students that are qualified can log in, create or join teams, access to the current round of tasks and collaborate to solve them.

* [alkindi-frontend](https://github.com/France-ioi/alkindi-frontend)
* [alkindi-backend](https://github.com/France-ioi/alkindi-backend)

## Alkindi tasks

Tasks for the Alkindi platform are developed separately, but do not use the task API yet. They can mostly be tested independently of the platform, but are not yet ready to be integrated in other platforms.

* [alkindi-task-lib](https://github.com/France-ioi/alkindi-task-lib)
* [alkindi-task-adfgx](https://github.com/France-ioi/alkindi-task-adfgx)
* [alkindi-task-playfair](https://github.com/France-ioi/alkindi-task-playfair)
* [alkindi-task-example](https://github.com/France-ioi/alkindi-task-example)

## Codecast learning tool

The codecast project is a C language interpreter and debugger that runs in the browser, except for the parsing stage which is done on the server using clang. The tool is designed as an educational tool. Teachers can record a session where they speak while using the tool to demonstrate the execution of C code to teach a new concept. The recording can then be played by students that can interrupt it at any time to take over and play with the debugger.

It can be tested on [codecast.france-ioi.org](https://codecast.france-ioi.org), try the examples in the top-right corner.

* [codecast](https://github.com/France-ioi/codecast): recording/replaying events and voice
* [persistent-c](https://github.com/France-ioi/persistent-c): C interpreter in the browser
* [c-to-json](https://github.com/France-ioi/c-to-json): uses clang to parse C and send a json AST to the client

## Monitoring tools

* [bebras-monitor](https://github.com/France-ioi/bebras-monitor)
  This tool is used to monitor connexions to a platform, show statistics about the different ips that connect to it, and give the possibility to whitelist or blacklist some ips. This helps to protect against some types of DDOS attacks.
* [bebras-guard](https://github.com/France-ioi/bebras-guard)

## Task integration API

This API’s purpose is to make it easy to integrate a given task in different platforms, and for platforms to use tasks from all types of sources. The API is [documented here](https://docs.google.com/document/d/1JMca_fGNyLtSPjsTuIv2owcnNt2lH4iHkZ1pTURIL6A/edit?usp=sharing)

* [pem-task](https://github.com/France-ioi/pem-task)
  Scripts that are part of the task-side of the task integration API.
* [pem-platform](https://github.com/France-ioi/pem-platform)
  Scripts that are part of the platform-side of the task integration API
* [pem-task-validator](https://github.com/France-ioi/pem-task-validator)
  A tool to validate that tasks and platforms conform to the Task integration API.
  It also provides a way to check that grading works as expected.
* [fioi-task-importer](https://github.com/France-ioi/fioi-task-importer)
  A tool to import tasks from svn ([documentation here](http://france-ioi.github.io/fioi-task-importer/)):
  * For server evaluated tasks, import their content into a mysql database of tasks, to be used by TaskPlatform
  * For pure client tasks (bebras-based) or presentation, simply place the files on a server. (This is temporary)
* [lti-to-bebras](https://github.com/France-ioi/lti-to-bebras)
  Wrapper to present tasks that conform to our Integration API, as LTI-compliant tasks. (also used with login-module to authenticate users through LTI)

* [pem-task-compiler](https://github.com/France-ioi/pem-task-compiler)
  TODO: still used somewhere?
* [pem-installation-api](https://github.com/France-ioi/pem-installation-api)
  Empty
* [tmp-fioi-task-demo](https://github.com/France-ioi/tmp-fioi-task-demo)
  TODO
* [fioi-tasks-template](https://github.com/France-ioi/fioi-tasks-template)
  TODO

## Server-evaluated programming tasks

This set of tools is used to offer programming tasks, where the solutions of the students are sent to servers to be graded.

* [TaskPlatform](https://github.com/France-ioi/TaskPlatform)
  This is the main interface that hosts programming tasks, and is the user-facing entry points of programming tasks.
* [fioi-editor2](https://github.com/France-ioi/fioi-editor2)
  This is the ace-based multi-file editor used by TaskPlatform to let the user edit different solutions in different languages, as well as different test cases. Also integrates a Blockly editor.
* [submission-manager](https://github.com/France-ioi/submission-manager)
  This is an interface that presents the results of the grading of a submission. It is intended to be integrated in the TaskPlatform interface, or any similar interface.
* [graderqueue](https://github.com/France-ioi/graderqueue)
  Submissions from students are sent to this queue, and different servers connect to that queue to obtain their next submission to grade. The repository also includes graderserver, which fetches tasks from this queue and sends them for evaluation to taskgrader.
* [taskgrader](https://github.com/France-ioi/taskgrader)
  This is the tool that actually grades a submission, running it within a sandbox (isolate), on a list of specified test cases, etc. The repository includes lots of tools to create, test and submit tasks ([documentation here](http://france-ioi.github.io/taskgrader/)).
* [Jvs2Java](https://github.com/France-ioi/Jvs2Java)
  This is a simple script that converts programs written in the JavaScool language (a simplified version of Java), into pure Java, so that they can be graded

* [fioi-editor](https://github.com/France-ioi/fioi-editor)
  TODO. Previous version of fioi-editor2 ? Deprecated ?

## Bebras tasks

* [bebras-tasks](https://github.com/France-ioi/bebras-tasks)
  This repository contains all past tasks from our Castor Informatique contest. These can be developped and tested outside of any platform.
  It uses:
  * [bebras-modules](https://github.com/France-ioi/bebras-modules)

These tasks can be tested as part of our contest archive on [concours.castor-informatique.fr](http://concours.castor-informatique.fr), or directly on [castor-informatique.fr/questions](http://castor-informatique.fr/questions).

## Tasks libraries

* [bebras-modules](https://github.com/France-ioi/bebras-modules)
  This repository contains all types of libraries that are used to create various interactive tasks. Each library should probably have its own repository, but we want non-developers to be able to install everything just with an svn checkout of a private repository where we work on future contest tasks.
* [fioi-blockly](https://github.com/France-ioi/fioi-blockly)
  Modifications to Blockly, overriding and adding some blocks to Blockly; meant to be included after Blockly. Modifications include:
  * Support of dictionaries
  * Support of std input / output functions
  * Other: TODO Michel
* [drag-and-drop-js](https://github.com/France-ioi/drag-and-drop-js)
  This library is used to create tasks that make heavy use of drag & drop within various containers.
* [bebras-math-template](https://github.com/France-ioi/bebras-math-template)
  TODO. This is an example of task that uses MathJax

## Task editor

* [task-editor](https://github.com/France-ioi/task-editor)
  This repository contains an editor that takes a json schema and some templates, and provides a visual interface to edit a task based on these.

## Bebras review

* [bebras-review](https://github.com/France-ioi/bebras-review)
  This tool is intended to help members of the Bebras community to review tasks that are created by many countries each year, and help them select a subset of tasks for their contest.

## Synchronization framework

* [commonFramework](https://github.com/France-ioi/commonFramework)
  This repository contains a few tools that are shared by several platforms. The main one is the synchronization framework, which takes care of synchronizing a subset of a mysql database with as small client-side database.

## Forks of external tools

* [oauth2-basicauth](https://github.com/France-ioi/oauth2-basicauth)
  Used by the login-module. TODO: why forked?
* [dbv](https://github.com/France-ioi/dbv)
  Used to maintain the schema migrations of the database of different projects.
* [lti](https://github.com/France-ioi/lti)
  Libraries to manipulate the LTI standard, used to integrate our tasks into platforms that support LTI, and to use LTI platforms as an authentication method for the login-module
* [jschannel](https://github.com/France-ioi/jschannel)
  Used to communicate between tasks and platforms. We need to make sure we have a version that never changes, so that the API can be based on that specific version.
