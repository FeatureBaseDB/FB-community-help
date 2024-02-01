---
title: INSERT INTO cosvec-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# INSERT data to VECTOR column

INSERT data to string and vector columns in the `cosvec-target` table

## Before you begin
* [INSERT examples](/docs/sql-guide/examples/sql-eg-home/#insert-examples)
* [INSERT statement](/docs/sql-guide/statements/statement-insert)
* [CREATE TABLE cosvec-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-cosvec-target)

## INSERT statement

```sql
INSERT INTO cosvec-target(
  _id,
  description,
  cosvec-col
)
  VALUES (
    0,
    'Three vector values',
    [0.9059894547233159, 0.6554107219473952, 0.11411471973104703]
  );
```

## Arguments

| Argument | Description |
|---|---|
| `INSERT INTO` | Insert data to the `cosvec-target` table `<column-list>` |
| `[values]` | Insert three decimal values to `cosvec-col` |

## Next step

* [SELECT FROM cosvec-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-cosvec-target)
