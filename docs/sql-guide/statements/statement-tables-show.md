---
title: SHOW TABLES
layout: default
parent: Statements
grand_parent: SQL guide
nav_order: 7
---

# SHOW TABLES statement

Shows the list of FeatureBase tables that exist on the server.

## BNF diagram

![expr](/assets/images/sql-guide/show_tables.svg)

## Syntax

```sql
SHOW TABLES [WITH SYSTEM];
```

## Arguments

| Argument | Description |
|---|---|
| SHOW TABLES | Return all tables owned by the user |
| WITH SYSTEM | Include FeatureBase system tables in results |

## Returns

| Column Name | Data type | Description | Additional information |
|---|---|---|---|
| `_id` | id or string  | Table ID | [`_id` column](#_id-column) |
| name | string | Name of the table | [naming standards](#naming-standards)
| owner | string | Owner of table (omitted for system-created sample data) |  |
| updated_by | string | Last user to update table |  |
| created_at | timestamp | Table time-date created | [TIMESTAMP() data type](/docs/sql-guide/data-types/data-type-timestamp) |
| updated_at | timestamp | Table time-date last updated | [TIMESTAMP() data type](/docs/sql-guide/data-types/data-type-timestamp) |
| keys | bool | Boolean that is true when keys are used (_id) is a string |  |
| space_used | int | bytes used by the table. |  |
| description | string | description COMMENT of the table |  |

## Additional information

### `_id` column

{% include /cloud-table/cloud-summary-table-pk.md %}

### Naming standards

{% include /concepts/standard-naming-obj.md %}
{% include /cloud-table/cloud-standard-naming-table.md %}
{% include /cloud-table/cloud-standard-naming-col.md %}

## Examples

### Show your tables
```
SHOW TABLES;

Results:

 _id                     | name                    | owner | updated_by | created_at                | updated_at                | keys  |  space_used | description
-------------------------+-------------------------+-------+------------+---------------------------+---------------------------+-------+-------------+------------------------------------
 skills                  | skills                  |       |            | 1969-12-31T18:00:00-06:00 | 1969-12-31T18:00:00-06:00 | true  |    37998707 |

```

### Show your tables and system tables

```
SHOW TABLES WITH SYSTEM;

Results:

 _id                     | name                    | owner | updated_by | created_at                | updated_at                | keys  |  space_used | description
-------------------------+-------------------------+-------+------------+---------------------------+---------------------------+-------+-------------+------------------------------------
 fb_database_info        | fb_database_info        |       |            | 1969-12-31T18:00:00-06:00 | 1969-12-31T18:00:00-06:00 | false |           0 |
 fb_database_nodes       | fb_database_nodes       |       |            | 1969-12-31T18:00:00-06:00 | 1969-12-31T18:00:00-06:00 | false |           0 |
 fb_exec_requests        | fb_exec_requests        |       |            | 1969-12-31T18:00:00-06:00 | 1969-12-31T18:00:00-06:00 | false |           0 |
 fb_performance_counters | fb_performance_counters |       |            | 1969-12-31T18:00:00-06:00 | 1969-12-31T18:00:00-06:00 | false |           0 |
 fb_table_ddl            | fb_table_ddl            |       |            | 1969-12-31T18:00:00-06:00 | 1969-12-31T18:00:00-06:00 | false |           0 |
 fb_views                | fb_views                |       |            | 1969-12-31T18:00:00-06:00 | 1969-12-31T18:00:00-06:00 | true  |     8642560 | system table for views
 skills                  | skills                  |       |            | 1969-12-31T18:00:00-06:00 | 1969-12-31T18:00:00-06:00 | true  |    37998707 |

```
