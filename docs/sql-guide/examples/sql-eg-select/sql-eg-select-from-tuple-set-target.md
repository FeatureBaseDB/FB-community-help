---
title: SELECT FROM tuple-set-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---
# SELECT FROM tuple-set-target


## Before you begin
* [SELECT examples](/docs/sql-guide/examples/sql-eg-home/#select-examples)
* [SELECT statement](/docs/sql-guide/statements/statement-select)
* [DATETIMENAME() function](/docs/sql-guide/functions/function-datetimename)
* [CREATE TABLE tuple-set-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-tuple-set-target)
* [BULK INSERT from csv data source](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-tuple-set-target)

## SELECT using datetimename function

```sql
SELECT _id, datetimename('w',time_col) AS day-of-week FROM tuple-set-target;

_id | day-of-week
----+------------
  A | Monday
  B | Tuesday
```

## Further information

* [SQL Guide examples](/docs/sql-guide/examples/sql-eg-home)
