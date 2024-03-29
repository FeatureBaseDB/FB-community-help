---
title: PQL ARROW()
layout: default
parent: PQL Read
grand_parent: PQL guide
---

# PQL ARROW()


This page contains information that only applies to preview functionality involving `float64` and `int64` data types. This page represents a work in progress that is subject to frequent changes. To enable this functionality, you must use the `--dataframe.enable` flag when running FeatureBase.

- `Arrow()` is a query against the `float64` and `int64` field types. For more information on using these data types in FeatureBase, visit the [ingest documentation](/docs/community/com-ingest/old-ingest-dataframe) and the [HTTP API](/docs/community/com-api/old-http-endpoint#dataframe-endpoints) endpoints for them.
- `Arrow()` is currently limited to use with the community version. `Arrow()` and the `float64`/`int64` field types are not applicable to cloud at this time.

`Arrow()` can be used to extract data when it's stored using the `float64` or `int64` data types. This is equivalent to `Extract()` for other data types or `SELECT <columns> FROM <tbl> WHERE <condition>` in SQL.

## Call Definition

```pql
Arrow(ROW_CALL, header=[LIST_OF_FIELDS])
```

#### Mandatory Arguments
- `ROW_CALL` : the output of any [row call](/docs/pql-guide/pql-read-home#row-calls){:target="_blank"} (set of record IDs / keys). Only data from records return by this row call will be returned by `Arrow()`.

#### Optional Arguments
- `LIST_OF_FIELDS` : comma seperated list of fields. Data from these fields will be returned by	`Arrow()`. If a header isn't included, data from all fields will be returned.

#### Returns
- Key-value / map structure mapping field names to lists of values for that field.

## Examples

### Data:

```
Index: weather (non keyed)

  _id  | events (keyed set) |  min_temp (float64) | max_temp (float64) | rainfall (float64)
-------+--------------------+---------------------+--------------------+--------------------
   0   |    cloudy          |        8.0          |      24.3          |        0.0
   1   |    rain,cloudy     |       14.0          |      26.9          |        3.6
   2   |    sunny           |       13.7          |      23.4          |        0.0
   3   |    cloudy          |       13.3          |      15.5          |        2.9
```
-----------------------------------------------------------------------
### Example 1
Return all the data stored using the `float64` or `int64` data type.

#### Query
```
[customer]Arrow(All())
```
#### Tabular Response
#### HTTP Response
```json
{
  'results': [
    {
       '_ID': [228589569, 229638145, 227540993, 226492417],
       'max_temp': [23.4, 15.5, 26.9, 24.3],
       'min_temp': [13.7, 13.3, 14, 8],
       'rainfall': [0, 2.9, 3.6, 0]
    }
  ]
}
```
#### Explanation:
Here `_ID` is the raw key used for records in FeatureBase. Eventually, it will be possible to return string keys as opposed to raw ids. Otherwise, the data for the other fields is returned as expected.


---
### Example 2
Return `min_temp` and `max_temp` for records that had a `cloudy` `event`.

#### Query
```
[customer_keyed]Arrow(
  Row(event="cloudy"),
  header = [min_temp, max_temp]
)
```
#### Tabular Response
#### HTTP Response
```json
{
  'results': [
    {
      '_ID': [229638145, 227540993, 226492417],
      'max_temp': [15.5, 26.9, 24.3],
      'min_temp': [13.3, 14, 8]
    }
  ]
}
```
#### Explanation:
Here `_ID` is the raw key used for records in FeatureBase. Eventually, it will be possible to return the string key for records as opposed to the raw id. Otherwise, only three records are returned -- the records where there was a `cloudy` event. Only `min_temp` and `max_temp` are returned.
