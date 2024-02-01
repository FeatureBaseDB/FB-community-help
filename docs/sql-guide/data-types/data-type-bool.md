---
title: BOOL
layout: default
parent: Data types & constraints
grand_parent: SQL guide
nav_order: 1
---

# BOOL data type

## Syntax

```
BOOL [TRUE | FALSE]
```

## Arguments

| Argument | Description |
|---|---|
| BOOL | The BOOL type stores simple Boolean (true/false) values and is used for simple query filtering. |

## Additional information

Use this table to determine how integer and string values are represented when added to a Boolean column.

| data | value | bool |
|---|---|---|
| integer | 0 | 0 |
| integer > 0 | 1 | 1 |
| string | empty, `0`, `f`, `false` | 0 |
| string | other string values | 1 |

## Examples

### CREATE TABLE with boolean data type

```sql
CREATE TABLE docbool  (
    _id id,
    boolcol bool);
```

### INSERT INTO boolean data type

```sql
INSERT INTO docbool
  (_id, boolcol)
  VALUES
  (1, FALSE),
  (2, TRUE);
```
