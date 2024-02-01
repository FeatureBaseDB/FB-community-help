---
title: DATETIMEDIFF()
layout: default
parent: Functions
grand_parent: SQL guide
---

# DATETIMEDIFF() function

The `DATETIMEDIFF()` function returns integer value of the difference between two dates in the units provided.

## Syntax

```
DATETIMEDIFF(timeunit, start-datetime, end-datetime)
```

## Arguments

| Argument | Data type | Description | Required | Additional information |
|---|---|---|---|---|
| timeunit | string | Units in which the function reports the time difference | Yes | [Time units](#timeunit). |
| start-datetime | timestamp | lower boundary value | Yes | |
| end-datetime | timestamp | upper boundary value | Yes | |


## Returns

| Data type | Value | range |
|---|---|---|
| integer | Signed integer difference between `start-datetime` and `end-datetime` expressed in the units set by `timeunit` | (-9223372036854775808, 9223372036854775807) |

## Additional information

### timeunit

{% include /sql-guide/datetimeadd-function-timeunit-table.md %}

- For a return value out of range, `DATETIMEDIFF` returns an error. For nanoseconds, the maximum difference between `start-datetime` and `end-datetime` is around 293 years and 4 months.
- The output is negative, if `end-datetime` occurs before `start-datetime`.
- Returns `null` is any of the input parameters is `null`.

## Examples

### Number of days between 27 feb and 01 march 2023.

```sql
create table demo 
    (_id id, start-date timestamp timeunit 's', end-date timestamp timeunit 's');

insert into demo(_id, start-date, end-date)
    values (1, '2023-02-27T21:30:00Z', '2023-03-01T21:30:00Z');
    
select _id, datetimediff('d', start-date, end-date) as days_diff from demo;

_id | days_diff
-----+-----------
  1 |         2
```

### Endtime is before starttime

```sql
create table demo 
    (_id id, start-date timestamp timeunit 's', end-date timestamp timeunit 's');

insert into demo(_id, start-date, end-date)
    values (1, '2023-03-01T12:00:00Z', '2023-03-01T09:00:00Z');
    
select _id, datetimediff('h', start-date, end-date) as hours_diff from demo;

_id | hours_diff
-----+------------
  1 |         -3
```

### Returns NULL if any input parameter is null.

```sql
create table demo 
    (_id id, start-date timestamp timeunit 's', end-date timestamp timeunit 's');

insert into demo(_id, start-date, end-date)
    values (1, '2023-02-27T21:30:00Z', '2023-03-01T21:30:00Z');
    
select _id, datetimediff(null, start-date, end-date) as diff from demo;

_id | diff
-----+------
  1 | NULL
```
