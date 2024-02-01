---
title: STRINGSET
layout: default
parent: Data types & constraints
grand_parent: SQL guide
nav_order: 8
---

# STRINGSET data type

STRINGSET is a FeatureBase datatype used to set multiple STRING values for a single column.

## Syntax

```
STRINGSET
```

## Arguments

| Argument | Description |
|---|---|
| STRINGSET | Data type used to set multiple STRING values for a single column. |

## Additional information

The STRINGSET data type:
* has a `keyed set` internal datatype
* is used when:
  * grouping by
  * searching for discrete values

## Examples

### CREATE TABLE with all data types

{% include /sql-guide/table-create-types-all-eg.md %}
