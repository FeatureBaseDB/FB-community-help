---
title: TRIM()
layout: default
parent: Functions
grand_parent: SQL guide
---

# TRIM() function

`TRIM()` function removes the leading and trailing whitespace from a specified string in the selected column.

## Syntax

```
trim(expr)
```

## Arguments

| Argument | Description |
|---|---|---|---|
| `expr` | Any `string` expression. |

## Returns

| Data type | Value |
|---|---|
| `string` | `expr` with leading and trailing whitespace removed. |

## Examples

### Trim strings from a column

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'   green   ')

select _id, trim(segment) as TrimmedStr from segments;

+-----+------------+
| _id | TrimmedStr |
+-----+------------+
|   1 | green      |
+-----+------------+
```
