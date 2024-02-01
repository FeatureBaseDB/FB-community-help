---
title: SETCONTAINSANY()
layout: default
parent: Functions
grand_parent: SQL guide
---

# SETCONTAINSANY() function

`SETCONTAINSANY()` returns **True** when **one or more** specified values are found within an `IDSET` or `STRINGSET` column.

## Syntax

```sql

SETCONTAINSANY(
  {idset-column, [int-value,...]} |
  {stringset-column, ['string-value',...]}
  )
```

## Arguments

{% include /sql-guide/function-setcontains-all-any-args.md %}

## Returns

| Column contains | Data type | Result |
|---|---|--|
| One or more values | Boolean | True |

## Examples

{% include /sql-guide/create-table-segments.md %}

### Testing set membership in the select list

This query returns `TRUE`

```sql
SELECT SETCONTAINSANY
  (segment, ['BLUE', 'RED'])
  AS HasBlueOrRed
  FROM segments;
```

### Testing set membership as a where clause filter

This query returns `TRUE`.

```sql
SELECT _id, segment
  FROM segments
  WHERE SETCONTAINSANY
    (segment, ['BLUE', 'RED']);
```
