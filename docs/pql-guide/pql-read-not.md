---
title: PQL NOT()
layout: default
parent: PQL Read
grand_parent: PQL guide
---

# PQL NOT()

The `Not()` query returns the record IDs/keys that are contained in `All()` but not some [row call](/docs/pql-guide/pql-read-home#row-calls) -- i.e the set difference between `All()` and a [row call](/docs/pql-guide/pql-read-home#row-calls).

`Not()` is a [row call](/docs/pql-guide/pql-read-home#row-calls).

## Call Definition

```
Not(ROW_CALL)
```

#### Mandatory Arguments
 - `ROW_CALL` : the [row call](/docs/pql-guide/pql-read-home#row-calls) to difference with `All()`

#### Optional Arguments

#### Returns
- list of record IDs or record keys

## Examples

### Data:
```
Index: customer (non keyed index)

 _id | age (Int) | has_purchased (Set) | last_purchase (Timestamp)
-----+-----------+---------------------+---------------------------
 0   |    23     | ["brand1","brand2"] | 2021-01-05T08:30:00Z
 1   |    31     | ["brand1","brand3"] | 2020-09-12T12:30:00Z
 2   |    28     | ["brand1","brand3"] | 2021-08-06T16:15:00Z
 3   |    19     | []                  | null
 4   |    25     | ["brand1","brand4"] | 2021-10-01T20:45:00Z
 5   |    40     | ["brand4"]          | 2022-01-13T11:00:00Z
```

### Example 1
What customers have not purchased from brand 1?

#### Query
```
[customer]Not(Row(has_purchased=brand1))
```
#### Tabular Response
```
 _id
-----
 3
 5
```
#### HTTP Response
```json
{
  "results": [
    {
      "columns": [
        3,
        5
      ]
    }
  ]
}
```
#### Explanation
The Row() call returns [0,1,2,4]. All() would return [0,1,2,3,4,5]. [3,5] are the records that are in All() but not in Row(has_purchased=brand1)
