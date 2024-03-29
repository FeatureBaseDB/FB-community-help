---
title: PQL UNION()
layout: default
parent: PQL Read
grand_parent: PQL guide
---

# PQL UNION()

`Union()` takes one or more arguments -- each a [row call](/docs/pql-guide/pql-read-home#row-calls) -- and unions them. You can think of `Union()` as **OR** in set theory. It returns the set of record IDs / keys that is in the first set of record IDs / keys OR is in the second set of record IDs / keys OR so on and so forth.

`Union()` is a [row call](/docs/pql-guide/pql-read-home#row-calls).

## Call Definition

```
Union(ROW_CALL, ... )
```

#### Mandatory Arguments
- `ROW_CALL` : the output of any [row call](/docs/pql-guide/pql-read-home#row-calls) (set of record IDs / keys)

#### Optional Arguments
- `...` : Any number of additional [row call](/docs/pql-guide/pql-read-home#row-calls) separated by commas

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
-------
### Example 1
What is the set of customers / records who's age is over 35 or who have made a purchase prior to 2021?

#### Query
```
[customer]Union(
  Row(age > 35),
  Row(last_purchase < '2021-01-01T00:00:00Z')
)
```
#### Tabular Response
```
 _id
-----
 1
 5
```
#### HTTP Response
```json
{
  "results": [
    {
      "columns": [
        1,
        5
      ]
    }
  ]
}
```
#### Explanation
`Row(age > 35)` returns `[5]` and `Row(last_purchase < '2021-01-01T00:00:00Z')` returns `[1]`. `Union()` does a set union on these two sets which is `[1,5]`.

### Example 2
What is the set of customers / records who's age is over 30, has purchased from brand1, or has purchased from brand3?

```
[customer]Union(
  Row(has_purchased = brand1),
  Row(has_purchased = brand2),
  Row(has_purchased = brand3)
)
```
#### Tabular Response
```
 _id
-----
 0
 1
 2
 4
```

#### HTTP Response
```json
"results": [
    {
       "columns": [
         0,
         1,
         2,
         5
       ]
    }
]
```

#### Explanation
`Row(has_purchased = brand1)` returns `[0,1,2,5]`, `Row(has_purchased = brand2)` returns `[0]`, and `Row(has_purchased = brand3)` returns `[1,2]`.  `Union()` does a set union of these three sets which is `[0,1,2,5]`.
