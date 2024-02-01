---
title: LOWER()
layout: default
parent: Functions
grand_parent: SQL guide
---

# LOWER() function

`LOWER()` function converts the specified string to lower-case in the column.

## Syntax

```
lower(expr)
```

## Arguments

| Argument | Data type | Description | Required | Additional information |
|---|---|---|---|---|
| `expr` | string | String value or any expression that resolves to a string | Yes| |

## Returns

| Data type | Value |
|---|---|
| `string` | `expr` converted to lower-case. |


## Examples

### Convert strings in a column to lower-case

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'GREEN')

select _id, lower(segment) as convertedstr from segments;
+-----+---------------+
| _id | convertedstr  |
+-----+---------------+
|   1 | green         |
+-----+---------------+
```
