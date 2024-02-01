## `BULK INSERT` examples

The following SQL examples demonstrate BULK INSERT using different clauses and data sources.

| Statement | Target table | FROM clause | TRANSFORM clause | WITH clause |
|---|---|---|---|---|
| [BULK INSERT using CSV data source](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-csv-target) | [csv-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-csv-target) | URL |  | * `BATCHSIZE`<br/>* `FORMAT`<br/>* `INPUT`<br/>* `HEADER_ROW` |
| [BULK INSERT using ndJSON data source](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-ndjson-target) | [ndjson-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-ndjson-target) | URL | Includes [CAST function](https://www.w3schools.com/sql/func_sqlserver_cast.asp){:target="_blank"} | * `BATCHSIZE`<br/>* `FORMAT`<br/>* `INPUT`<br/>* `ALLOW_MISSING_VALUES` |
| [BULK INSERT using ORC data source](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-orc-target) | [orc-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-orc-target) | URL |  | * `FORMAT`<br/>* `INPUT` |
| [BULK INSERT using Apache Parquet data source](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-parquet-target) | [parquet-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-parquet-target) | URL |  | * `FORMAT`<br/>* `INPUT` |
| [BULK INSERT using inline CSV](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-tuple-set-target) | [tuple-set-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-tuple-set-target) | Inline CSV | Combines column values using [TUPLE function](/docs/sql-guide/functions/function-tuple) | * `FORMAT`<br/>* `INPUT` |
