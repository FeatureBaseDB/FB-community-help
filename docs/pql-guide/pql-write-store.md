---
title: PQL STORE()
layout: default
parent: PQL Write
grand_parent: PQL guide

---

# PQL STORE()

The `Store()` call can be used populate values in a Set field based on the results of a [row call](/docs/pql-guide/pql-read-home#row-calls). This can be seen as a way of caching [row call](/docs/pql-guide/pql-read-home#row-calls).

## Call Definition
```
Store(ROW_CALL, FIELD=FIELD_VALUE)
```

#### Mandatory Arguments
- `ROW_CALL` : a [rows call](/docs/pql-guide/pql-read-home#rows-call) used to determine which records to write to -- i.e. the record IDs/keys returned in this row call will have `FIELD_VALUE` in `FIELD`. Records that aren't return by this row call will no longer have FIELD\_VALUE in FIELD if they did previously.
- `FIELD` : the Set field we are writing to. If the field doesn't exist, it will be created as a Set field with `cache type` set to `none`.
- `FIELD_VALUE` : the value we are going to write -- i.e. records returned by ROW\_CALL will have this value in the field named FIELD.

#### Optional Arguments

#### Returns
- a boolean: true if the operation was successful, false otherwise.

## Examples

### Example 1
Create a field that caches customers that are between the age of 20 and 30 and have purchased from brand1.

#### Data Pre-Query
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
#### Query
```
[customer]Store(
  Intersect(
    Row(has_purchased=brand1),
    Row(20 < age < 30)
  ),
  brand1_20_30=1
)    
```
#### Tabular Response
```
 result
--------
 true
```
#### Data Post-Query
```
 _id | age | brand1_20_30 |    has_purchased    |    last_purchase
-----+-----+--------------+---------------------+----------------------
 0   | 23  | [1]          | ["brand1","brand2"] | 2021-01-05T08:30:00Z
 1   | 31  | []           | ["brand1","brand3"] | 2020-09-12T12:30:00Z
 2   | 28  | [1]          | ["brand1","brand3"] | 2021-08-06T16:15:00Z
 3   | 19  | []           | []                  | null
 4   | 25  | [1]          | ["brand1","brand4"] | 2021-10-01T20:45:00Z
 5   | 40  | []           | ["brand4"]          | 2022-01-13T11:00:00Z
```

#### Explanation
```
[customer]Intersect(
  Row(has_purchased=brand1),
  Row(age <  30)
)
```
Returns:
```
 _id
-----
 0
 2
 4
```
Store set the value in the field "brand1_20_30" to 1 for those records. Then the query above becomes simpler - we can get customers between 20 and 30 years old who have purchased from brand1 by running:
```
[customer]Row(brand1_20_30=1)
```

## Additional Considerations

**Detailed Example:**
```pql
Store(
    Intersect(
        Not(Row(bools="has_season_pass")),
        Row(bools="all_fans"))
    ),
    ticket_buyers=1
)
```

Note: if `ticket_buyers` does not exist before `Store` is called, it will be created automatically and set to:

```json
 "cacheType": "none"
```

This will prevent unnecessary overhead in Molecula, calculating TopN caches, etc.

**Example Application:**

Original Query:

```pql
Intersect(
    Row(age_range="18-24"),
    Row(education="college"),
    Row(zip_code="78750"),
    Not(Row(bools="has_season_pass")),
    Row(bools="all_fans")
)
Intersect(
    Row(age_range="25-34"),
    Row(education="college"),
    Row(zip_code="78750"),
    Not(Row(bools="has_season_pass")),
    Row(bools="all_fans")
)
[...]
```

Because this series of `Intersect` queries has a common subquery, it can be separated and cached:

```pql
Store(
    Intersect(
        Not(Row(bools="has_season_pass")),
        Row(bools="all_fans")
    ),
    ticket_buyers=1
)
```

The final query:

```pql
Intersect(
    Row(age_range="18-24"),
    Row(education="college"),
    Row(zip_code="78750"),
    Row(ticket_buyers=1)
)
Intersect(
    Row(age_range="25-34"),
    Row(education="college"),
    Row(zip_code="78750"),
    Row(ticket_buyers=1)
)
```

This can significantly improve performance for larger batches of queries.

`Store` results can be used within other `Store` calls. For instance, having created a row representing "all fans without season passes", a successive `Store` call can be used to create a list of fans without season passes, and with a specific age range and education level:

```pql
Store(
    Intersect(
        ticket_buyers=1,
        Row(age_range="18-24"),
        Row(education="college"),
        ticket_buyers=2
    )
)
```

Then this row of the `ticket_buyers` field could be used for queries against that particular age_range/education combination, replacing four reads and three intersection computations with a single read in all the following queries.

It is safe to read from and write to the same row in a single `Store` call. For example, `Store(Union(Row(scratch=0),Row(newData=1)), scratch=0)` will perform a union including the `scratch=0` row, and then write the result to that same row.
