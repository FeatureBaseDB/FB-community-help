Constraints are applied:
* to data types to modify and optimize how table data is stored and accessed
* when a column is created

![expr](/assets/images/sql-guide/column_constraint.svg)

| Constraint | Data type |
|---|---|
| MIN, MAX | [INT](/docs/sql-guide/data-types/data-type-int) |
| SCALE | [DECIMAL](/docs/sql-guide/data-types/data-type-decimal) |
| TIMEQUANTUM, TTL | [IDSETQ](/docs/sql-guide/data-types/data-type-idsetq)<br/> [STRINGSETQ](/docs/sql-guide/data-types/data-type-stringsetq) |
| TIMEUNIT | [TIMESTAMP](/docs/sql-guide/data-types/data-type-timestamp) |
