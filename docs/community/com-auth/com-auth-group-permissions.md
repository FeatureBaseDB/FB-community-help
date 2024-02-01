---
title: Authentication groups
layout: default
parent: Community authentication
grand_parent: Community
---

# How do I set up authentication groups?
{: .no_toc }

A permissions file must be created when authentication is configured for FeatureBase Community.

The permissions file:
* maps the identity provider (IdP) group IDs to read/write permissions to specified FeatureBase indexes
* has one group ID for cluster-level administration access.

Users cannot authenticate with FeatureBase if they do not belong to a group, or the group has no permissions granted to FeatureBase indexes.

{% include page-toc.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [Configure TLS authentication](/docs/community/com-auth/com-auth-tls)
* Create `permissions.yaml` in `/<featurebase-install-directory/opt/`

## Permissions syntax
```
user-groups:
"<group-id1>":
    "<index1>": "<write>"
    "<index2>": "<read>"
"<group-id2>":
    "<index1>": "<read>"
admin: "<groupd-id3>
```

## Parameters

| Parameter | Description |
|---|---|
| `<group-id1>` | name of equivalent group in IdP. |
| `<index-n>` | FeatureBase index to grant as read/write to the group. |
| `admin` | Designated administrator group. |

## Additional information

* Restart the FeatureBase Community server if you make alterations to the permissions file

{% include /com-auth/com-config-group-tls-additional.md %}

## Next step

* [Update Featurebase configuration](/docs/community/com-auth/com-auth-tls)
