---
title: CREATE TABLE
layout: default
parent: Statements
grand_parent: SQL guide
nav_order: 5
---

## CREATE TABLE statement

Create a FeatureBase table with the specified columns and data types.

## BNF diagrams

![expr](/assets/images/sql-guide/create_table_stmt.svg)

### COLUMN_LIST
![expr](/assets/images/sql-guide/column_def.svg)

#### Type_name
![expr](/assets/images/sql-guide/type_name.svg)

#### Column_constraint
![expr](/assets/images/sql-guide/column_constraint.svg)

### Table_options
![expr](/assets/images/sql-guide/table_options.svg)

## Syntax

```
CREATE TABLE
  [IF NOT EXISTS]
  table_name
  (COLUMN_LIST)
  [with comment 'comment'];
```

## Arguments

| Argument | Description | Required? | Additional information |
|---|---|---|
| `table_name` | Valid table name | Yes | [Naming standards](#naming-standards)
| `IF NOT EXISTS` | Optional argument that stops statement execution if a table of the same name already exists | No |  |
| COLUMN_LIST | List of column names, data types and optional constraints. The list must include the `_id` column | Yes | * [_id column](#_id-column)<br/>* [Naming standards](#naming-standards)<br/>* [Data types](/docs/sql-guide/data-types/data-types-home) |
| `with comment` | Optional string literal that describes the table | No |  |

## Additional information

### Naming standards

{% include /concepts/standard-naming-obj.md %}
{% include /cloud-table/cloud-standard-naming-table.md %}
{% include /cloud-table/cloud-standard-naming-col.md %}

### `_id` column

{% include /cloud-table/cloud-summary-table-pk.md %}

<!--next include has heading "CREATE TABLE examples"-->

{% include /sql-guide/sql-eg-table-create-statements.md %}

<!--original create table statements to be reviewed as they may already be included above

{% include /sql-guide/table-create-prod-sale-string-eg.md %}

### CREATE TABLE with integer constraints

{% include /sql-guide/table-create-integer-constraints-eg.md%}

### CREATE TABLE with STRINGSET data type

{% include /sql-guide/table-create-stringset-datatype-eg.md %}

{% include /sql-guide/table-create-segments-eg.md %}

{% include /sql-guide/create-table-with-stringsetq-timeq.md %}

### CREATE TABLE with TIMEQUANTUM constraints

{% include /sql-guide/table-create-timequantum-eg.md %}

### CREATE TABLE with vector array

* [CREATE TABLE with VECTOR data type column](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-cosvec-target)

### CREATE TABLE with all column types

{% include /sql-guide/table-create-types-all-eg.md %}
-->

## Further information

* [SHOW CREATE TABLE](/docs/sql-guide/statements/statement-table-create-show)
* [SHOW TABLES](/docs/sql-guide/statements/statement-tables-show)
* [ALTER TABLE](/docs/sql-guide/statements/statement-table-alter)
* [SHOW COLUMNS](/docs/sql-guide/statements/statement-columns-show)
* [Data types](/docs/sql-guide/data-types/data-types-home)
