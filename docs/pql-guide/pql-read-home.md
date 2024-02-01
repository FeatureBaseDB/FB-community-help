---
title: PQL Read
layout: default
parent: PQL guide
has_children: true
nav_order: 1
has_toc: false
---

# PQL Read operations

Read operations can be grouped into several types.

## Row calls

Row calls return an object representing a set of column keys, contained in a single row. Row calls may be used as input arguments to other queries.

### Row selection

* [All()](/docs/pql-guide/pql-read-all)
* [ConstRow()](/docs/pql-guide/pql-read-constrow) provides a "literal" bitmap value -* i.e. it returns the record IDs or record keys specified by the user.
* [Row()](/docs/pql-guide/pql-read-row) selects from a single set row, by row key -* i.e. it returns the record IDs or record keys that have a specified value in a specified field.
* [Limit()](/docs/pql-guide/pql-read-limit) is also a row call by return type. It wraps other row calls to select a subset of results, in a pagination sense.

### Boolean operations

* [Difference()](/docs/pql-guide/pql-read-difference) computes the set difference between its first argument and all subsequent arguments (all row calls).
* [Intersect()](/docs/pql-guide/pql-read-intersect) computes the set intersection across its two or more [row call](#row-calls) arguments.
* [Not()](/docs/pql-guide/pql-read-not) computes the complement of the single row call argument, relative to the *universal set* for the index -* i.e. it returns the difference between `All()` and some other [row call](#row-calls).
* [Union()](/docs/pql-guide/pql-read-union) computes the set union across its one or more [row call](#row-calls) arguments.
* [UnionRows()](/docs/pql-guide/pql-read-unionrows) computes the set union across many rows. Rather than accepting several row call arguments, `UnionRows()` accepts any number of `Rows` arguments.
* [Xor()](/docs/pql-guide/pql-read-xor) computes the exclusive set difference between its first argument and all subsequent arguments (all [row calls](/docs/pql-guide/pql-read-home#row-calls).

## Distinct

[Distinct](/docs/pql-guide/pql-read-distinct) is a special row-like call, in that it can be used in the same context that other row calls can be used, despite a slight variation in its output type.

## Rows Calls

Rows calls return an object representing a set of row keys, contained in a single column. Rows calls may be used as input arguments to other queries.

* [Rows](/docs/pql-guide/pql-read-rows) returns a list of row IDs in the given field which have at least one bit set -* i.e. it returns a list of value in a field for all values associated with a record.

## Membership Calls

Membership calls return a boolean value indicating set membership.

Membership calls include:
* [IncludesColumn](/docs/pql-guide/pql-read-includescolumn) indicates whether a given record ID or record key is present in a given [row call](#row-calls).

## Count Calls

Count calls return counts of the number of elements in *groups of sets*. Count calls are often the top-level call in a query.

Count calls include:
* [Count](/docs/pql-guide/pql-read-count) computes the scalar count of elements contained in its single [row call](#row-calls) argument.
* [GroupBy](/docs/pql-guide/pql-read-groupby) computes counts of the intersection of every combination of its [rows call](#rows-calls) arguments. GroupBy provides much of the basic grouping functionality that is available in a relational database.
* [TopK](/docs/pql-guide/pql-read-topk) computes the count of the top `K` rows in a field, with fewer caveats.
* [TopN](/docs/pql-guide/pql-read-topn) computes the count of the top `N` rows in a field, with some caveats.

## Aggregation Calls

Aggregation calls perform other aggregation operations on *individual sets*.

* [Max](/docs/pql-guide/pql-read-max) computes the maximum integer value or timestamp value in a field, from a single [row call](#row-calls) argument.
* [Min](/docs/pql-guide/pql-read-min) computes the minimum integer value or timestamp value in a field, from a single [row call](#row-calls) argument.
* [Percentile](/docs/pql-guide/pql-read-percentile) computes the percentile of integer values in a field, from a single [row call](#row-calls) argument.
* [Sum](/docs/pql-guide/pql-read-sum) computes the sum of integer values in a field, from a single [row call](#row-calls) argument.

## Exploratory Calls

Exploratory calls are used to drill down into a data set.

* [Extract](/docs/pql-guide/pql-read-extract) is analogous to a general `select` query in a relational database, returning a subset of both rows and columns.

## DataFrame Calls

* [Apply](/docs/pql-guide/pql-read-apply) executes Ivy code against data stored using the `float64` and / or `int64` data type.
* [Arrow](/docs/pql-guide/pql-read-arrow) is analogous to `Extract()` and a `SELECT <columns> FROM <table> WHERE <condition>` query in SQL. Executes on data stored using the `float64` and / or `int64` data type.
