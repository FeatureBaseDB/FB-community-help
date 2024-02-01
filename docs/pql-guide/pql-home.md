---
title: PQL guide
layout: default
has_children: true
nav_order: 5
has_toc: false
---

# FeatureBase PQL guide
{: .no_toc }

Pilosa Query Language (PQL) is FeatureBase's native query language.

{% include page-toc.md %}

## About PQL

Like SQL, PQL is a declarative, set-based language. Unlike SQL, PQL expressions are built by composing function calls, using the familiar parentheses call syntax. With this function-compositional syntax, PQL functions operate on bitmaps as the atomic elements of the data store, expressing boolean operations of arbitrary complexity. PQL also provides a number of functions outside of this paradigm, which implement common data tasks like aggregation.

## PQL calls

Many PQL calls return or accept objects representing rows ([row calls](/docs/pql-guide/pql-read-home#row-calls{:target="_blank"}) or columns ([rows calls](#rows-calls){:target="_blank"}), and understanding these types is key to composing the various types of PQL call to build a query.

For example, the [row call](/docs/pql-guide/pql-read-home#row-calls) is the basic query type for reading bitmaps and performing boolean operations on them. The input type signatures of row calls vary, but they always return an object representing a set contained in a single row (i.e. a *computed row*, not necessarily a *stored row*), which can be passed as an argument to other queries.

For a simple example, consider this diagram:

![PQL diagram](/assets/images/pql-guide/pql-diagram.png)

This is a PQL query on a table of users which includes fields for gender, age, location, and interests. It asks a question involving a moderately complex boolean combination of these fields. Note that each annotated component within the `Count` is a separate [row call](/docs/pql-guide/pql-read-home#row-calls), representing a set of users; each of these could be a standalone query, or passed to a `Count` call, for example. `Count` accepts a single row call, regardless of its structure, and returns a scalar value.

While other calls may accept different types, this composition of function calls is an important concept for PQL usage.

###  A Note About Terminology

For historical reasons, FeatureBase's concepts of "row" and "column" are not conventional, and may be confusing.

In PQL:

- An *index* is a single "universe" of data, with a shared column space, and a group of related fields. The term *table* may be used interchangeably, as well as the deprecated term *VDS* (Virtual Data Source).
- A *column* represents an instance of the entity of concern for a given table, such as a user or an event. Columns are common to all fields and rows within an index. Because this concept might be referred to as a row in other data stores, to reduce ambiguity, a column may be referred to as a *record*.
- A *row* represents a single, binary characteristic that may be associated with any record. A row maintains a [set](https://en.wikipedia.org/wiki/Set_(mathematics)){:target="_blank"} of bits — a bitmap — indicating which records have a bit [Set](/docs/pql-guide/pql-write-set){:target="_blank"} for its attribute. To reduce ambiguity, a row may be referred to as a field value. Note that this is conceptually different from the use of "column" in other data stores, in that each row stores membership information per value. While this is mainly an implementation detail in normal FeatureBase usage, it can be helpful in understanding the underlying data model.
- A *field* is a grouping of rows, for example, to combine several single rows into a non-boolean categorical value, or an integer value. From a user's perspective, this term aligns well with usage by other data stores.

The names of the *Row Calls* and *Rows Calls* types, as well as calls like `Row` and `Rows` are all based on these definitions.

## Subexpressions

Because of the nested structure of the language, subexpressions in a query are often meaningful queries on their own, and terms like "query", "call", "keyword", and "function" may be used somewhat interchangeably. Here, *query* is used to refer to a conceptually complete, runnable query, and *call* refers to the individual named PQL functions from which queries are composed.

## PQL top level calls

In some contexts, particularly FeatureBase's `/index/{index}/query` HTTP endpoint, a PQL *query request* may consist of any number of disjoint *queries* (also known as top-level calls), optionally separated by whitespace. These queries are executed serially, and their results are returned in order.
