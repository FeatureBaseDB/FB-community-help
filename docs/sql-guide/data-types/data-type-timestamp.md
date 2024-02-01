---
title: TIMESTAMP
layout: default
parent: Data types & constraints
grand_parent: SQL guide
nav_order: 10
---

# TIMESTAMP data type

Timestamp is a date-time data type which represents the specified `timeunit` as integer values elapsed since the specified Unix Epoch.

## Before you begin
* [Learn about unix epoch/unix time](https://en.wikipedia.org/wiki/Unix_time){:target="_blank"}

## Syntax

```
TIMESTAMP [TIMEUNIT {value}]
```

## Arguments

| Argument | Description | Additional information |
|---|---|---|
| TIMESTAMP | Time and date data type used for time series analysis | [Time stamp](https://en.wikipedia.org/wiki/Timestamp) |
| TIMEUNIT | The time unit in which to store a timestamp that defaults to second `s` | See [TIMEUNIT values](#timeunit-value) |

## Additional information

### TIMEUNIT value

{% include /sql-guide/timestamp-timeunit-table.md %}

## Examples

### Implicitly convert integer to timestamp

Integer values inserted into a column with `timestamp` data type are converted to a value of seconds since the beginning of the unix epoch.

#### Demo table

```sql
create table demo
    (_id id, ts timestamp timeunit 's');

insert into demo(_id, ts)
    values (1, 0);
insert into demo(_id, ts)
    values (2, 86400);
insert into demo(_id, ts)
    values (3, 90061);
insert into demo(_id, ts)
    values (4, -86400);
```

#### SELECT() statement

```sql
select _id, ts from demo;
```

#### Results

```
| _id |           ts                  |
|-----|-------------------------------|
| 1   | 1970-01-01 00:00:00 +0000 UTC |
| 2   | 1970-01-02 00:00:00 +0000 UTC |
| 3   | 1970-01-02 01:01:01 +0000 UTC |
| 4   | 1969-12-31 00:00:00 +0000 UTC |
```
