---
title: Cloud database states
layout: default
parent: Manage databases
grand_parent: Cloud
nav_order: 11
---

# What states can my Cloud database have?
{: .no_toc }

FeatureBase databases can have different states depending on a number of conditions.

{% include page-toc.md %}

## Before you begin

{% include /cloud/cloud-before-begin.md %}
* [Learn how to manage databases](/docs/cloud/cloud-databases/cloud-db-manage)

## How do I query my database state?

You can query the database state in the following ways:

* [Query database state using the API](https://api-docs-featurebase-cloud.redoc.ly/latest#operation/getDatabase){:target="_blank"}
* [Query database state in the GUI](/docs/cloud/cloud-databases/cloud-db-details)

## Post-creation states

| Database Status | Definition | Available for use? |
|---|---|---|
| CREATING | Chosen database resources are being provisioned | No |
| PROVISIONING | Database is being created with provisioned resources | No |
| RUNNING | Database is running normally and billing has commenced | Yes |
| UPDATING | A database update that will cause limited performance degradation | Yes |

### Backup and restore states

| Database Status | Definition | Available for use? |
|---|---|---|
| BACKUP | Creating a backup of the database | Yes |
| RESTORING | Restoring data from a backup | No |

### Post-delete states

| Database Status | Definition |
|---|---|
| DELETING | Database resources and data are being deprovisioned |
| DEPROVISIONING | Database resources are being deprovisioned as a result of database deletion |
| DELETED | Database has been deleted successfully and billing has stopped |

### Error states

{: .note}
[Contact FeatureBase Support on Discord for help](https://discord.com/invite/bSBYjDbUUb){:target="_blank"}

The database is unavailable when it has the following states:

| Database Status | Definition |
|---|---|
| FROZEN | An error has occurred with a database backup |
| FAILED | Database is in unrecoverable state as a result of failed provisioning of resources, restoration from backup or deletion |
