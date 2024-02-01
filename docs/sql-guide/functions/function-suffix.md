---
title: SUFFIX()
layout: default
parent: Functions
grand_parent: SQL guide
---

# SUFFIX() function

`SUFFIX()` function returns a substring of a given length, starting from the end of the provided string.

## Syntax

```
suffix(expr, length)
```

## Arguments

| Argument | Data type | Description | Required | Additional information |
|---|---|---|---|---|
| `expr` | string | String value or any expression that resolves to a string | Yes| |
| `length` | int | Length of the suffix to extract | Yes | |

## Returns

| Data type | Value |
|---|---|
| `string` | A suffix substring extracted from `expr` of length `length` |


## Examples

### Convert strings in a column to a suffix

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'FOOBAR')

select _id, suffix(segment, 3) as convertedstr from segments;
+-----+---------------+
| _id | convertedstr  |
+-----+---------------+
|   1 | BAR           |
+-----+---------------+
```