---
title: STR()
layout: default
parent: Functions
grand_parent: SQL guide
---

# STR() function

The `STR()` string funtion returns the given numerical value as a String, with the option to specify precision rounding and return string length.

## Syntax

```
STR(value, string_length, precision)
```

## Arguments


| Argument | Description | Data type |
|---|---|---|
| `value` | Required numerical value to format as a `string`. | `int` or `decimal(3)` |
| `string_length` | Optional `int` value for the length of the output string. Defaults to 10. | `int` |
| `precision` | Optional `int` value for the precision to round `value` to. Defaults to 0. | `int` |


## Returns

| Data type | Value |
|---|---|
| `string` | Returns a string representation of `value` rounded to the `precision` and left-padded with spaces to the `string_length`. |

## Remarks
If the `string_length` is less than the characters needed to display the `value` after rounding to the `precision`, the function will return a string of asterisks with a length of `string_length`.

## Examples

### Str of a decimal in a column

```sql
create table segments
    (_id id, segment decimal(3));

insert into segments(_id, segment)
    values (1, 7.543)

select _id, str(segment) as text from segments;
+-----+------------+
| _id | text       |
+-----+------------+
|   1 |          8 |
+-----+------------+
```

### Str of a decimal with precision on a column.

```sql
create table segments
    (_id id, segment decimal(3));

insert into segments(_id, segment)
    values (1, 7.543)

select _id, str(segment, 10, 2) as text from segments;
+-----+------------+
| _id | text       |
+-----+------------+
|   1 |       7.54 |
+-----+------------+
```

### Str with a number longer than length
Example showing the output when given a `value` and `precision` that cannot be displayed within the given `string_length`.

```sql
create table segments
    (_id id, segment decimal(3));

insert into segments(_id, segment)
    values (1, 987654.321)

select _id, str(segment, 7, 2) as text from segments;
+-----+---------+
| _id | text    |
+-----+---------+
|   1 | ******* |
+-----+---------+
```

