---
title: KILL QUERY
layout: default
parent: Statements
grand_parent: SQL guide
nav_order: 30
---

## KILL QUERY statement

Kills a running SQL query. If the targeted query is not in running status then the kill statement will not be successful.

## BNF diagrams

![expr](/assets/images/sql-guide/kill_query_stmt.svg)

## Syntax

```sql
KILL QUERY 'request_id';
```

## Arguments

| Argument | Description | Required? | Additional information |
|---|---|---|
| `request_id` | Request ID of the query to be killed. Value must be enclosed in single quote. | Yes | [List running queries](#list-currently-running-queries)

## Additional information

### List currently running queries

Query the `fb_exec_requests` system table to obtain the `request_id`:

```sql
SELECT request_id, status, start_time, sql
FROM fb_exec_requests
WHERE status='running';
```

{% include /sql-guide/query-status.md %}

### Responses to killed queries

* A killed query is set to `cancelled` in the `fb_exec_requests` system table
* An error is returned on any client application that submitted the query that is killed, for example:

```
Error: [0:0] request '571f25ac-1d8c-49b8-a53d-111408964632' killed by user
```

## Examples

### Kill a query to terminate unnecessary processing

Query the `fb_exec_requests` system table to obtain a list of running queries:

```sql
select request_id, status, start_time, sql
from fb_exec_requests
where status='running';
```

Results:


| request_id | status | start_time | sql |
|---|---|---|---|
| 571f25ac-1d8c-49b8-a53d-111408964632 | running | 2023-05-12T16:13:39.342617-04:00 | select high_card_attribute, sum(measurement)<br/>from large_data_set<br/>where status='active'<br/>group by high_card_attribute |
| 11b511a7-efcf-44f3-8fdc-3eb864873b48 | running | 2023-05-12T16:20:08.560989-04:00 | select request_id, status, start_time, sql<br/>from fb_exec_requests<br/>where status='running' |

This statement kills the first query from above:

```sql
KILL QUERY '571f25ac-1d8c-49b8-a53d-111408964632';
```

Output:

| result | status |
|---|---|
| Kill request submitted | pending |

## Further information

* [System tables](/docs/sql-guide/system-tables/system-tables-home)
