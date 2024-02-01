---
title: UPPER()
layout: default
parent: Functions
grand_parent: SQL guide
---

# UPPER() function

`UPPER()` function converts the specified string to upper-case in the column.

## Syntax

```
upper(expr)
```

## Arguments

| Argument | Description |
|---|---|
| `expr` | Any `string` expression. |

## Returns

| Data type | Value |
|---|---|
| `string` | `expr` converted to upper-case. |


## Examples

### Convert strings in a column to upper-case

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'green')

select _id, upper(segment) as convertedstr from segments;
+-----+---------------+
| _id | convertedstr  |
+-----+---------------+
|   1 | GREEN         |
+-----+---------------+
```
