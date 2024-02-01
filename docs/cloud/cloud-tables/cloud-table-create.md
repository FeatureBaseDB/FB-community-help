---
title: Create tables
layout: default
parent: Manage tables
grand_parent: Cloud
nav_order: 1
---

# How do I create a table in FeatureBase Cloud?
{: .no_toc }

{% include /concepts/summary-table-create.md %}

{% include page-toc.md %}

## Before you begin

{% include /cloud/cloud-before-begin.md %}
* [Learn how to create a database](/docs/cloud/cloud-databases/cloud-db-create-custom)
* [Learn how to manage tables](/docs/cloud/cloud-tables/cloud-table-manage)
* Click **Databases** > database name > **Tables** to view tables.

## Naming standards

{% include /concepts/standard-naming-obj.md%}
{% include /cloud-table/cloud-standard-naming-table.md %}

## Step 1: create table

* Click **Create table**.
* Select the destination database.
* Enter a table name and an optional description.

## Step 2: choose the primary key

{% include /cloud-table/cloud-summary-table-pk.md %}

* Select the ID type.
* Click **Create**.

## Next step

* [Learn how to add columns to a table](/docs/cloud/cloud-tables/cloud-table-add-column)

## Further information

* [Create table API reference](https://api-docs-featurebase-cloud.redoc.ly/latest#operation/createTable)
* [`CREATE TABLE` statement](/docs/sql-guide/statements/statement-table-create)
