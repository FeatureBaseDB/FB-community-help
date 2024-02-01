---
title: Add columns
layout: default
parent: Manage tables
grand_parent: Cloud
nav_order: 3
---

# How do I add a column to an existing table in FeatureBase Cloud?
{: .no_toc }

Add a column to an existing table and set constraints if required.

{% include page-toc.md %}

## Before you begin

{% include /cloud/cloud-before-begin.md %}
* [Create a database](/docs/cloud/cloud-databases/cloud-db-create-custom)
* [Create a table](/docs/cloud/cloud-tables/cloud-table-create)
* [Learn about FeatureBase data types and constraints](/docs/sql-guide/data-types/data-types-home)

## Naming standard

{% include /concepts/standard-naming-obj.md%}
{% include /cloud-table/cloud-standard-naming-col.md %}

{: .note }
Column names cannot be edited once created.

## Add a column to a table

{: .note}
Constraint defaults are set automatically if values are not set.

* Click **Databases** > database name > **Tables** > table name.
* Click **Columns** > **Add column**.
* Enter a name for the column
* Choose the data type and constraint values if required.
* Click **Add column**

## Further information

* [Learn how to delete a table column](/docs/cloud/cloud-tables/cloud-table-delete-column)
* [`ALTER TABLE` statement](/docs/sql-guide/statements/statement-table-alter)
* [Create table column API reference](https://api-docs-featurebase-cloud.redoc.ly/latest#operation/createTableColumn)
