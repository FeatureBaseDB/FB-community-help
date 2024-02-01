---
title: RANGEQ()
layout: default
parent: Functions
grand_parent: SQL guide
---

# RANGEQ() function

`RANGEQ()` is used on `IDSETQ` or `STRINGSETQ` data type columns to return values between unix-epoch timestamps.

## Before you begin
* [Learn about unix epoch/unix time](https://en.wikipedia.org/wiki/Unix_time){:target="_blank"}

## Syntax

```sql
RANGEQ(tq-colum,{ts-begin | null},{ts-end | null})
```

## Arguments

| Argument | Description | Additional information |
|---|---|---|
| `timequantum-col` | Any `idsetq` or `stringsetq` column that has an assigned `timequantum` unix-epoch timestamp | * [IDSETQ()](/docs/sql-guide/data-types/data-type-idsetq)<br/>* [STRINGSETQ()](/docs/sql-guide/data-types/data-type-stringsetq) |
| `ts-begin` | Unix-epoch timestamp which is the first value in a range from which to return results | [Null substitution](#null-substitution) |
| `ts-end` | Unix-epoch timestamp which is last value in range from which to return results. | [Null substitution](#null-substitution) |

## Additional information

{% include /sql-guide/timequantum-timestamp-summary.md %}

### `null` substitution

Substitute `null` if `ts-begin` or `ts-end` is not known.

## Returns

| Data type | Value |
|---|---|
| `Timestamp` | Returns integer UNIX-epoch timestamps between `ts-begin` and `ts-end` inclusive |

## Examples

### Source table definition

{% include /sql-guide/create-table-with-stringsetq-timeq.md %}

{% include /sql-guide/insert-into-table-stringsetq-timeq.md %}

### SELECT with two RANGEQ() timestamps

{% include /sql-guide/select-from-stringsetq-timeq.md %}

## SELECT with one RANGEQ() timestamp

{% include /sql-guide/select-from-stringsetq-timeq-one-arg.md %}
