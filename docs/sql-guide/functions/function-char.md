---
title: CHAR()
layout: default
parent: Functions
grand_parent: SQL guide
---

# CHAR() function

`CHAR()` returns an ASCII character based on an integer value between 0 and 255.

## Syntax

```
char(int_expr)
```

## Arguments

| Argument | Description | Length |
|---|---|---|---|
| `int_expr` | Integer value between 0 and 255 representing the decimal value of an ASCII character. |

## Returns

| Data type | Value |
|---|---|
| `string` | ASCII character that equates to `int_expr` |

## Examples

### CHAR() function on a column.

```sql
create table segments
    (_id id, segment string, ascii_number int);

insert into segments(_id, segment, ascii_number)
    values (1,'red', 114)

select _id, segment, char(ascii_number) as num from segments;
+-----+----------+------+
| _id | segment  | num  |
+-----+----------+------+
|   1 | red      | r    |
+-----+----------+------+
```
