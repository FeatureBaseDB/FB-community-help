---
title: SHOW CREATE TABLE
layout: default
parent: Statements
grand_parent: SQL guide
nav_order: 6
---

# SHOW CREATE TABLE statement

Output the data definition language (DDL) CREATE TABLE statement for a specified FeatureBase table.

## BNF diagram

![expr](/assets/images/sql-guide/show_create_table.svg)

## Syntax

```sql
SHOW CREATE TABLE table_name;
```

## Arguments

| Argument | Data type | Description |
|---|---|---|
| `table_name` | String | Name of existing FeatureBase table |

## Returns

| Column name | Data type | Description |
|---|---|---|
| `ddl` | String | DDL for CREATE TABLE statement |

## Examples

### Show DDL for sample data `skills` table

The `skills` table is created automatically when a user chooses to create a Database with pre-loaded sample data.

```
SHOW CREATE TABLE skills;
```
Returns:
```
ddl
"create table skills (_id string, bools stringset, bools-exists stringset, id int, skills stringset, titles stringset, doctest int);"
```
