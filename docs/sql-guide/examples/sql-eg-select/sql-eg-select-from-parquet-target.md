---
title: SELECT FROM parquet-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---
# SELECT FROM parquet-target

The following SELECT statements demonstrate

## Before you begin
* [SELECT examples](/docs/sql-guide/examples/sql-eg-home/#select-examples)
* [SELECT statement](/docs/sql-guide/statements/statement-select)
* [SQL Operators](/docs/sql-guide/operators/operators-home)
* [CREATE TABLE parquet-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-parquet-target)
* [BULK INSERT from parquet data source](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-parquet-target)

## SELECT with TOP clause

```sql
SELECT TOP(10) * FROM parquet-target;


 _id | integercol | decimalcol
-----+------------+-----------
 0  |       2     |   1.4142
 1  |      36     |   6.0000
 2  |      36     |   6.0000
 3  |      18     |   4.2426
 4  |      68     |   8.2462
 5  |      74     |   8.6023
 6  |       6     |   2.4494
 7  |      78     |   8.8317
 8  |      79     |   8.8881
 9  |      90     |   9.4868
```

## SELECT with WHERE clause and BETWEEN operator

```sql
SELECT integercol, decimalcol FROM parquet-target WHERE decimalcol BETWEEN 1 AND 5;

integercol | decimalcol
-----------+-----------
     2     |   1.4142
    18     |   4.2426
     6     |   2.4494
    25     |   5.0000
```

## Further information

* [SQL Guide examples](/docs/sql-guide/examples/sql-eg-home)
