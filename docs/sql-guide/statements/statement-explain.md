---
title: EXPLAIN execution
layout: default
parent: Statements
grand_parent: SQL guide
nav_order: 13
---

# EXPLAIN execution statement
{: .no_toc }

Prefix any valid SQL query with `EXPLAIN` to output an execution plan for the statement that follows.

## Before you begin


{% include page-toc.md %}

## Syntax

```
EXPLAIN <statement>;
```

## Arguments

| Argument | Description | Required? | Additional information |
|---|---|---|---|
| `EXPLAIN` | Generate an execution plan for the `<statement>` that follows | Yes | Execution plan can be downloaded as CSV |

## Example

```sql
EXPLAIN CREATE TABLE doctest (_id ID, stringcol STRING);

                         plan                                                |
-----------------------------------------------------------------------------+
plan
"{
    ""_op"": ""*planner.PlanOpQuery"",
    ""_schema"": [],
    ""child"": {
        ""_op"": ""*planner.PlanOpCreateTable"",
        ""ifNotExists"": false,
        ""tableName"": ""doctest""
    },
    ""sql"": ""EXPLAIN CREATE TABLE doctest (_id ID, stringcol STRING);"",
    ""warnings"": []
}"
```
