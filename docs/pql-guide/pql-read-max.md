---
title: PQL MAX()
layout: default
parent: PQL Read
grand_parent: PQL guide
---

# PQL MAX()

The `Max()` query finds the maximum value in an Int, Decimal, or Timestamp field in some subset of records (defined by a [row call](/docs/pql-guide/pql-read-home#row-calls)).

## Call Definition
```
Max(ROW_CALL, field=FIELD)
```

#### Mandatory Arguments
 - `field` / `FIELD`: the name of the field to get the maximum value in. This should be an Int, Decimal, or Timestamp field.

#### Optional Arguments
 - `ROW_CALL` : the [row call](/docs/pql-guide/pql-read-home#row-calls) used to filter records to get the max over.

#### Returns
- the max value in a field and the count of records with that value

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
What is the age of the oldest customer?

#### Query
```
[customer]Max(field=age)
```
#### Tabular Response
```
 value | count
-------+-------
 40    | 1
```
#### HTTP Response
```json
{
  "results": [
    {
      "value": 40,
      "floatValue": 0,
      "decimalValue": null,
      "timestampValue": "0001-01-01T00:00:00Z",
      "count": 1
    }
  ]
}
```
#### Explanation
The max value in the age field is 40


### Example 2
What is the age of the oldest person to purchase from brand 1?

#### Query
```
[customer]Max(Row(has_purchased=brand1), field=age)
```
#### Tabular Response
```
 value | count
-------+-------
 31    | 1
```

#### HTTP Response
```json
{
  "results": [
    {
      "value": 31,
      "floatValue": 0,
      "decimalValue": null,
      "timestampValue": "0001-01-01T00:00:00Z",
      "count": 1
    }
  ]
}
```

#### Explanation
The row call returns [0,1,2,4]. The oldest customers is 1 - their age is 31.
