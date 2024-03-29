---
title: PQL COUNT()
layout: default
parent: PQL Read
grand_parent: PQL guide
---

# PQL COUNT()

The `Count()` query returns the number of record IDs / keys returned by a [row call](/docs/pql-guide/pql-read-home#row-calls). Note that this includes the [Distinct()](/docs/pql-guide/pql-read-distinct) call -- see the example below.

## Call Definition

```
Count(ROW_CALL)
```

#### Mandatory Arguments
- `ROW_CALL` : the [row call](/docs/pql-guide/pql-read-home#row-calls) to be counted

#### Optional Arguments
#### Returns

- a single unsigned integer that is the count of record IDs / keys returned by `ROW_CALL`

## Examples

### Data:

```
Index: customer (non keyed)

 _id | age (Int) | has_purchased (Set) | last_purchase (Timestamp)
-----+-----------+---------------------+--------------------------
 0   | 23        | ["brand1","brand2"] | 2021-01-05T08:30:00Z
 1   | 31        | ["brand1","brand3"] | 2020-09-12T12:30:00Z
 2   | 28        | ["brand1","brand3"] | 2021-08-06T16:15:00Z
 3   | 19        | []                  | null
 4   | 25        | ["brand1","brand4"] | 2021-10-01T20:45:00Z
 5   | 40        | ["brand4"]          | 2022-01-13T11:00:00Z
```
-----------------------------------------------------------------------
### Example 1
How many records (customers) do we have in the index?

#### Query
```
[customer]Count(All())
```
#### Tabular Response
```
 count
-------
 6
```
#### HTTP Response
```json
{
  "results": [
    6
  ]
}
```
#### Explanation
[All()](/docs/pql-guide/pql-read-all) returns a list of all the record IDs in the index. There are six records so `Count()` returns 6.

-----------------------------------------------------------------------
### Example 2
How many customers have purchased from brand1?

#### Query
```
[customer]Count(
  Row(has_purchased = brand1)
)
```
#### Tabular Response
```
 count
-------
 4
```
#### HTTP Response
```json
{
  "results": [
    4
  ]
}
```

#### Explanation
`Row(has_purchased = brand1)` returns `[0,1,2,4]`. There are four records so `Count()` returns 4.

-----------------------------------------------------------------------
### Example 3
How many distinct brands have been purchased from?

#### Query
```
[customer]Count(
  Distinct(field=has_purchased)
)
```
#### Tabular Response
```
 count
-------
 4
```
#### HTTP Response
```json
{
  "results": [
    4
  ]
}
```

#### Explanation
`Distinct(field=has_purchased)` returns brand1, brand2, brand3, and brand4. Since there are four values we get a count of 4 returned.
