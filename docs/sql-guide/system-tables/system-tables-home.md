---
title: FeatureBase system tables
layout: default
parent: SQL guide
nav_order: 30
---

# Reference: FeatureBase system tables
{: .no_toc }

At a high-level, FeatureBase system tables:
* describe database configuration, settings and metrics
* are logical and in-memory tables, dynamically created on database creation

The only exception is `fb_views` which is automatically created when a user runs the [`CREATE VIEW` statement](/docs/sql-guide/statements/statement-view-create)

{% include page-toc.md %}

## System Database tables

| System table | Description | Additional information |
|---|---|---|
| `fb_views` | Contains a catalog of existing views in the database | Created when one or more views are created |
| `fb_database_info` | Contains properties and state of each database in the system | One database per row |
| `fb_database_nodes` | Lists database nodes |  |
| `fb_performance_counters` | Contains metrics on database nodes and database workers |

## System DDL tables

| System table | Description | Additional information |
|---|---|---|
| `fb_table_ddl` | Contains DDL (Data Definition Language) to recreate user tables in the existing database | INSERT statements are not included |

## Query tables

| System table | Description | Additional information |
|---|---|---|
| `fb_exec_requests` | Contains a log of SQL queries executed (and executing) by database node | [fb_exec_requests additional](#fb-exec-requests-additional) |
|

## Additional information

### fb_exec_requests additional
* `fb_exec_requests` keeps only the latest 2000 records (queries)
* `fb_exec_requests.sql` and `fb_exec_requexts.plan` are limited to 4000 characters.

{% include /sql-guide/query-status.md %}
