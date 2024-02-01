---
title: DATE_TRUNC()
layout: default
parent: Functions
grand_parent: SQL guide
---

# DATE_TRUNC() function

The `DATE_TRUNC()` function truncates a given timestamp to a specified precision.

## Syntax

```
DATE_TRUNC(timeunit, date-time)
```

## Arguments

| Argument | Data type | Description | Required | Additional information |
|---|---|---|---|---|
| timeunit | string | String value that specifies the time unit for the duration to be added to the target date-time. | Yes | [Time units](#timeunit).|
| date-time | timestamp | The target date-time specified as literal or expression the time duration is added to. | Yes | |


## Returns

| Data type | Value |
|---|---|
| string | Truncated date and time |

## Additional information

### timeunit

{% include /sql-guide/datetimeadd-function-timeunit-table.md %}

## Examples

### Display year and month only

```sql
create table demo
    (_id id, ts timestamp timeunit 's');

insert into demo(_id, ts)
    values (1, '1970-01-01T00:00:00Z');

select _id, date_trunc('m',ts) from demo;

 _id | ts                           
-----+----------
   1 | 1970-01
```

### Display date, and time with hours and minutes but not seconds

```sql
create table demo
    (_id id, ts timestamp timeunit 's');

insert into demo(_id, ts)
    values (1, '1970-01-01T00:00:00Z');

select _id, date_trunc('mi',ts) from demo;

 _id | ts                           
-----+----------
   1 | 1970-01-01T00:00
```


