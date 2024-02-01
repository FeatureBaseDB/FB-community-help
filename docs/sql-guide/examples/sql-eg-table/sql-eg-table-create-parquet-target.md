---
title: CREATE TABLE parquet-sample
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# CREATE TABLE parquet-sample

The table `parquet-target` is intended for a `BULK INSERT` statement and contains:
* A numeric unique identifier
* ID, INT and DECIMAL data types
* a four-point DECIMAL constraint

## Before you begin
* [CREATE TABLE examples](/docs/sql-guide/examples/sql-eg-home/#create-table-examples)
* [CREATE TABLE statement](/docs/sql-guide/statements/statement-table-create)
* [ID data type](/docs/sql-guide/data-types/data-type-id)
* [INT data type](/docs/sql-guide/data-types/data-type-int)
* [DECIMAL data type](/docs/sql-guide/data-types/data-type-decimal)

## CREATE TABLE statement

```sql
CREATE TABLE parquet-target (
    _id ID,
    integercol INT,
    decimalcol DECIMAL(4)
);
```

## Next step

* [BULK INSERT INTO parquet-target from URL](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-parquet-target)
