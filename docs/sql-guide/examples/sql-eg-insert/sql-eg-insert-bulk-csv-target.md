---
title: BULK INSERT CSV example
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# BULK INSERT example using CSV formatted data source

`BULK INSERT` data to the `csv-target` table from a CSV data source found on a specified URL.

{: .warning}
The CSV file is 147MB and may take some time to download.

## Before you begin
* [BULK INSERT examples](/docs/sql-guide/examples/sql-eg-home/#bulk-insert-examples)
* [Learn about the Comma separated value (CSV) format](https://www.rfc-editor.org/rfc/rfc4180){:target="_blank"}
* [BULK INSERT statement](/docs/sql-guide/statements/statement-insert-bulk)
* [CREATE TABLE csv-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-csv-target)

## BULK INSERT statement

```sql
BULK INSERT
INTO csv-target (_id, name, description, gender, country, occupation,
    birth_year, death_year, death_manner, birth_age )
MAP(0 STRING,
1 STRING,
2 STRING,
3 STRING,
4 STRING,
5 STRING,
6 INT,
7 INT,
8 STRING,
9 INT )
FROM
    'https://featurebase-public-data.s3.us-east-2.amazonaws.com/age.csv'
WITH
    BATCHSIZE 100000
    FORMAT 'CSV'
    INPUT 'URL'
    HEADER_ROW;
```

## Arguments

| Argument | Description |
|---|---|
| `BULK INSERT INTO` | Insert data to the `csv-target` table `<column-list>` which is required by the `MAP` clause |
| `MAP` expression | An integer offset map expression for values in the data source to the <column-list> |
| `FROM` clause | The URL of the CSV data source |
| `WITH` clause | States the number of rows to batch, data source `FORMAT` and the method of `INPUT` and that the data source has a `HEADER_ROW` |

## Next step

* [SELECT FROM csv-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-csv-target)
