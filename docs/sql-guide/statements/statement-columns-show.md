---
title: SHOW COLUMNS
layout: default
parent: Statements
grand_parent: SQL guide
nav_order: 9
---

# SHOW COLUMNS statement

## BNF diagram

![expr](/assets/images/sql-guide/show_columns.svg)

## Syntax

```sql
SHOW COLUMNS FROM table_name;
```

## Arguments

| Argument | Description |
|---|---|
| table_name | name of existing table in database |

## Returns

| Column name | Data type | Description | Additional information |
|---|---|---|
| `name` | string | column name |  |
| `type` | string | column data type | [Data types](/docs/sql-guide/data-types/data-types-home) |
| `created_at` | timestamp | timestamp | [TIMESTAMP() data type](/docs/sql-guide/data-types/data-type-timestamp) |
| `keys` | bool | Indicates true if key translation is performed for a column. This is only for `STRING` and `STRINGSET` types |  |
| `cache_type` | string |  |  |
| `cache_size` | int |  |  |
| `scale` | int | Scale value for `DECIMAL()` column | [DECIMAL() data type](/docs/sql-guide/data-types/data-type-decimal) |
| `min` | int | Minimum value for `INT()` column | [INT() data type](/docs/sql-guide/data-types/data-type-int) |
| `max` | int | Maximum value for `INT()` column | [INT() data type](/docs/sql-guide/data-types/data-type-int) |
| `timeunit` | string | TIMEUNIT for `TIMESTAMP()` column | [TIMESTAMP() data type](/docs/sql-guide/data-types/data-type-timestamp) |
| `epoch` | int | Epoch for `TIMESTAMP()` column | [TIMESTAMP() data type](/docs/sql-guide/data-types/data-type-timestamp) |
| `time_quantum` | string | Applies to `IDSETQ()` and `STRINGSETQ()` columns | [IDSETQ() data type](/docs/sql-guide/data-types/data-type-idsetq)<br/>[STRINGSETQ() data type](/docs/sql-guide/data-types/data-type-stringsetq) |
| `ttl` | string | Applies to `IDSETQ()` and `STRINGSETQ()` columns | [IDSETQ() data type](/docs/sql-guide/data-types/data-type-idsetq)<br/>[STRINGSETQ() data type](/docs/sql-guide/data-types/data-type-stringsetq) |

## Examples

### SHOW COLUMNS on sample database `skills` table

```
SHOW COLUMNS FROM skills;
```

|_id | name | type | created_at | keys | cache_type | cache_size | scale | min | max | timeunit | epoch | timequantum | ttl |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| _id | _id | string | string | 2023-01-05T05:53:06Z | true |  | 0 | 0 | 0 | 0 |  | 0 |  | 0s |
| bools | bools | stringset | 2023-01-05T05:53:06Z | true | ranked | 50000 | 0 | 0 | 0 |  | 0 |  | 0s |
| bools-exists | bools-exists | stringset | 2023-01-05T05:53:06Z | true | ranked | 50000 | 0 | 0 | 0 |  | 0 |  | 0s |
| id | id | int | int | 2023-01-05T05:53:06Z | false |  | 0 | 0 | -9223372036854776000 | 9223372036854776000 |  | 0 |  | 0s |
| skills | skills | stringset | 2023-01-05T05:53:06Z | true | ranked | 50000 | 0 | 0 | 0 |  | 0 |  | 0s |
| titles | titles | stringset | 2023-01-05T05:53:06Z | true | ranked | 50000 | 0 | 0 | 0 |  | 0 |  | 0s |
