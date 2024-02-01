---
title: Reference - Cloud user roles
layout: default
parent: Manage users
grand_parent: Cloud
nav_order: 8
has_toc: false
---

# Reference: Cloud user roles
{: .no_toc }

{% include /cloud-users/cloud-summary-user-roles.md %}

{% include page-toc.md %}

{% include /cloud-users/cloud-summary-api-key-privs.md %}
## User management privileges

| Privilege | Applicable role(s) |
|---|---|
| [Login](/docs/cloud/cloud-db-connect/cloud-login) | User, Administrator |
| [Invite users](/docs/cloud/cloud-users/cloud-user-invite) | Administrator |
| [Copy invite URL](/docs/cloud/cloud-users/cloud-user-invite#provide-invitation-url-optional) | Administrator|
| [Read user profiles](/docs/cloud/cloud-users/cloud-users-view-search) | User (Own account), Administrator |
| [Update user profile](/docs/cloud/my-account/cloud-user-personal-update) | User (Own account), Administrator |
| [Alter role](/docs/cloud/cloud-users/cloud-user-edit-role) | Administrator (All but own account) |
| [Reactivate user account](/docs/cloud/cloud-users/cloud-user-deactivate#reactivate-a-user) | Administrator |
| [Deactivate user account](/docs/cloud/cloud-users/cloud-user-deactivate) | Administrator |

## Database management privileges

| Privilege | Applicable role(s) |
|---|---|
| [Create databases](/docs/cloud/cloud-databases/cloud-db-create-custom) | User, Administrator |
| [Read & query databases](/docs/cloud/cloud-query/cloud-query-home) | User, Administrator |
| [Delete databases](/docs/cloud/cloud-databases/cloud-db-delete) | User, Administrator |

## Table management privileges

| Privilege | Applicable role(s) |
|---|---|
| [Create tables](/docs/cloud/cloud-tables/cloud-table-create) | User, Administrator |
| [Read & query tables](/docs/cloud/cloud-query/cloud-query-home) | User, Administrator |
| [Upload Data](/docs/cloud/cloud-ingest/cloud-table-upload-data) | User, Administrator|
| [Add table column](/docs/cloud/cloud-tables/cloud-table-add-column) | User, Administrator|
| [Delete table column](/docs/cloud/cloud-tables/cloud-table-delete-column) | User, Administrator|
| [Delete tables](/docs/cloud/cloud-tables/cloud-table-delete) | User, Administrator |

## Organization management privileges

| Privilege | Applicable role(s) |
|---|---|
| Read organization details | Administrator |
| [Update organization details](/docs/cloud/cloud-org/cloud-org-address) | Administrator |
| [Update billing contact](/docs/cloud/cloud-org/cloud-org-update-billing) | Administrator |
| [Update technical contact](/docs/cloud/cloud-org/cloud-org-update-tech-contact) | Administrator |


## Further information

* [Learn how to change user roles](/docs/cloud/cloud-users/cloud-user-edit-role)
