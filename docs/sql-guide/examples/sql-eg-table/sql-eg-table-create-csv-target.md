---
title: CREATE TABLE csv-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# CREATE TABLE csv-target

The table `csv-target` contains:
* a STRING unique identifier
* STRING and INT data type columns

## Before you begin
* [CREATE TABLE examples](/docs/sql-guide/examples/sql-eg-home/#create-table-examples)
* [CREATE TABLE statement](/docs/sql-guide/statements/statement-table-create)
* [STRING data type](/docs/sql-guide/data-types/data-type-string)
* [INT data type](/docs/sql-guide/data-types/data-type-int)

## CREATE TABLE statement

```sql
CREATE TABLE csv-target (
  _id string,
  name string,
  description string,
  gender string,
  country string,
  occupation string,
  birth_year int,
  death_year int,
  death_manner string,
  birth_age int
);
```

## Next step

* [BULK INSERT INTO csv-target from URL](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-csv-target)
