---
title: LTRIM()
layout: default
parent: Functions
grand_parent: SQL guide
---

# LTRIM() function

`LTRIM()` function removes leading whitespace from a specified string in the selected column.

## Syntax

```
ltrim(expr)
```

## Arguments

| Argument | Description |
|---|---|
| `expr` | Any `string` expression. |

## Returns

| Data type | Value |
|---|---|
| `string` | Input string with leading whitespace removed. |

## Examples

### Trim strings in a column

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'    green    ')

select _id, ltrim(segment) as TrimmedStr from segments;
+-----+------------+
| _id | TrimmedStr |
+-----+------------+
|   1 | green      |
+-----+------------+
```
