---
title: CSV datafile reference
layout: default
parent: Import data
grand_parent: Community
nav_order: 1
---

# CSV datafile reference
{: .no_toc}

This reference page provides information on how to structure a CSV file with data ready to be imported to FeatureBase Community.

{% include page-toc.md %}

## Before you begin

* [Learn how to manage data import](/docs/community/com-ingest/com-ingest-manage)
* Learn about [RFC-4180 standard for CSV files](https://datatracker.ietf.org/doc/html/rfc4180#section-2) which is required for CSV ingestion.

## Syntax

```
{source_column_name}[__data-type[_constraint-value...]],...
{record,...}
```

## Arguments

| Argument | Description | Required |
|---|---|---|
| source_column_name | Source column name to translate to FeatureBase index | Yes |
| data-type | Target data type. | Can be omitted if defined with ingest tool `--header` flag. |
| constraint_value | Data type constraint for FeatureBase data types. | Can be omitted if defined with ingest tool `--header` flag |
| record | record data to be translated to FeatureBase | Yes |

## Additional information

{: .important}
>Header column names, data-types and constraints have special meaning and **must** be explicitly defined:
>* in the CSV file, or
>* using CSV ingest flags defined at the command line.


* Use double quotes `"..."` to enclose fields containing:
  * Line breaks (CRLF)
  * Commas
  * double quotes

## Examples

{% include /com-ingest/com-datafile-csv-header-defined.md %}

{% include /com-ingest/com-datafile-csv-header-undefined.md %}

## Next step

Refer to the [CSV ingest tool reference](/docs/community/com-ingest/com-ingest-flags-csv) for instructions on importing the CSV file to FeatureBase Community.
