---
title: Badges system
parent: Authentication systems
nav_order: 10
---

# Badges system

November 2017

Imported from [France-ioi/projects-overview `docs/badges.md`](https://github.com/France-ioi/projects-overview/blob/master/docs/badges.md) (written November 2017). For Algorea-specific badge handling, see also [Badges](../algorea/task_platforms/badges.md).

Badges represent informations attached to a user on a given platform, that can be transmitted to other platforms. These informations may represent awards, access rights, appartenance to a group, competence mastered, etc. that a user has acquired on the source platform, and that could be useful on other platforms.

A badge may be used on another platform as a requirement to obtain access to some content, as a way to brag about achievements, etc. or even as an authentication method.

## Badge verification

A badge can be an URL to a verification service, along with a code.

For instance, the [login-module](https://github.com/France-ioi/login-module) can be required to ask users who log in for a badge they acquired when participating in a contest on [bebras-platform](https://github.com/France-ioi/bebras-platform). The badge URL will then be `https://badges.example.com/path/to/badge`, where `path/to/badge` is the target badge we are requesting.

Users will be prompted for a code; they can either input a code, which will be checked against the badge verification service, or say they don't have the code. If they input a valid code, the login-module will then store the badge for this user. From then on, this badge will be presented to the login request origin upon each successful login. It can be used for instance in [AlgoreaPlatform](https://github.com/France-ioi/AlgoreaPlatform) to allow access to some content only to users with a certain badge.

The verification is done by a POST request to the badge URL. When the user inputs a code, the login-module will send a POST request to the badge URL, with the parameters `action='verifyCode'` and the user `code='abcdef'`. If the code is valid, bebras-platform will then answer with some information about the user who acquired the badge in JSON format:

```json
{
    "sFirstName": "Example",
    "sLastName": "Name",
    "sSex": "Male",
    "sEmail": "name@example.com",
    "sZipcode": "12345",
    "franceioiID": "678"
}
```

The fields `sFirstName`, `sLastName`, `sSex`, `sEmail`, `sZipcode` are generic fields, but the answer can also contain fields specific to the badge, such as `franceioiID` in the example above.

If the code is invalid, the answer will be null.
