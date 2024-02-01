---
title: FLATTEN()
layout: default
parent: SQL hints
grand_parent: SQL guide
---

# FLATTEN() hint

{: .note}
`FLATTEN()` is supported on [FeatureBase Cloud](/docs/cloud/cloud-home)

The FLATTEN() hint is used to return distinct or group on individual members of IDSET and STRINGSET columns. It can be used for:
* SELECT...WITH...GROUP BY queries
* SELECT DISTINCT... queries
* queries with one input argument that matches the sole DISTINCT/GROUP BY column

## Before you begin

* [SQL SELECT statement](/docs/sql-guide/statements/statement-select)
* [SET and SETQ data types](/docs/sql-guide/data-types/data-types-home/#low-cardinality-data-types)

## Syntax

```sql
[DISTINCT
  (FLATTEN(<colname>))]
[WITH
  (FLATTEN(<colname>))
GROUP BY
  (<colname>)]
```

## Arguments

| Argument | Data type | Required? |
|---|---|---|
| `<colname>` | [SET or SETQ](/docs/sql-guide/data-types/data-types-home/#low-cardinality-data-types) | Yes |

## Returns

Individual values are returned from the specified column based on the source data type

| Source column type | Returned data type |
|---|---|
| IDSET/IDSETQ | ID (unsigned integer) |
| STRINGSET/STRINGSETQ | String |

## Examples

{% include /sql-guide/table-create-segments-eg.md %}

<!-- commented out because this query doesn't work, has an "query error: 1:17: expected expression, found 'DISTINCT'
"
### DISTINCT...flatten

```sql
SELECT DISTINCT(flatten(segment)) FROM segments;
```
-->

### GROUP BY with flatten()

{: .note}
This query can also be run as a [SELECT...GROUP BY statement](/docs/sql-guide/statements/statement-select#group-by-with-stringset)

Count individual values from the `segments` table

```sql
SELECT count(*) AS cnt, segment FROM segments
WITH (flatten(segment))
group by segment;

 cnt | segment
-----+-----------
   2 | ['RED']
   2 | ['BLUE']
   3 | ['GREEN']
```
