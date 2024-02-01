---
title: CREATE TABLE orc-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# CREATE TABLE orc-target

The table `orc-target` is the destination for a `BULK INSERT` statement, and contains:
* a numeric unique identifier
* BOOL, ID, INT and STRING data types
* `IF NOT EXISTS` and `WITH COMMENT` table options

## Before you begin
* [CREATE TABLE examples](/docs/sql-guide/examples/sql-eg-home/#create-table-examples)
* [CREATE TABLE statement](/docs/sql-guide/statements/statement-table-create)
Learn about FeatureBase data types used in this statement:
* [BOOL data type](/docs/sql-guide/data-types/data-type-bool)
* [ID data type](/docs/sql-guide/data-types/data-type-id)
* [INT data type](/docs/sql-guide/data-types/data-type-int)
* [STRING data type](/docs/sql-guide/data-types/data-type-int)

## CREATE TABLE statement

```sql
CREATE TABLE
  IF NOT EXISTS
  orc-target (
    _id ID,
    stringcol STRING,
    boolcol BOOL,
    intcol INT
)
WITH COMMENT 'destination table for APACHE orc data source'
;
```

## Next step

* [BULK INSERT INTO orc-target from URL](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-orc-target)
