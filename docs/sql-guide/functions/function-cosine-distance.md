---
title: COSINE_DISTANCE()
layout: default
parent: Functions
grand_parent: SQL guide
---
# COSINE_DISTANCE() function

`COSINE_DISTANCE()` is a mathematical function that can be performed on `VECTOR` data type columns.

## Syntax

```sql
COSINE_DISTANCE (<compare-vector>, <vector-column>)
```

## Arguments

| Argument | Description | Additional information |
|---|---|---|
| `<compare-vector>` | A comma separated list of floating point numbers to be compared which can be derived using a nested `SELECT` statement | [SELECT statement](/docs/sql-guide/statements/statement-select) |
| `<vector-column>` | `VECTOR()` data type column in target table to apply the function and compare-vector. | [VECTOR() data type](/docs/sql-guide/data-types/data-type-vector) |

## Examples

* [SELECT using COSINE DISTANCE function](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-cosvec-target)
