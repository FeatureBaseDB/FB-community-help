---
title: SELECT FROM orc-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---
# SELECT FROM orc-target

The following SELECT statements demonstrate

## Before you begin
* [SELECT examples](/docs/sql-guide/examples/sql-eg-home/#select-examples)
* [SELECT statement](/docs/sql-guide/statements/statement-select)
* [CREATE TABLE orc-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-orc-target)
* [BULK INSERT from orc data source](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-orc-target)

## SELECT *

```sql
SELECT * FROM orc-target

_id | stringcol | boolcol | intcol
----+-----------+---------+-------
 1  |   str1    |   true  |   2
 2  |   str2    |  false  |   3
 3  |   str3    |   true  |   4
```

## Further information

* [SQL Guide examples](/docs/sql-guide/examples/sql-eg-home)
