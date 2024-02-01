---
title: Data types & constraints
layout: default
parent: SQL guide
has_children: true
nav_order: 3
has_toc: false
---

# Data types and constraints
{: .no_toc }

Data types and constraints are used to define table columns when creating tables via SQL.

![expr](/assets/images/sql-guide/type_name.svg)

{% include page-toc.md %}

## Before you begin

{% include /sql-guide/sql-guide-before-begin.md %}
* [Learn about data cardinality](/docs/concepts/concepts-home)

## Mapping data types

{% include /sql-guide/datatype-mapping.md %}

## Date/Time data types

{% include /sql-guide/data-type-timestamp-summary.md %}

* [TIMESTAMP](/docs/sql-guide/data-types/data-type-timestamp)

## Numeric data types

| User data | Data type |
|---|---|
| Boolean, yes/no | [BOOL](/docs/sql-guide/data-types/data-type-bool) |
| Floating point | [DECIMAL](/docs/sql-guide/data-types/data-type-decimal) |
| Floating point array | [VECTOR](/docs/sql-guide/data-types/data-type-vector) |
| Unsigned integer | [ID](/docs/sql-guide/data-types/data-type-id) |
| Signed integer | [INT](/docs/sql-guide/data-types/data-type-int) |

## String data types

* [STRING](/docs/sql-guide/data-types/data-type-string)

## Low-cardinality data types

`SET` and `SETQ` data types are designed for low-cardinality user data and avoid the need for data normalization:

| User data | Associated date/time values | Data type |
|---|---|---|
| Unsigned integer | None | [IDSET](/docs/sql-guide/data-types/data-type-idset) |
| Unsigned integer | Yes | [IDSETQ](/docs/sql-guide/data-types/data-type-idsetq) |
| String | None | [STRINGSET](/docs/sql-guide/data-types/data-type-stringset) |
| String | Yes | [STRINGSETQ](/docs/sql-guide/data-types/data-type-stringsetq) |

Values are supplied as comma-separated values and once ingested can be queried using SELECT...SETCONTAINS functions:
* [SETCONTAINS](/docs/sql-guide/functions/function-setcontains)
* [SETCONTAINSANY](/docs/sql-guide/functions/function-setcontainsany)
* [SETCONTAINSALL](/docs/sql-guide/functions/function-setcontainsall)

## Constraints

{% include /sql-guide/summary-constraints-datatypes.md %}

## Examples

### Create Table statement with all data types

{% include /sql-guide/table-create-types-all-eg.md %}

## Further information

* [Create a Cloud table using SQL](/docs/sql-guide/statements/statement-table-create)
* [Create a Cloud table using the Cloud UI](/docs/cloud/cloud-tables/cloud-table-create)
* [Create a Cloud table using the API](https://api-docs-featurebase-cloud.redoc.ly/latest#operation/createTable)
