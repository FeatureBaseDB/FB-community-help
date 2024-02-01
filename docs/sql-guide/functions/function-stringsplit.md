---
title: STRINGSPLIT()
layout: default
parent: Functions
grand_parent: SQL guide
---

# STRINGSPLIT() function

`Stringsplit()` function splits a string into multiple substrings based on a specified separator.

## Syntax

```
stringsplit(expr,seperator,position)
```

## Arguments

| Argument | Description |
|---|---|
| `expr` | Any `string` expression. |
| `separator` | Character string used to split the evaluated expression. |
| `position` | Optional integer substring to retrieve from the resulting array of substrings |

## Returns

| Data type | Value |
|---|---|
| `string` | Returns the substring from the array at the optional position. |

## Examples

### Split strings then return second substring

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'red,blue,green');

select _id, stringsplit(segment,',',1) as segment from segments;
+-----+----------+
| _id | segment  |
+-----+----------+
|   1 | blue     |
+-----+----------+
```

## Split strings using a column as separator

```sql
create table segments
    (_id id, segment string, separator);

insert into segments(_id, segment, separator)
    values (1,'red,blue', ',')

insert into segments(_id, segment, separator)
    values (2,'green:yellow', ':')

select _id, stringsplit(segment, separator, 0) as segment from segments;
+-----+----------+
| _id | segment  |
+-----+----------+
|   1 | red      |
|   2 | green    |
+-----+----------+
```
