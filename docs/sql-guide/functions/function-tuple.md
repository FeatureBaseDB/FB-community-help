---
title: TUPLE()
layout: default
parent: Functions
grand_parent: SQL guide
---

# TUPLE() function

`TUPLE()` is a mathematical function that returns an ordered list of values corresponding to and derived from a supplied argument.

## Syntax

```sql
TUPLE (
  [ordinal_position,...] |
  [column_name,...]
  )
```
<!-- original syntax
TUPLE(expr1,expr2,...)
-->

## Arguments

| Argument | Description | Required | Additional information |
|---|---|---|---|
| `ordinal_position` | An ordinal position defined in the `MAP` clause of a `BULK INSERT` statement | When used in BULK INSERT `TRANSFORM` clause | [BULK INSERT statement](/docs/sql-guide/statements/statement-insert-bulk) |
| `column_name`| Table column name in existing table | When used in SELECT statement `select-list` | [SELECT statement](/docs/sql-guide/statements/statement-select) |

## Returns

| Data type | Value |
|---|---|---|
| tuple | tuple with an element per evaluated expression `(eval_expr1,eval_expr2,...)` |

{% include /sql-guide/setq-tuple-returns.md %}

## Examples

{% include /sql-guide/create-table-tuple-demo-eg.md %}

{% include /sql-guide/insert-bulk-transform-tuple-eg.md %}

{% include /sql-guide/select-with-tuple-eg.md %}
