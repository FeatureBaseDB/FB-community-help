---
title: BULK INSERT Parquet example
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# BULK INSERT example using Apache Parquet formatted data source

This BULK INSERT statement:
* reads data from an Apache Parquet formatted data source found in a destination URL
* maps data to destination table columns found in `parquet-target` table
* inserts the data

## Before you begin
* [BULK INSERT examples](/docs/sql-guide/examples/sql-eg-home/#bulk-insert-examples)
* [Learn about Apache PARQUET format](https://parquet.apache.org/){:target="_blank"}
* [BULK INSERT statement](/docs/sql-guide/statements/statement-insert-bulk)
* [CREATE TABLE parquet-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-parquet-target)

{% include /tips/tip-show-table-for-structure.md %}

## BULK INSERT statement

```sql
BULK INSERT
  INTO parquet-target(
    _id,
    integercol,
    decimalcol
  )
  MAP(
    'id' id,
    'intval' int,
    'decval' decimal(4)
  )
  FROM
    'https://s3.amazonaws.com/todd-scratch.molecula.com/sample.parquet'
  WITH
    FORMAT 'PARQUET'
    INPUT 'URL';
```

## Arguments

| Argument | Description | Additional information |
|---|---|---|
| `BULK INSERT INTO` | Insert data to the `parquet-target` table `<column-list>` which is required by the `MAP` clause |  |
| `MAP` clause | A string label that precisely matches the column name in the schema within the PARQUET data source |  |
| `FROM` clause | The URL of the PARQUET data source |
| `WITH` clause | States the data source `TARGET` and URL `INPUT` |

## Next step

* [SELECT FROM parquet-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-parquet-target)
