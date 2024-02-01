---
title: SELECT FROM csv-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---
# SELECT FROM csv-target

The following SELECT statements demonstrate

## Before you begin
* [SELECT examples](/docs/sql-guide/examples/sql-eg-home/#select-examples)
* [SELECT statement](/docs/sql-guide/statements/statement-select)
* [CREATE TABLE csv-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-csv-target)
* [BULK INSERT from csv data source](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-csv-target)

## SELECT COUNT queries

```sql
SELECT COUNT(*) FROM csv-target;

count (*) |
----------+
  1222997 |
```

```sql
SELECT count(*) AS Male FROM csv-target WHERE gender = 'Male';

   Male |
--------+
9813567 |
```

```sql
SELECT count(*) AS Danish-Female FROM csv-target WHERE gender = 'Female' AND country = 'Denmark';

Danish-Female |
--------------+
       1592   |
```

```sql
SELECT count(DISTINCT occupation) AS occupation FROM csv-target;

occupation |
-----------+
   9314    |
```

## Further information

* [SQL Guide examples](/docs/sql-guide/examples/sql-eg-home)
