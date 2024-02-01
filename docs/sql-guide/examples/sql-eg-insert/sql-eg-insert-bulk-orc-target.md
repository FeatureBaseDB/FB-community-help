---
title: BULK INSERT ORC example
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# BULK INSERT example using ORC formatted data source

This BULK INSERT statement:
* reads data from an ORC formatted data source found in a destination URL
* maps data to destination table columns found in `orc-target` table

## Before you begin
* [BULK INSERT examples](/docs/sql-guide/examples/sql-eg-home/#bulk-insert-examples)
* [Learn about the Apache ORC format](https://orc.apache.org/specification/){:target="_blank"}
* [ORC data types](https://orc.apache.org/docs/types.html){:target="_blank"}
* [BULK INSERT statement](/docs/sql-guide/statements/statement-insert-bulk)
* [CREATE TABLE sampleorc](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-orc-target)

{% include /tips/tip-show-table-for-structure.md %}

## BULK INSERT statement

```sql
BULK INSERT
  INTO orc-target(
    _id,
    stringcol,
    boolcol,
    intcol
  )
  MAP(
    0 id,
    1 STRING,
    2 BOOL,
    3 INT
  )
  FROM
    'https://sample-files-hh.s3.us-east-2.amazonaws.com/samplefile.orc'
  WITH
    FORMAT 'ORC'
    INPUT 'URL';
```

## Arguments

| Argument | Description | Additional information |
|---|---|---|
| `BULK INSERT INTO` | Insert data to the `orc-target` table `<column-list>` which is required by the `MAP` clause |  |
| `MAP` clause | A string label that precisely matches the column name in the schema within the ORC data source |  |
| `FROM` clause | The URL for the ORC data source |  |
| `WITH` clause | States the data source `FORMAT` and URL `INPUT` |

## Next step

* [SELECT FROM orc-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-orc-target)
