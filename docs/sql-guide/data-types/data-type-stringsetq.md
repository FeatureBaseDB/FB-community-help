---
title: STRINGSETQ
layout: default
parent: Data types & constraints
grand_parent: SQL guide
nav_order: 9
---

# STRINGSETQ data type

STRINGSETQ is a FeatureBase datatype used to associate multiple TIMESTAMP values with string values within a single row.

## Syntax

```
STRINGSETQ [TIMEQUANTUM {value} [TTL '{value}']]
```

## Arguments

| Argument | Description |
|---|---|
| STRINGSETQ | Data type used to set multiple STRING values for a single column. |
{% include /sql-guide/timequantum-ttl-args.md %}

## Additional information

### STRINGSETQ properties

The STRINGSETQ data type:
* has a `keyed set` internal datatype
* one standard view by default unless a timeQuantum is set.
* is used when:
  * grouping by
  * searching for discrete values

{% include /sql-guide/timequantum-additional.md %}

{% include /sql-guide/timequantum-timestamp-summary.md %}

{% include /sql-guide/ttl-additional.md %}

{% include /sql-guide/insert-bulk-map-trans-setq.md %}

### `TIMEQUANTUM` values and `TUPLE()` function

When the `TUPLE()` function is used in `SELECT` and `BULK INSERT` statements, the following values are returned:

{% include /sql-guide/setq-tuple-returns.md %}

## Examples

### CREATE TABLE with SETQ Timequantum

{% include /sql-guide/table-create-timequantum-eg.md %}

{% include /sql-guide/create-table-with-stringsetq-timeq.md %}

### INSERT INTO table with SETQ Timequantum

{% include /sql-guide/insert-into-table-stringsetq-timeq.md %}
