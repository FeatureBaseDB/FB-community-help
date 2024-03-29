---
title: PQL APPLY()
layout: default
parent: PQL Read
grand_parent: PQL guide
---

# PQL APPLY()

{: .note}
>APPLY() is exclusive to FeatureBase Community and applies to preview functionality involving `float64` and `int64` data types.

The `Apply()` query uses the map reduce framework to compute on `float64` and `int64` field types.

In FeatureBase, data is sharded by records. Meaning a single table is split into multiple shards.

A single shard contains the data for some subset of records in that index.

The first two arguments to `Apply()` (`ROW_CALL` and `MAP_FUNCTION`) are the map phase.

* `ROW_CALL` filters records
* `MAP_FUNCTION` is Ivy code that runs against each shard.
* The third argument is the reduce phase. It is also written in Ivy and runs against the amalgamation of data return from the `MAP_FUNCTION`.

Read the mandatory arguments section below for more on the map and reduce phases.

## Before you begin

Learn about float64 and int64 data types in:
* [dataframe consumer](/docs/community/com-ingest/old-ingest-dataframe)
* [HTTP API](/docs/community/com-api/old-http-endpoint)
Learn about IVY
* [Learn about IVY APL-like language](https://github.com/robpike/ivy){:target="_blank"}
* [Watch the IVY demo](https://github.com/robpike/ivy/blob/master/demo/demo.ivy){:target="_blank"}

* Enable `APPLY()` when you start the featurebase server from the /opt director: `./featurebase server --dataframe.enable`

## Call Definition

```pql
Apply(ROW_CALL, MAP_FUNCTION, REDUCE_FUNCTION)
```

## Mandatory Arguments

`ROW_CALL`
* the output of any [PQL Row Call set of record IDs/keys](/docs/pql-guide/pql-read-home#row-calls)
* Only data for records returned here will make it to the `MAP_FUNCTION`.
* Filter records as much as possible here to improve performance.
* Note that this row call is run against non `float64` and `int64` data.

`MAP_FUNCTION`
* Ivy function to be performed at the shard level for records returned by `ROW_CALL`.
* Here you can access lists of column values within the shard by using column names as an identifier. See examples below.
* In most cases, it's best to perform as much work at this phase as possible. The output from each shard is passed to the reduce phase.

`REDUCE_FUNCTION`
* Ivy query to be performed on the aggregation or concatenation of the output of the `MAP_FUNCTION`.
*You can reference this aggregate data using the `_` (underscore) identifier.
* This is the only data accessible at this phase. See examples below.
* You're not guaranteed to get shard data back in any particular order.
* For example, if you have data in two shards, the first time you run the query you could get shard 0 first and shard 1 second. The second time you run the query you could get shard 1 first and shard 0 second.

## Returns

- A list of `float64` or `int64` values

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
Return all the data ingested using the `float64` or `int64` type. Let's assume all the data is in a single shard.

#### Query
```
[weather]Apply(
  All(),
  "min_temp,max_temp,rainfall",
  "_"
)
```
#### Tabular Response
#### HTTP Response

```json
{
  "results": [
    {
      "F": {
        "float": [
          0
          3.6,
          0
          2.9,
          24.3,
          26.9,
          23.4,
          15.5,
          8,
          14,
          13.7,
          13.3
        ]
      }
    }
  ]
}
```
#### Explanation:
`All()` returns every record in the index. The map function says, return the data for these three fields unprocessed. Similarly, the reduce function says, pass all the data from the map phase through unprocessed. It's important to note here that the data is coming back conceptually as lists of fields rather than lists of records.


### Example 2
Return all the data ingested using the `float64` or `int64` data types. Assume records `0` and `1` are on the same shard and record `2` and `3` are on on the same shard.

#### Query
```
[weather]Apply(
  All(),
  "min_temp,max_temp,rainfall",
  "_"
)
```
#### Tabular Response
#### HTTP Response
```json
{
  "results": [
    {
      "F": {
        "float": [
          0,
          3.6,
          24.3,
          26.9,
          8,
          14,
          0,
          2.9,
          23.4,
          15.5,
          13.7,
          13.3
        ]
      }
    }
  ]
}
```
#### Explanation:
`All()` returns every record in the index. The map function says, return the data for these three fields unprocessed. Similarly, the reduce function says, pass all the data from the map phase through unprocessed. Again, the data is coming back conceptually as lists of columns rather than lists of records. Dissimilar to above, you can see that we get a list **per** shard. The first six values correspond to records `0` and `1`. The next six values correspond to records `2` and `3`.

### Example 3
Return all the data ingested using the `float64` or `int64` data types. This time we'll assume at least two record are on the same shard. We want to return a list of records to the reduce phase this time.

#### Query
```
[weather]Apply(
  All(),
  "x = min_temp,max_temp,rainfall # select these three columns
   r = 3 4 rho x # reshape list of columns to 3 x 4 array   
   t = transp r # transpose array
   (rho x) rho t # flatten the results to get list of records",
  "_"
)
```
#### Tabular Response
#### HTTP Response
```json
{
  "results": [
    {
      "F": {
        "float": [
          2.9,
          15.5,
          13.3,
          0,
          24.3,
          8,
          0,
          23.4,
          13.7,
          3.6,
          26.9,
          14
        ]
      }
    }
  ]
}
```
#### Explanation:
Again, `All()` returns every record in the index. Here the map phase is turning lists of columns to list of records. For example, the first three values correspond to the `rainfall`, `max_temp`, and `min_temp` for record `3`. The second three values are the `rainfall`, `max_temp`, and `min_temp` for record 0. And so on.

As mentionded above, we cannot make assumptions on the order of these 3-tuples. Meaning, record `0` could be the first tuple but it might not be. However, we can assume that the first element in each tuple is associated with `rainfall`, the second is associated with `max_temp`, and so on.

---

#### Example 4

Compute the euclidean distance between record `0` and record `1`.

#### Query

```
Apply(
  ConstRow(columns=["0","1"]),
  "x = min_temp,max_temp,rainfall
   t = transp 3 2 rho x
   (rho x) rho t",
  "x = _
   y = 2 3 rho x # reshape data to 2 x 3 array
   sqrt +/ (y[1] - y[2]) ** 2 # square root the sum of squares"
)
```

#### Tabular Response
#### HTTP Response
```json
{'results': [{'F': {'float': [7.464583042608608]}}]}
```

#### Explanation
The filter here limits the records to `0` and `1`. Similar to the example above, the map phase turns list of field values to a list of records. The reduce phase reshapes the data and the computes the euclidean distance between the two vectors in Ivy!
