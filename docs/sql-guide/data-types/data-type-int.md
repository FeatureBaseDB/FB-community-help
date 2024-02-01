---
title: INT
layout: default
parent: Data types & constraints
grand_parent: SQL guide
nav_order: 6
---

# INT data type

Int is a numeric datatype used with the `min` and `max` constraints.

## Syntax

```
INT [MIN {value}] [MAX {value}]
```

## Arguments

| Argument | Description | Default |
|---|---|---|
| INT | Used for integer data that spans a large range of values intended for aggregate queries |  |
| MIN | Minimum value constraint | -2^63 |
| MAX | Maximum value constraint | 2^63 -1 |

## Additional information

INT is **not suitable** for queries that
* group by
* include data sets with low cardinality

Instead, use the [ID data type](/docs/sql-guide/data-types/data-type-id).

## Examples

{% include /sql-guide/table-create-integer-constraints-eg.md%}

{% include /sql-guide/table-create-types-all-eg.md %}
