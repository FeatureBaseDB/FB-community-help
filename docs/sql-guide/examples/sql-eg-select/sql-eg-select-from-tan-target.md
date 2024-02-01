---
title: SELECT FROM tan-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---
# SELECT FROM tan-target

## Before you begin
* [SELECT examples](/docs/sql-guide/examples/sql-eg-home/#select-examples)
* [SELECT statement](/docs/sql-guide/statements/statement-select)
* [TANIMOTO_COEFFICIENT function](/docs/sql-guide/functions/function-tanimoto)
* [CREATE TABLE tan-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-cosvec-target)
* [INSERT INTO tan-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-cosvec-target)

## SELECT using TANIMOTO_COEFFICIENT() function

```sql
SELECT *, tanimoto_coefficient (stuff, ['milk', 'chocolate', 'cookies', 'cup'])
  AS
    distance
  FROM
    tan-target
  ORDER BY distance;

 _id |     stuff      | distance
-----+----------------+----------
  2  | "cup,plate"    | 0.2
  1  | "cookies,milk" | 0.5
```

## Further information

* [SQL Guide examples](/docs/sql-guide/examples/sql-eg-home)
