---
title: Manage tables
layout: default
parent: Cloud
has_children: true
nav_order: 7
has_toc: false
---

# How do I manage tables in FeatureBase Cloud?
{: .no_toc }

This page provides an overview of FeatureBase tables and links to guide you through creating, altering and dropping tables.

{% include /concepts/summary-table-create.md %}

{% include page-toc.md %}

## Before you begin

{% include /cloud/cloud-before-begin.md %}
* [Learn how to manage Cloud databases](/docs/cloud/cloud-databases/cloud-db-manage)

## Data modeling

{% include /concepts/summary-data-modeling.md %}

{: .important}
Perform data modeling **before** creating tables to avoid issues.

* [Learn about data modeling](/docs/concepts/overview-data-modeling)

## Table primary key

{% include /cloud-table/cloud-summary-table-pk.md %}

## Column data types and constraints

* [Learn about data types and constraints](/docs/sql-guide/data-types/data-types-home)

## Naming standard

{% include /concepts/standard-naming-obj.md%}
{% include /cloud-table/cloud-standard-naming-table.md %}
{% include /cloud-table/cloud-standard-naming-col.md%}

## View tables

* Click **Databases** > database name > **Tables**.

## Managing tables in FeatureBase Cloud

* [Create table](/docs/cloud/cloud-tables/cloud-table-create)
* [Add table columns](/docs/cloud/cloud-tables/cloud-table-add-column)
* [Delete table columns](/docs/cloud/cloud-tables/cloud-table-delete-column)
* [Delete table](/docs/cloud/cloud-tables/cloud-table-delete)

## Managing tables using the Cloud API

* [Table API reference](https://api-docs-featurebase-cloud.redoc.ly/latest#tag/Tables)

## Managing tables using SQL

* [Create table](/docs/sql-guide/statements/statement-table-create)
* [Alter table](/docs/sql-guide/statements/statement-table-alter)
* [Drop table](/docs/sql-guide/statements/statement-table-create)

## Joining tables

Tables that exist in the same database can be joined.

## Next step

* [Learn about setting up data ingestion](/docs/cloud/cloud-ingest/cloud-ingest-manage)
