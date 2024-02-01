---
title: IDSET
layout: default
parent: Data types & constraints
grand_parent: SQL guide
nav_order: 4
---

# IDSET data type

IDSET is a FeatureBase datatype used to set multiple ID values for a single column.

## Syntax

```
IDSET
```

## Arguments

| Argument | Description |
|---|---|
| IDSET | Data type used where there is a need to set multiple ID values for a single column |

## Additional information

The IDSET data type:
* has a `set` internal data type
* is used for:
  * grouping by
  * searching for discrete values

## Examples

### CREATE TABLE with all data types

{% include /sql-guide/table-create-types-all-eg.md %}
