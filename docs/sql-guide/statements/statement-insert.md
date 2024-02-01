---
title: INSERT
layout: default
parent: Statements
grand_parent: SQL guide
nav_order: 12
---

# INSERT statement

`INSERT` or `REPLACE` multiple rows of data into existing columns in a FeatureBase table.

## BNF diagrams

![expr](/assets/images/sql-guide/insert_stmt.svg)

### column_list
![expr](/assets/images/sql-guide/column_list.svg)

{% include /tips/tip-show-table-for-structure.md %}

### value_list
![expr](/assets/images/sql-guide/value_list.svg)

## Syntax

```
INSERT INTO
  table_name [(column_list)]
  VALUES
      {(value_list),...};
```

## Arguments

| Argument | Description | Required? | Additional information |
|---|---|---|---|
| table_name | Target table name | Yes |  |
| column_list | List of columns which must include the `_id` column | Optional | FeatureBase assumes values to be inserted into existing columns if omitted |
| value_list | The list of constants and/or functions joined by operators, or a subquery to be inserted into the column. | Yes | [Value list additional](#value-list-additional) |

## Additional information

### Limitations

The `INSERT` statement has the following limitations:

| Limitation | Example | Result |
|---|---|---|
| Number of values to INSERT must match the number of columns in `column_list` | `INSERT INTO productnames (_id, products, sales)` VALUES (1, 'FeatureBase') | Run fails with error |
| Values in rows with duplicate `_id` keys are overwritten | `INSERT INTO productnames (_id, products, sales) VALUES (1, 'FeatureBase', 2468121), (1, 'Pilosa', 132940);` | Second row overwrites the first |
| Null values in rows with duplicate `_id` keys are ignored | | `INSERT INTO competitors (_id, competitor) VALUES (1, 'BitQuick'), (1, NULL)` | NULL ignored |

### Value assignment

There are special assignments for certain literal values.

| Literal Value | Target Data Type | Result | Additional information |
|---|---|---|---|
| `,'',` | `string`| `''` (empty string) | |
| `,NULL,`(case insensitive) | All unless explicitly listed | `NULL`| |
| `[]` | `idset` <br/>`stringset` | `[]` (empty set) | Stores an empty set for new records and existing `NULL` records. Keeps existing values in set otherwise |
| `{}` | `idsetq`<br/>`stringsetq` | Curly brackets surround each datestamp and value to be inserted into the array | May also be used for vector arrays |

{% include /sql-guide/timequantum-timestamp-summary.md %}

## UPDATE/REPLACE behavior

{% include /sql-guide/update_behavior.md %}

## Examples

{% include /sql-guide/sql-eg-insert-statements.md %}

<!-- the following headings and sql commented out because most of them are in the insert statements include, above

### CREATE TABLE with string data types

{% include /sql-guide/table-create-prod-sale-string-eg.md %}

### INSERT multiple records INTO `products` and `services` tables

{% include /sql-guide/insert-into-products-table-eg.md %}

{% include /sql-guide/insert-into-services-table-eg.md %}

### INSERT value in services table

```sql
INSERT INTO services (_id, servicelist, price)
VALUES (1, 'free deliveries on orders over $50', 0.00);
```

### Overwrite existing value

```sql
INSERT INTO services (_id, servicelist, price)
VALUES (2, 'local postage per item', 2.20);
```

### CREATE TABLE with TIMEQUANTUM constraints

{% include /sql-guide/table-create-timequantum-eg.md %}

### INSERT for time quantum data types

The following statement inserts values with an associated timestamp (using either a unix time or timestamp) into `timeq`,  which has `IDSETQ` and `STRINGSETQ` data types.

{: .important}
Curly brackets in the following example are mandatory and do not represent syntax grammar.

```sql
INSERT INTO timeq(_id, stringsetcolq, idsetcolq)
VALUES (1, {'2018-08-31T00:00:00Z', ['A','B']}, {1676649734, [1]});
```

### CREATE TABLE with `STRINGSET` data types

{% include /sql-guide/table-create-stringset-datatype-eg.md %}

### INSERT data to `STRINGSET`

```sql
INSERT
  into myspecies (_id, species)
  values
    ('yes', ['Manatee', 'Sea Horse', 'Koala']),
    ('no', ['Starfish']);
```

### INSERT data to vector table

* [INSERT INTO VECTOR data type column](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-cosvec-target)
-->
## Further information

* [IDSETQ data type](/docs/sql-guide/data-types/data-type-idsetq)
* [STRINGSETQ data type](/docs/sql-guide/data-types/data-type-stringsetq)
