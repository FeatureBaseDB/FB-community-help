---
title: ASCII()
layout: default
parent: Functions
grand_parent: SQL guide
---

# ASCII() function

`Ascii()` returns the ASCII value of the specified string, using the UTF-8 ASCII table.

## Syntax

```
ascii(expr)
```

## Arguments

| Argument | Description | Length |
|---|---|---|---|
| `expr` | Any `string` expression. | 1 |

## Returns

| Data type | Value |
|---|---|
| `int` | ASCII code value of `expr`. |

## Additional information

* ASCII() is limited to character values between 0 and 127

## Examples

### ASCII function on a column

```sql
create table segments
    (_id id, segment string);

insert into segments(_id, segment)
    values (1,'r')

select _id, ascii(segment) as segment from segments;
+-----+----------+
| _id | segment  |
+-----+----------+
|   1 | 114      |
+-----+----------+
```
