---
title: BULK INSERT
layout: default
parent: Statements
grand_parent: SQL guide
nav_order: 13
---

# BULK INSERT statement
{: .no_toc }

BULK INSERT is a SQL statement that:
* reads data from various sources,
* maps data locations and data types,
* performs optional lightweight data transformations,
* then loads the data to a table [using INSERT statements](/docs/sql-guide/statements/statement-insert)

In some cases, the data will be pre-sorted by internal FeatureBase partition before being ingested by multiple concurrent routines.

![expr](/assets/images/sql-guide/bulk_insert_steps.svg)


## Before you begin

Prepare your data source:
* file(s)
* URL(s)
* inline blob

The data source must be in one of the following formats:
* [Comma separated value (CSV) format](https://www.rfc-editor.org/rfc/rfc4180){:target="_blank"}
* [Lean about New Line Delimited JSON (NDJSON) format](https://en.wikipedia.org/wiki/JSON_streaming){:target="_blank"}
* [Learn about Apache ORC format](https://orc.apache.org/specification/){:target="_blank"}
* [Learn about Apache PARQUET format](https://parquet.apache.org/){:target="_blank"}

{% include page-toc.md %}

## BNF diagrams

![expr](/assets/images/sql-guide/bulk_insert_stmt.svg)

### Column list
![expr](/assets/images/sql-guide/column_list.svg)

{% include /tips/tip-show-table-for-structure.md %}

### Map list
![expr](/assets/images/sql-guide/map_list.svg)

### Transform clause
![expr](/assets/images/sql-guide/map_list.svg)

### With clause
![expr](/assets/images/sql-guide/bulk_insert_options.svg)
![expr](/assets/images/sql-guide/bulk_insert_option.svg)

## Syntax

```
BULK INSERT
  INTO
    table_name [(column_name,...)]
  MAP (position type_name,...)
  [TRANSFORM (expr,...)]
  FROM
    ['path/file_name' | 'URL' | x'records']
  WITH
    [
      [BATCHSIZE integer_literal]
      [ROWSLIMIT integer_literal]
      [INPUT ['path/file_name' | 'INLINE' | 'STREAM' |'URL']]
      [FORMAT
        ['CSV' [HEADER_ROW] [CSV_EMPTY_STRING_AS_NULL] [CSV_NULL_AS_NULL] [NULL_AS_EMPTY_SET]] |
        ['NDJSON' [ALLOW_MISSING_VALUES] [NULL_AS_EMPTY_SET]] |
        ['PARQUET' [NULL_AS_EMPTY_SET]] |
        ['ORC' [NULL_AS_EMPTY_SET]]
      ]
      ...
    ]
```

## Arguments

| Argument | Description | Required? | Additional information |
|---|---|---|---|
| `INSERT` | Insert new records if the `_id` does not exist else update the record with the values passed. Values are not updated for missing columns. | Yes | `REPLACE` can be used but is the same functionality |
| `table_name` | Name of target table | Yes |  |
| `column_name` | Valid columns belonging to `table_name` starting with the `_id` column | Optional | System builds a column list from existing columns in `table_name` if columns are not specified. |
| `MAP` | Specifies how source data is mapped from its location and what datatype to output as. Values from the MAP clause are inserted to columns specified in the `column_list`. | Yes | [MAP and TRANSFORM with `SETQ` data types](#map-and-transform-clauses-for-setq-data-types) |
| `position` | Ordinal position of value in source. |  |  |
| `type_name` | Data type of the value in source. |  | [Data types](/docs/sql-guide/data-types/data-types-home) |
| `TRANSFORM expr` | One or more SQL expressions with dependencies on `column_list` and the `MAP` clause | Optional | [Transform additional](#transform-additional) |
| `FROM` | A single or multi-line string literal that specifies the source of data and are interpreted based on the INPUT option. | Yes |  |
| `'path/file_name'` | Valid path and file name for data source. | Optional | Not available for FeatureBase Cloud. |
| `'URL'` | Valid URL(s) for data sources. | Optional | Multiple URLs may be passed separated by whitespace. If newlines are used, must use an x before the quote like `x'URL<newline>URL'` |
| `x'records'` | CSV or NDJSON records as a string literal. | Required for INLINE | Not supported for `FORMAT 'PARQUET'` |
| `WITH` | Pass one or more statement level options. | Optional |  |
| `BATCHSIZE` | Specify the batch size of the BULK commit. Defaults to 1000. | Optional | Can be used with `STREAM` to batch records as they are streamed to the server where batching not available on client |
| `ROWSLIMIT` | Limit the number of rows processed in a batch. | Optional |  |
| `INPUT` | Input values must match those used in the `FROM` clause |  |  |
| `'INLINE'` | Used for data included directly from the `FROM` clause with contents of the literal read as though they were in a file.  | Required for `FROM x'records'`<br/>Not supported for `PARQUET` and `ORC` Format | [INLINE quotation marks](#using-inline-with-quotation-marks) |
| `'STREAM'` | `STREAM` supports a streaming payload using an HTTP multipart POST. | Optional | [BULK INSERT with STREAM](#bulk-insert-with-stream) |
| `FORMAT` | Set the format of the source data to `'CSV'`, `'NDJSON'` ,`'PARQUET'` or `'ORC'` | Optional | `'PARQUET'` and `'ORC'` do not support `INPUT (INLINE)` |
| `CONCURRENCY` | Number of concurrent workers to ingest the data after it has been presorted. Default `8`. | Optional | Only applies to CSV and NDJSON currently as PARQUET and ORC does not yet presort. |
| `NULL_AS_EMPTY_SET` | Argument that will coerce all `NULL` values resulting from the `MAP` clause into `[]` (empty sets) for all target columns with `SET` datatypes | Optional |  |
| `HEADER_ROW` | `CSV` argument that will ignore the header in the source CSV file. | Optional |  |
| `CSV_EMPTY_STRING_AS_NULL` | `CSV` argument that will assign `""` value as `null` | Optional |  |
| `CSV_NULL_AS_NULL` | `CSV` argument that will assign `NULL` value as `null` | Optional |  |
| `ALLOW_MISSING_VALUES` | `NDJSON` argument that outputs a `NULL` value from the MAP clause if the path expression fails. | Optional |  |

## Additional information

{% include /sql-guide/insert-bulk-map-trans-setq.md %}

### Transform additional

The `TRANSFORM` clause must include:
* SQL expressions that match those in the `column_list`, and
* specify data transformations using ordinal positions defined in the `MAP` clause

{: .note}
Any variables are evaluated during execution for each row.

#### TRANSFORM with `TUPLE()` function

When the `TUPLE()` function is used in a `TRANSFORM` clause, the following values are returned:

{% include /sql-guide/setq-tuple-returns.md %}

### CSV Value Assignment
There are special assignments for certain literal values when inserting CSV data.

| Literal Value | Target Data Type | Resultant | Additional information |
|---|---|---|---|
| `,,` or `,"",` | All unless explicitly listed | `NULL` | |
| `,,` or `,"",` | `string` | `''` (empty string) | if `CSV_EMPTY_STRING_AS_NULL` is used, the resultant becomes `NULL` |
| `,,` or `,"",` | `stringset` <br/>`idset` <br/>`stringsetq` <br/>`idsetq` | `NULL` | if `NULL_AS_EMPTY_SET` is used, the resultant becomes `[]` (empty set) |
| `,NULL,` | All unless explicitly listed | `'NULL'` (string literal) | if `CSV_NULL_AS_NULL` is used, the resultant becomes `NULL` |

### NDJSON Value Assignment

There are special assignments for certain literal values when inserting NDJSON data.

| Literal Value | Target Data Type | Resultant | Additional information |
|---|---|---|---|
| `""` | `string` | `''` (empty string) | |
| `""` | `stringset`<br/>`stringsetq` | `['']` (set with empty string member) | |
| `null` | All unless explicitly listed | `NULL` | |
| `[]` | `stringset` <br/>`idset` <br/>`stringsetq` <br/>`idsetq` | `[]` (empty set) | |
| Value Missing () | All unless explicitly listed | `NULL` | This will only occur if using `ALLOW_MISSING_VALUES` |
| Value Missing () | `stringset` <br/>`idset` <br/>`stringsetq` <br/>`idsetq` | `NULL` | if `NULL_AS_EMPTY_SET` is used, the resultant becomes `[]` (empty set). This will only occur if using `ALLOW_MISSING_VALUES` |

{% include /sql-guide/sql-eg-insert-bulk-statements.md %}

### MAP and TRANSFORM example for SETQ data types

```sql
BULK INSERT INTO doctest (
  _id,
  idsetqcol,
  stringsetqcol,
  timestampcol)
MAP(
  0 ID,
  1 IDSET,
  2 STRINGSET,
  3 TIMESTAMP
  )
TRANSFORM(
    @0,
    TUPLE(@3,@1),
    TUPLE(@3,@2),
    @3
)
FROM x'004,456;567;678;789,this;is;the;first;row,2023-11-22T04:46:59Z'
WITH
    BATCHSIZE 1
    FORMAT 'CSV'
    input 'INLINE';
```

### TRANSFORM examples

| Map clause | TRANSFORM clause |
|---|---|
| `MAP (0 id, 1 int, 4 string)` | `TRANSFORM @0, @1 @2 |

```sql
TRANSFORM (
    @0 + 10, -- offset the new _id value by 10
    @1,      -- pass through unchanged
    TUPLE(@3,@4),      -- create tuple to load time quantum fields
    CASE     -- clean up state names
        WHEN @2 = 'Texas' then 'TX' end
        WHEN @2 = 'California' then 'CA' end
        ELSE @2
    end
)
```
### FROM examples

#### Using INLINE argument

The contents of an inline string literal are treated as a file and read line-by-line.

Single line string literal

```
'this is a single-line string literal'
```

Multi-line string literal

Multi line (prepend with `x`)

```sql
x'this
is
a
multi-line
string
literal'
```

{: .important}
Place closing quotation marks on the final line of any multi-line string literal.

#### Using INLINE with quotation marks

FROM clause quotation marks must be escaped before the BULK statement is run, even when CSV values are quoted.

| Incorrect | Correct |
|---|---|
| `FeatureBase's speed` | `FeatureBase''s speed` |
| `""Time is money." – Benjamin Franklin."` | `"""Time is money."" – Benjamin Franklin."` |


<!-- COMMENTED OUT BECAUSE AS OF 2023-01-31 this is the same as INSERT

### BULK REPLACE from CSV file with TRANSFORM

```sql
bulk replace
    into insert_test (_id, int1, string1, timestamp1)
    map (0 id, 1 int, 2 string)
    transform (@0, @1, @2, current_timestamp)
from
    '/dev/queries/insert_test.csv'
with
    format 'CSV'
    input 'FILE';
```
-->
<!-- The following examples to be rolled into the new examples-->
### BULK INSERT with read from CSV file

```sql
bulk replace
    into insert_test (_id, int1, string1, timestamp1)
    map (0 id, 1 int, 2 string)
    transform (@0, @1, @2, current_timestamp)
from
    '/dev/queries/insert_test.csv'
with
    format 'CSV'
    input 'FILE';
```

### BULK INSERT with STREAM

Using input STREAM requires making an HTTP multipart form POST request. The argument to FROM may be `'*'` and all files attached to the request will be streamed in and ingested together. The fbsql CLI tool implements the multipart POST and you would use it as follows:

```sql
\file myfile.csv
\file myfile2.csv
\file myfile3.csv

bulk replace
  into insert_test (_id, int1, string1, timestamp1)
  map (0 id, 1 int, 2 string)
  transform (@0, @1, @2, current_timestamp)
  from
    '*'
  with
    format 'CSV'
    input 'STREAM';
```

This would ingest all three files in a single request.
