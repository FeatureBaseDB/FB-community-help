---
title: CREATE TABLE cosvec-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# CREATE TABLE cosvec-target

The table `cosvec-target` is required for an `INSERT` statement, and contains:
* an ID unique identifier
* STRING and VECTOR data type columns

## Before you begin
* [CREATE TABLE examples](/docs/sql-guide/examples/sql-eg-home/#create-table-examples)
* [CREATE TABLE statement](/docs/sql-guide/statements/statement-table-create)
* [ID data type](/docs/sql-guide/data-types/data-type-id)
* [STRING data type](/docs/sql-guide/data-types/data-type-string)
* [VECTOR data type](/docs/sql-guide/data-types/data-type-vector)

## CREATE TABLE statement

```sql
CREATE TABLE cosvec-target (
  _id id,
  description string,
  cosvec-col vector(3)
);
```

## Next step

* [INSERT INTO cosvec-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-cosvec-target)
