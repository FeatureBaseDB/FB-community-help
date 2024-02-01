---
title: SUBSTRING()
layout: default
parent: Functions
grand_parent: SQL guide
---

# SUBSTRING() function

`Substring()` extracts a substring value from a specified string based on a designated start index and optional length.

## Syntax

```
substring(expr,startIndex,length)
```

## Arguments

| Argument | Description | Data type | Return value |
|---|---|---|---|
| `expr` | Input `string` used to extract a substring |
| `startIndex` | Required `int` value for the starting index of the substring in the evaluated expression. Starts from zero. |
| `length` | Optional `int` value that represents the length of the substring to extract. Defaults to end of evaluated `expr`. |

## Returns

| Data type | Value |
|---|---|
| `string` | Returns a substring based on the `startIndex` value and optional `length`. |

## Examples

### Substring of the string in a column

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'green')

select _id, substring(segment,0,3) as substr from segments;
+-----+----------+
| _id | substr   |
+-----+----------+
|   1 | gre      |
+-----+----------+
```

### Substring of a reversed string

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'red')

select _id, substring(reverse(segment), 1) as substr from segments;
+-----+----------+
| _id | substr   |
+-----+----------+
|   1 | er       |
+-----+----------+
```
