---
title: Query databases
layout: default
parent: Community
has_children: true
nav_order: 9
---

# How do I query my FeatureBase Community database?

FeatureBase community provides several methods to run queries using FeatureBase PQL, or our implementation of SQL.

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [PQL guide](/docs/pql-guide/pql-home)
* [SQL guide](/docs/sql-guide/sql-guide-home)

## Running queries

You can run SQL Queries against your FeatureBase Community database using the following methods:

{% include /community/com-sql-query-run.md %}

## FeatureBase Query editor

Use the Query editor to run PQL and SQL queries against your database indexes.

You can view a list of:

* available indexes
* queries you've run
* execution errors

{: .important}
The query editor does not support multi-line statements even when separated by semicolon or blank lines.

## FeatureBase Query builder

The FeatureBase Query builder is a drag-and-drop UI which supports the following PQL `read` queries:

* [Extract](/docs/pql-guide/pql-read-extract)
* [Count](/docs/pql-guide/pql-read-count)
* [GROUPBY](/docs/pql-guide/pql-read-groupby)

## Examples

### PQL query

```
[users]Extract(Limit(All(), limit=1000), Rows(created_at), Rows(salary))
```
