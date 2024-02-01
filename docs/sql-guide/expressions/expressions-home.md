---
title: Expressions
layout: default
parent: SQL guide
nav_order: 5
---

# SQL Expressions
{: .no_toc }

{% include page-toc.md %}

## Before you begin

{% include /sql-guide/sql-guide-before-begin.md %}

## `identifier`
![expr](/assets/images/sql-guide/identifier.svg)

{% include /concepts/standard-naming-obj.md %}

## `expr`

![expr](/assets/images/sql-guide/expr.svg)

| Syntax | Example | Result |
|---|---|---|
| `expr [NOT] LIKE expr` | `SELECT * FROM products WHERE prodlist LIKE 'pen';` | `ballpen`, `pencil`, `playpen` |
| `expr IS [NOT] null` | `SELECT * FROM services WHERE price IS null;` | `free delivery on orders over $50` |
| `expr [NOT] between expr AND expr` | `SELECT * from Products WHERE Price BETWEEN 10 AND 20;` | `fountain pen`, `notepad`, `rubber ball` |
| `expr [NOT] IN ([SELECT_stmnt | expr,...])` | `Select * from Products where product_ID NOT IN (SELECT product_ID from Sales where product_name LIKE ear)` | `gold-plated earplugs` |

### Literals

Literals are explicitly specified fixed values that conform to a specific data type:

| String literal | BNF diagram | Description | Additional information |
|---|---|---|---|
| `date` |  |  | [TIMESTAMP() data type](/docs/sql-guide/data-types/data-type-timestamp) |
| `decimal` |  |  | [DECIMAL() data type](/docs/sql-guide/data-types/data-type-decimal)
| `set` | ![expr](/assets/images/sql-guide/set_literal.svg) |  | *[IDSET data type](/docs/sql-guide/data-types/data-type-idset)<br/>* [STRINGSET data type](/docs/sql-guide/data-types/data-type-stringset)<br/>* [IDSETQ data type](/docs/sql-guide/data-types/data-type-idsetq)<br/>* [STRINGSETQ](/docs/sql-guide/data-types/data-type-stringsetq) |
| `string` |  |  | [STRING data type](/docs/sql-guide/data-types/data-type-string) |
| `tuple` | ![expr](/assets/images/sql-guide/tuple_literal.svg) | Tuple literals are a collection of data types. | [TUPLE() function](/docs/sql-guide/functions/function-tuple) |

### [unary_op] expr

* [Unary operators](/docs/sql-guide/operators/operators-home/#unary_op)

### expr binary_op expr

* [Binary operators](/docs/sql-guide/operators/operators-home/#binary_op)

### function_call

![expr](/assets/images/sql-guide/function_call.svg)

* [SQL Functions](/docs/sql-guide/functions/functions-home)

### CAST `<expr>` AS `<data-type>`

| Syntax | Example | Result | Additional information |
|---|---|---|---|
| `CAST <expr> AS <data-type>` | `SELECT CAST (25.65 AS int);` | 25 | [CAST function](https://www.w3schools.com/sql/func_sqlserver_cast.asp){:target="_blank"} |

### paren_select_stmt
![expr](/assets/images/sql-guide/paren_select_stmt.svg)

| Description | Additional information |
|---|---|
| A SQL Statement nested within another SQL statement | [SELECT Statement](/docs/sql-guide/statements/statement-select) |

### case_expr
![expr](/assets/images/sql-guide/case_expr.svg)

* [SQL CASE expression](https://www.w3schools.com/sql/sql_case.asp){:target="_blank"}
