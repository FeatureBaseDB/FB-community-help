---
title: TANIMOTO_COEFFICIENT()
layout: default
parent: Functions
grand_parent: SQL guide
---
# TANIMOTO_COEFFICIENT() scalar function

The TANIMOTO_COEFFICIENT scalar function quantifies the degree of similarity between two sets of data in a specified table or view as a part of a SELECT statement.

<!-- QUERY - can JACCARD be substituted for TANIMOTO?-->

## Syntax

```sql
tanimoto_coefficient(<column-name>, [<select-statement>] | {[<item-list>]})
```

## Arguments

| Argument | Description | Required | Additional information |
|---|---|---|---|
| `tanimoto_coefficient` | A function used to assess the similarity between data in a specified column and a nested SELECT statement or item list. |  |  |
| `<column-name>` | Table column name contained in the outer SELECT statement. | Optional |  |
| `<select-statement>` | Nested SELECT statement used to gather values to compare against the <column name> | Optional |  |
| `[<item-list>]` | comma separated list of items found in the table named in the surrounding SELECT statement. | Yes | Square brackets are required |

## Additional information

### SELECT statement

The function is used in a SELECT statement and requires:
* [Select List](/docs/sql-guide/statements/statement-select#select_list-information)
* [From clause](/docs/sql-guide/statements/statement-select/#from_clause-information)
* [Order by clause](/docs/sql-guide/statements/statement-select/#ordering-results)

## Returns

| Returns | Description |
|---|---|
| `0` | No common elements found in results |
| `1` | Identical sets found in results

## Examples

* [SELECT using TANIMOTO_COEFFICIENT function](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-tan-target)
