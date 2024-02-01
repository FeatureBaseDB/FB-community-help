---
title: Cloud database details
layout: default
parent: Manage databases
grand_parent: Cloud
nav_order: 10
---

# Where do I find database details?
{: .no_toc }

FeatureBase provides access to details and statistics on your database.

Additionally, a disk utilization graph is available on the **Home** page which lists disk space used by the database and its data.

{% include page-toc.md %}

## Before you begin
{: .no_toc }

* [Learn about Cloud databases](/docs/cloud/cloud-databases/cloud-db-manage)
* [Create a FeatureBase database](/docs/cloud/cloud-databases/cloud-db-create-custom)

## How do I view database details?

* Click **Databases** > `your-database-name` to open the summary page.

## Detail view

| Detail | Description | Additional information |
|---|---|---|
| Database ID | Unique identifier for the database required for API and FBSQL connections that do not require user credentials | * [Cloud API](https://api-docs-featurebase-cloud.redoc.ly/){:target="_blank"}<br/>* [FBSQL tool](/docs/tools/fbsql/fbsql-home) |
| Status | Cloud database states include Provisioning and Running. | [Learn about cloud database states](/docs/cloud/cloud-databases/cloud-db-states) |
| Memory | Current available memory based on your choice of database shape | [Learn about shaped databases](/docs/cloud/cloud-databases/cloud-db-manage) |
| Owner | User name of account that created the database | [Manage users](/docs/cloud/cloud-users/cloud-users-manage) |
| Version | Database version as represented by `<current-featurebase-version>-<commit-hash>` | [Issues with Database version](/docs/cloud/cloud-troubleshooting/issue-cloud-version-unknown/) |
| Created | Time and date since database creation with user name of creator |  |
| Last modified | User account, time and date of last alteration to the database |  |
| Disk utilization | Actual memory used by database and data |  |
| Query endpoint URL | Endpoint used for Cloud REST API queries | [Cloud API](https://api-docs-featurebase-cloud.redoc.ly/){:target="_blank"} |

## Related information

* [Learn about database query and ingestion statistics](/docs/cloud/cloud-databases/cloud-db-stats)
* [Learn about cloud database states](/docs/cloud/cloud-databases/cloud-db-states)
