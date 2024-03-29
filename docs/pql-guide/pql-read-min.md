---
title: PQL MIN()
layout: default
parent: PQL Read
grand_parent: PQL guide
---

# PQL MIN()

The `Min()` query finds the minimum value in an Int, Decimal, or Timestamp field in some subset of records (defined by a [row call](/docs/pql-guide/pql-read-home#row-calls)).

## Call Definition
```
Min(ROW_CALL, field=FIELD)
```

#### Mandatory Arguments
 - `field` / `FIELD` : the name of the field to get the minimum value in. This should be an Int, Decimal, or Timestamp field.

#### Optional Arguments
 - `ROW_CALL` : the [row call](/docs/pql-guide/pql-read-home#row-calls) used to filter records to get the min over.

#### Returns
- the min value in a field and the count of records that have that value

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
What is the age of the youngest customer?

#### Query
```
[customer]Min(field=age)
```
#### Tabular Response
```
 value | count
-------+-------
 19    | 1
```
#### HTTP Response
```json
{
  "results": [
    {
      "value": 19,
      "floatValue": 0,
      "decimalValue": null,
      "timestampValue": "0001-01-01T00:00:00Z",
      "count": 1
    }
  ]
}
```
#### Explanation
The minimum value in the age field is 19.


### Example 2
What is the age of the youngest person to purchase from brand 3?

#### Query
```
[customer]Min(Row(has_purchased=brand3), field=age)
```
#### Tabular Response
```
 value | count
-------+-------
 28    | 1
```

#### HTTP Response
```json
{
  "results": [
    {
      "value": 28,
      "floatValue": 0,
      "decimalValue": null,
      "timestampValue": "0001-01-01T00:00:00Z",
      "count": 1
    }
  ]
}
```

#### Explanation
The row call returns [1,2]. The youngest customers is 2 - their age is 31.
