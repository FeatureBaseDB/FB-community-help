---
title: FORMAT()
layout: default
parent: Functions
grand_parent: SQL guide
---

# FORMAT () String function

The `Format()` function formats a list of values according to a supplied format string.

## Syntax

```
format({specifier}, value,...)
```

## Arguments

| Argument | Data type |Description |
|---|---|---|
| specifier | String | Specify format for supplied values | [Format specifiers](#format-specifiers) |
| `value` | Any supported | Values or  | [Supported data types](/docs/sql-guide/data-types/data-types-home) |

## Format Specifiers

| Specifier | Data type |
|---|---|
| `%s` | String |
| `%d` | Integer |
| `%f` | Floating-point |
| `%b` | Boolean |
| `%x` | Hexadecimal |
| `%o` | Octal |
| `%v` | Value in a default format |

## Returns

| Data type | Value |
|---|---|
| String | One or more supplied values formatted to the supplied specifier |

## Examples

### Format with multiple arguments.

Table definition and inserting values
```sql
CREATE TABLE segments
    (_id id, segment string, value int);
INSERT INTO segments(_id, segment, value)
    VALUES (1,'white', 16777215);
```
SELECT statement with FORMAT()
```sql
SELECT _id, format("%s -> #%x", segment, value) AS segment FROM segments;
+-----+-----------------+
| _id | segment         |
+-----+-----------------+
|   1 | white -> #ffffff|
+-----+-----------------+
```

### Format with default values and sets

Create table and insert data.

```sql
CREATE TABLE segments
    (_id id, time timestamp timeunit 'ms', ids idset, strings stringset);
INSERT INTO segments(_id, time, ids, strings)
    VALUES (1, '2023-01-01', [6 , 1, 9], ['red', 'blue', 'green']);
```

SELECT statement formatting column data

```sql
SELECT format('id = %d , time = %v , ids = %d, strings = %s', _id, time, ids, strings) as description from segments;
```

Result:

```csv
| description |
| id = 1 , time = 2023-01-01 00:00:00 +0000 UTC , ids = [1 6 9], strings = [blue green red] |
```
