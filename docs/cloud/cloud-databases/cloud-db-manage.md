---
title: Manage databases
layout: default
parent: Cloud
has_children: true
nav_order: 6
has_toc: false
---

# How do I manage FeatureBase Cloud databases?
{: .no_toc }

{% include /cloud-db/cloud-db-shaped-summary.html %}

{% include /cloud-db/cloud-db-create-api.md %}

{% include page-toc.md %}

## Before you begin
{: .no_toc }

{% include /cloud/cloud-before-begin.md %}
* [FeatureBase database pricing](https://www.featurebase.com/pricing){:target="_blank"}

## What are the benefits and limitations of Cloud databases?

|  | Benefits | Limitations |
|---|---|---|
| Resources | Bundled resources to ensure best performance, [priced by the hour](https://www.featurebase.com/pricing){:target="_blank"} | Resources cannot be changed once database is created. |
| Data | Nodes are replicated data to ensure availability of your data | Migrate data to new database if resources do not meet your needs |

## How do I create a Cloud database?

<!--The following is HTML because issues occur when `include` files are inserted into markdown tables-->

<table>
  <tr>
    <th>
      Database type
    </th>
    <th>
      Description
    </th>
    <th>
      Additional information
    </th>
  </tr>
  <tr>
    <td>
      <a name="small-db"></a>Small
    </td>
    <td>
      {% include /cloud-db/cloud-small-db-summary.md %}
    </td>
    <td>
      <a href="/docs/cloud/cloud-databases/cloud-db-create-small">Learn how to create a small database</a>
    </td>
  </tr>
  <tr>
    <td>
      <a name="sample-db"></a>Sample
    </td>
    <td>
      {% include /cloud-db/cloud-sample-db-summary.md %}
    </td>
    <td>
      <a href="/docs/cloud/cloud-databases/cloud-db-create-sample">Learn how to create a sample database</a>
    </td>
  </tr>
  <tr>
    <td>
      Custom
    </td>
    <td>
      {% include /cloud-db/cloud-db-shaped-summary.html %}
    </td>
    <td>
      <a href="/docs/cloud/cloud-databases/cloud-db-create-custom">Learn how to create a custom database</a>
    </td>
  </tr>
</table>

## How do I learn more about my database?

* [Learn where to find database details](/docs/cloud/cloud-databases/cloud-db-details)
* [Learn about database states](/docs/cloud/cloud-databases/cloud-db-states)
* [Learn where to find query and ingestion statistics](/docs/cloud/cloud-databases/cloud-db-stats)

## Cloud database backups

FeatureBase automatically backs-up your databases every 24 hours.

{: .note}
[Contact FeatureBase Support on Discord](https://discord.com/invite/bSBYjDbUUb){:target="_blank"} to ask questions or to get help restoring a backup.

## How do I drop my database?

There are two ways to drop (delete) FeatureBase Cloud databases:
* [Delete database using Cloud API](https://api-docs-featurebase-cloud.redoc.ly/latest#operation/deleteDatabase){:target="_blank"}
* [Delete database using Cloud GUI](/docs/cloud/cloud-databases/cloud-db-delete)

## Next step

* [Learn how to manage FeatureBase Cloud tables](/docs/cloud/cloud-tables/cloud-table-manage)
