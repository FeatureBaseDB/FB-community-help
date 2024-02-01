---
title: CREATE TABLE tan-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# CREATE TABLE tan-target

The table `tan-target` is required for an `INSERT` statement, and contains:
* an ID unique identifier
* a STRINGSET data type column

## Before you begin
* [CREATE TABLE examples](/docs/sql-guide/examples/sql-eg-home/#create-table-examples)
* [CREATE TABLE statement](/docs/sql-guide/statements/statement-table-create)
* [ID data type](/docs/sql-guide/data-types/data-type-id)
* [STRINGSET data type](/docs/sql-guide/data-types/data-type-stringset)

## CREATE TABLE statement

```sql
CREATE TABLE tan-target (
  _id id,
  stuff stringset);
```

## Next step

* [INSERT INTO tan-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-tan-target)
