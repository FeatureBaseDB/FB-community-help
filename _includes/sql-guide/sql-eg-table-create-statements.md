## `CREATE TABLE` examples

| Statement | Data types | Table options | Relates to |
|---|---|---|---|
| [CREATE TABLE cosvec-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-cosvec-target) | * [ID](/docs/sql-guide/data-types/data-type-id)<br/>* [STRING](/docs/sql-guide/data-types/data-type-string)<br/>* [VECTOR](/docs/sql-guide/data-types/data-type-vector) |  | [INSERT INTO cosvec-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-cosvec-target) |
| [CREATE TABLE csv-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-csv-target) | * [INT](/docs/sql-guide/data-types/data-type-int)<br/>* [STRING](/docs/sql-guide/data-types/data-type-string) |  | [BULK INSERT csv-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-csv-target) |
| [CREATE TABLE ndjson-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-ndjson-target) | * [BOOL](/docs/sql-guide/data-types/data-type-bool)<br/>* [ID](/docs/sql-guide/data-types/data-type-id)<br/>* [STRING](/docs/sql-guide/data-types/data-type-string)<br/>* [TIMESTAMP](/docs/sql-guide/data-types/data-type-timestamp) | * `IF NOT EXISTS`<br/>* `WITH COMMENT` | [BULK INSERT ndjson-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-ndjson-target) |
| [CREATE TABLE orc-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-orc-target) | * [BOOL](/docs/sql-guide/data-types/data-type-bool)<br/>* [ID](/docs/sql-guide/data-types/data-type-id)<br/>* [INT](/docs/sql-guide/data-types/data-type-int)<br/>* [STRING](/docs/sql-guide/data-types/data-type-string) | * `IF NOT EXISTS`<br/>* `WITH COMMENT` | [BULK INSERT orc-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-orc-target)
| [CREATE TABLE parquet-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-parquet-target) | * [ID](/docs/sql-guide/data-types/data-type-id)<br/>* [INT](/docs/sql-guide/data-types/data-type-int)<br/>* [DECIMAL](/docs/sql-guide/data-types/data-type-decimal) |  | [BULK INSERT parquet-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-parquet-target) |
| [CREATE TABLE tuple-set-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-tuple-set-target) | * [IDSET](/docs/sql-guide/data-types/data-type-idset)<br/>* [IDSETQ](/docs/sql-guide/data-types/data-type-idsetq)<br/>* [INT](/docs/sql-guide/data-types/data-type-int)<br/>* [STRING](/docs/sql-guide/data-types/data-type-string)<br/>* [STRINGSET](/docs/sql-guide/data-types/data-type-stringset)<br/>* [STRINGSETQ](/docs/sql-guide/data-types/data-type-stringsetq) |  | [BULK INSERT tuple-set-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-tuple-set-target) |
| [CREATE TABLE tan-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-tan-target) | * [ID](/docs/sql-guide/data-types/data-type-id)<br/>* [STRINGSET](/docs/sql-guide/data-types/data-type-stringset) |  | [INSERT INTO tan-target](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-tan-target) |

<!-- Data type list for copying into tables

* [BOOL](/docs/sql-guide/data-types/data-type-bool)<br/>
* [DECIMAL](/docs/sql-guide/data-types/data-type-decimal)
* [ID](/docs/sql-guide/data-types/data-type-id)
* [IDSET](/docs/sql-guide/data-types/data-type-idset)
* [IDSETQ](/docs/sql-guide/data-types/data-type-idsetq)
* [INT](/docs/sql-guide/data-types/data-type-int)
* [STRING](/docs/sql-guide/data-types/data-type-string)
* [STRINGSET](/docs/sql-guide/data-types/data-type-stringset)
* [STRINGSETQ](/docs/sql-guide/data-types/data-type-stringsetq)
* [TIMESTAMP](/docs/sql-guide/data-types/data-type-timestamp)
* [VECTOR](/docs/sql-guide/data-types/data-type-vector)

-->
