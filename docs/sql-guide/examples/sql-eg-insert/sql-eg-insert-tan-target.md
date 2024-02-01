---
title: INSERT INTO tan-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# INSERT data to tan-target

INSERT data to STRINGSET columns in the `tan-target` table

## Before you begin
* [INSERT examples](/docs/sql-guide/examples/sql-eg-home/#insert-examples)
* [INSERT statement](/docs/sql-guide/statements/statement-insert)
* [CREATE TABLE tan-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-tan-target)

## INSERT statement

```sql
INSERT INTO tan-target (
  _id,
  stuff
)
  VALUES
    (identifier('tan-target'), ['cookies', 'milk']),
    (identifier('tan-target'), ['cup', 'plate']);
```

## Arguments

| Argument | Description | Additional information |
|---|---|---|
| `INSERT INTO` | Insert an array of string values to the `stuff` stringset column with automatically incremented row `_id` values  | [IDENTIFIER() function](/docs/sql-guide/functions/function-identifier)

## Next step

* [SELECT FROM tan-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-cosvec-target)
