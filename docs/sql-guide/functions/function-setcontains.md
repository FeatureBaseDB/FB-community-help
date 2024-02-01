---
title: SETCONTAINS()
layout: default
parent: Functions
grand_parent: SQL guide
---

# SETCONTAINS() function

`SETCONTAINS()` returns **True** when a specified value **is found** within an `IDSET` or `STRINGSET` column..

## Syntax

```sql
SETCONTAINS(
  {idset-column, integer-value} |
  {stringset-column, 'string-value'}
  )
```

## Arguments

{% include /sql-guide/function-set-contains-excludes-args.md %}

## Returns

| Column contains | Data type | Result |
|---|---|---|
| Specified value | Boolean | True |

## Examples

### Testing set membership in the select list

{% include /sql-guide/create-table-segments.md %}

This query returns `true`.

```sql
select setcontains(segment, 'BLUE') as HasBlue  
    from segments;  
```

### Testing set membership as a where clause filter

This query returns `true`.

```sql
select _id, segment from segments where setcontains(segment, 'BLUE');
```
