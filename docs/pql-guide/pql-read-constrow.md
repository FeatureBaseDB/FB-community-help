---
title: PQL CONSTROW()
layout: default
parent: PQL Read
grand_parent: PQL guide
---

# PQL CONSTROW()

The `ConstRow()` query returns a set of record IDs / keys defined explicitly by the columns argument (list of record IDs / keys). This can be useful if you have a predetermined set of records you want to use as the argument of another call -- see the last example below. `ConstRow()` is a [row call](/docs/pql-guide/pql-read-home#row-calls).

## Call Definition:

```pql
 ConstRow(columns = [LIST_OF_RECORD_IDS])
```
#### Mandatory Arguments
 - `columns` : the list of record IDs or record keys to return. `LIST_OF_RECORD_IDS` must be record IDs or record keys in comma seperated list -- e.g. 0, 5, 20.

#### Optional Arguments
#### Returns
- list of record IDs / keys

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

Index: customer_keyed (keyed index)

 _id | age (Int) | has_purchased (Set) | last_purchase (Timestamp)
-----+-----------+---------------------+---------------------------
 a   |    23     | ["brand1","brand2"] | 2021-01-05T08:30:00Z
 b   |    31     | ["brand1","brand3"] | 2020-09-12T12:30:00Z
 c   |    28     | ["brand1","brand3"] | 2021-08-06T16:15:00Z
 d   |    19     | []                  | null
 e   |    25     | ["brand1","brand4"] | 2021-10-01T20:45:00Z
 f   |    40     | ["brand4"]          | 2022-01-13T11:00:00Z
```
-----------------------------------------------------------------------
### Example 1:
Return record IDs 0 and 1 -- non-keyed index.

#### Query
```
[customer]ConstRow(columns = [0,1])
```
#### Tabular Response
```
 _id
-----
 0
 1
```
#### HTTP Response
```json
{
  "results": [
    {
      "columns": [
        0,
        1
      ]
    }
  ]
}
```
#### Explanation:
Result with the record IDs asked for -- 0 and 1.

-----------------------------------------------------------------------

### Example 2:
Return record keys a and b -- non keyed index.

#### Query
```
[customer_keyed]ConstRow(columns = [a,b])
```
#### Tabular Response
```
 _id
-----
 a
 b
```
#### HTTP Response
```json
{
  "results": [
    {
      "columns": [],
      "keys": [
        "a",
        "b"
      ]
    }
  ]
}
```
#### Explanation:
Result with the record keys asked for - a and b.

-------------------------------------------------------------------------
### Example 3
Select / extract the age and has_purchased events for the record with ID 0 or 1

```
[customer]Extract(
  ConstRow(columns = [0,1]),
  Rows(age),
  Rows(has_purchased)
)
```
#### Tabular Response
```
 _id | age |    has_purchased
-----+-----+---------------------
 0   | 23  | ["brand1","brand2"]
 1   | 31  | ["brand1","brand3"]
```

#### HTTP Response
```json
{
  "results": [
    {
      "fields": [
        {
          "name": "age",
          "type": "int64"
        },
        {
          "name": "has_purchased",
          "type": "[]string"
        }
      ],
      "columns": [
        {
          "column": 0,
          "rows": [
            23,
            [
              "brand1",
              "brand2"
            ]
          ]
        },
        {
          "column": 1,
          "rows": [
            31,
            [
              "brand1",
              "brand3"
            ]
          ]
        }
      ]
    }
  ]
}
```

#### Explanation:
The first argument of `Extract()` is a row call - this tells `Extract()` what records you want values for. Here we use `ConstRow()` (as opposed to another [row call](/docs/pql-guide/pql-read-home#row-calls)) to tell `Extract()` the specific records to use. `Rows(age)` and `Rows(has_purchased)` tell `Extract()` we like to return the data in the `age` and `has_purchased` field. View [Extract()](/docs/pql-guide/pql-read-extract) for more on `Extract()`.
