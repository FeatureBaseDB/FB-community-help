---
title: IDENTIFIER()
layout: default
parent: Functions
grand_parent: SQL guide
---

# IDENTIFIER() function

{: .note}
`IDENTIFIER()` is supported on [FeatureBase Cloud](/docs/cloud/cloud-home)

`IDENTIFIER()` is used with the `INSERT INTO` statement and automatically generates unique numeric row values for the `_id` column.

## Before you begin

IDENTIFIER() requires:
* Table `_id` column assigned [`ID` data type](/docs/sql-guide/data-types/data-type-id)
* One or more values to insert to table

## Syntax

```sql
{IDENTIFIER('table_name', <value>,...)}
```

## Arguments

| Argument | Description | Data type |
|---|---|---|---|
| `table_name` | Table name stated in `INSERT INTO` statement | [String data type](/docs/sql-guide/data-types/data-type-string) |
| `<value>` | Value to be inserted into subsequent column(s) stated in the `INSERT INTO` statement | [FeatureBase Data types](/docs/sql-guide/data-types/data-types-home) |

## Additional information

`IDENTIFIER()` increments by `1` each time the function is called, and retains this value in your cloud account regardless of user login.

{: .warning}
A mismatched table name in the `INSERT INTO` statement and `IDENTIFIER()` function **will** cause unexpected results.

## Returns

| Data type | Value |
|---|---|
| [ID](/docs/sql-guide/data-types/data-type-id) | A numeric value starting at `1` |

## Examples

### Destination Table
```sql
CREATE TABLE auto-id
    (_id id, color string);
```

### INSERT INTO with `identifier` function

```sql
INSERT INTO auto-id (_id, color)
    VALUES (idenitifier('auto-id'),'green');
```

### Verify results

select * from idtest;
+-----+--------+
| _id | color  |
+-----+--------+
|   1 | green  |
+-----+--------+
```
