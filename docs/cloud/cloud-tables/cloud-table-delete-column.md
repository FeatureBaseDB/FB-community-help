---
title: Drop column
layout: default
parent: Manage tables
grand_parent: Cloud
nav_order: 5
---

# How do I delete a column from a FeatureBase Cloud table?
{: .no_toc }

You may need to delete a column if:
* the data-type is incorrect for incoming data
* the column contains incorrect data

## Warnings

* Deleted column data cannot be recovered.

{% include page-toc.md %}

## Before you begin

{% include /cloud/cloud-before-begin.md %}
* [Learn how to create a database](/docs/cloud/cloud-databases/cloud-db-manage)
* [Create a table](/docs/cloud/cloud-tables/cloud-table-create)
* [Create a table column](/docs/cloud/cloud-tables/cloud-table-add-column)
* Click **Databases** > database name > **Tables** to view tables.

## Drop the selected column

* Click the table name.
* Click **Columns**.
* Click <span class="material-icons md-18">more_vert</span> on the column > **Delete**.
* Enter "DELETE" in the confirmation dialog.
* Click **Delete**.

## Further information

* [Delete table column API reference](https://api-docs-featurebase-cloud.redoc.ly/latest#operation/deletetableColumn)
