---
title: SQL source reference
layout: default
parent: Import data
grand_parent: Community
nav_order: 4
---

# SQL ingest source reference
{: .no_toc}

FeatureBase can import data from MySQL, Postgres and MySQL databases using SQL queries executed at the command line.

{% include page-toc.md %}

## Before you begin

You will need the following privileges on the database:
* Database login credentials
* SELECT privileges on source tables
* Other privileges as required
* [Learn how to manage import](/docs/community/com-ingest/com-ingest-manage)

### Connect string

The SQL ingest tool connects to the source database using your login credentials before executing SQL queries.

{% include /com-ingest/com-ingest-flag-sql-connect-string.md%}

## Command-line SQL statements

Once connected to the source database, SQL queries copy data which is then batched, converted to Roaring Bitmap format then saved to a target FeatureBase index.

* [Learn about FeatureBase SQL](/docs/sql-guide/sql-guide-home)

## Mapping data types

{% include /sql-guide/datatype-mapping.md %}

## Examples

{% include /com-ingest/com-ingest-sql-assets-table.md %}

{% include /com-ingest/com-ingest-sql-events-table.md %}

## Next step

Refer to [SQL ingest reference](/docs/community/com-ingest/com-ingest-flags-sql) to learn how to use the command-line SQL ingest tool
