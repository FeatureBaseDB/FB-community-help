## `SELECT` examples

These examples demonstrate SELECT statements that use different clauses, expressions, functions and operators.

| Statement | Target table | SELECT clauses | Expressions | Functions | Operators|
|---|---|---|---|---|---|
| [SELECT FROM cosvec-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-cosvec-target) | [cosvec-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-cosvec-target) |  |  | [COSINE DISTANCE](/docs/sql-guide/functions/function-cosine-distance) |  |
| [SELECT FROM csv-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-csv-target) | [csv-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-csv-target) | * `COUNT()`<br/>* `DISTINCT` |  |  |
| [SELECT FROM ndjson-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-ndjson-target) | [parquet-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-ndjson-target) | * `WHERE`<br/>* `LIKE`<br/>* `ORDER BY` |  |  |
| [SELECT FROM orc-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-orc-target) | [orc-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-orc-target) |  |  |  |
| [SELECT FROM parquet-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-parquet-target) | [parquet-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-parquet-target) | * `TOP()`<br/>* `WHERE` |  |  | `BETWEEN` |
| [SELECT FROM tan-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-tan-target) | [tan-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-csv-target) |  |  | [TANIMOTO_COEFFICIENT()](/docs/sql-guide/functions/function-tanimoto) |  |
| [SELECT FROM tuple-set-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-tuple-set-target) | [parquet-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-csv-target) |  |  | [DATETIMENAME()](/docs/sql-guide/functions/function-datetimename) |  |
