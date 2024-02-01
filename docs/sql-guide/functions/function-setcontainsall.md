---
title: SETCONTAINSALL()
layout: default
parent: Functions
grand_parent: SQL guide
---

# SETCONTAINSALL() function

`SETCONTAINSALL()` returns **True** when **all specified values** are found within an `IDSET` or `STRINGSET` column.

## Syntax

```sql
SETCONTAINSALL(
  {idset-column, [int-value,...]} |
  {stringset-column, ['string-value',...]}
  )
```

## Arguments

{% include /sql-guide/function-setcontains-all-any-args.md %}

## Returns

| Column contains | Data type | Result |
|---|---|--|
| All specified values | Boolean | True |

## Examples

{% include /sql-guide/create-table-segments.md %}

### Testing set membership in the select list

This query returns `true`.

```sql
select setcontainsall(segment, ['BLUE', 'RED']) as HasBlueOrRed  
    from segments;  
```

### Testing set membership as a where clause filter

This query returns `true`.

```sql
select _id, segment from segments where setcontainsall(segment, ['BLUE', 'RED']);
```
