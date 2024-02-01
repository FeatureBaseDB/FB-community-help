---
title: RTRIM()
layout: default
parent: Functions
grand_parent: SQL guide
---

# RTRIM () function

`RTRIM()` function removes the trailing whitespace from a specified string in the selected column.

## Syntax

```
rtrim(expr)
```

## Arguments

| Argument | Description |
|---|---|
| `expr` | Any `string` expression. |

## Returns

| Data type | Value |
|---|---|
| `string` | `expr` with trailing whitespace removed. |

## Examples

### Trim column strings

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'    green    ')

select _id, rtrim(segment) as TrimmedStr from segments;
+-----+------------+
| _id | TrimmedStr |
+-----+------------+
|   1 |     green  |
+-----+------------+
```
