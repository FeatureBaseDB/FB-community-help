---
title: Query your database
layout: default
parent: Python client library
grand_parent: Tools
nav_order: 4
---

# How do I use FeatureBase Python classes to run SQL?

SQL queries can be run on your FeatureBase database as:
* individual commands
* a sequential batch
* an asynchronous batch

Query results can be returned using the Python `print()` command.

## Before you begin

* [Install FeatureBase Python client library](/docs/tools/python-client-library/python-client-install)
{% include /python-lib/python-lib-connect-db-links.md %}
* [FeatureBase SQL guide](/docs/sql-guide/sql-guide-home)

{: .note}
Escape double-quotes in SQL queries using [Python escape characters](https://www.w3schools.com/python/gloss_python_escape_characters.asp){:target="_blank"}

## Syntax

```py
# Single query
result=client.query(sql="<sql-query>")

# Batch queries
sqllist=[]
sqllist.append("<sql-query")  # one or more SQL queries on separate lines
results = client.querybatch(sqllist, <run-flag>)

# Output flags

# result.data
# result.error
# result.execution_time
# result.ok
# result.rows_affected
# result.schema
# result.warnings
```

## Single query keywords

| Keywords | Description | Required | Additional information |
|---|---|---|---|
| `result=client.query(sql="<sql-query>")` | Run a single SQL query against the connected database | Yes |  |
| `<sql-query>` | Double-quoted SQL query | Yes | [FeatureBase SQL guide](/docs/sql-guide/sql-guide-home) |

## Batched query keywords

| Keyword | Description | Required | Additional information |
|---|---|---|---|
| `sqllist[]` | Start of query list to be called by `querybatch` function | Yes |  |
| `sqllist.append("<sql-query>")` | Structure for individual SQL queries in the list | Yes |  |
| `result=client.querybatch(sqllist,<run-flag>)` | Call `sqllist[]` list of individual queries and modify execution with optional `<run-flag>` | Yes |  |
| `asynchronous=True`| Run flag that concurrently runs SQL statements | Optional | Defaults to `false` |
| `stoponerror=True` | Run flag that stops `sqllist[]` execution if a SQL error occurs. | Optional | Ignored when `asynchronous=True` |

## Output flags

Output flags can:
* output results using [Python `print()` function](https://realpython.com/python-print/){:target="_blank"}
* be used with the Python `if-then` function

| Keywords | Description |
|---|---|
| `result.data` | Data rows returned by the connected database |
| `result.error` | Output execution errors from the connected database |
| `result.execution_time` | Output time taken to execute the queries |
| `result.ok` | Returns True or False depending on query execution status |
| `result.rows_affected` | Output number of rows created, updated or deleted |
| `result.schema` | Returns schema definition for tables in schema |
| `result.warnings` | Output server warnings from the connected database |

## Examples

* [Python Client library examples](/docs/tools/python-client-library/python-client-example)
