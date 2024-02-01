---
title: SETEXLCUDES()
layout: default
parent: Functions
grand_parent: SQL guide
---

# SETEXCLUDES() function

`SETEXCLUDES()` returns **True** when a specified value **is not found** within an `IDSET` or `STRINGSET` column.

## Syntax

```sql
SETEXCLUDES(
  {idset-column, integer-value} |
  {stringset-column, 'string-value'}
  )
```

## Arguments

{% include /sql-guide/function-set-contains-excludes-args.md %}

## Additional information

Use a `WHERE` clause with `AND` operator to add two or more `SETINCLUDES()` functions.

## Returns

| Column contains | Data type | Result |
|---|---|--|
| No specified value | Boolean | True |

## Examples

{% include /sql-guide/create-table-segments.md %}

### Testing set membership in the select list

This query returns `true`.

```sql
select setexcludes(segment, 'purple') as NOTPURPLE
    from segments;  
```

### Testing set membership as a where clause filter

This query returns `true` with the selected `_id`.

```sql
select _id from segments where setexcludes(segment, 'purple');
```

### Testing set membership as a where clause filter with multiple set members

This query returns `true` with the selected `_id`.

```sql
select _id from segments where setexcludes(segment, 'purple') and setexcludes(segment, 'yellow');
```
