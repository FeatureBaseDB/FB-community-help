---
title: REVERSE()
layout: default
parent: Functions
grand_parent: SQL guide
---

# REVERSE() function

`REVERSE()` function reverses all instances of a specified string in the selected column.

## Syntax

```
reverse(expr)
```

## Arguments

| Argument | Description |
|---|---|
| expr | Any `string` expression. |

## Returns

| Data type | Value |
|---|---|
| `string` | Reversed `expr` string. |

## Examples

### Reverse strings in a column

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'green')

select _id, reverse(segment) as reversed from segments;
+-----+----------+
| _id | reversed |
+-----+----------+
|   1 | neerg    |
+-----+----------+
```

### Nested reverse function

A nested reverse function reverses the string, then reverses it back.

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'red')

select _id, reverse(reverse(segment)) as segment from segments;
+-----+----------+
| _id | reversed |
+-----+----------+
|   1 | red      |
+-----+----------+
```
