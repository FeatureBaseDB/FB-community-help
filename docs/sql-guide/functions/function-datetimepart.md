---
title: DATETIMEPART()
layout: default
parent: Functions
grand_parent: SQL guide
---

# DATETIMEPART() function

The `DATETIMEPART()` function returns the specified part of a given date, in numerical format.

## Syntax

```
DATETIMEPART(timeunit, date-time)
```

## Arguments

| Argument | Data type | Description | Required | Additional information |
|---|---|---|---|---|
| timeunit | string | String value that specifies the time unit for the duration to be added to the target date-time. | Yes | [Time units](#timeunit).|
| date-time | timestamp | The target date-time specified as literal or expression the time duration is added to. | Yes | |


## Returns

| Data type | Value |
|---|---|
| int | Returns the specified part of the timestamp. |

## Additional information

### timeunit

{% include /sql-guide/datetimename-function-timeunit-table.md %}

## Examples

### Select the month from a given date

```sql
create table demo
    (_id id, ts timestamp timeunit 's');

insert into demo(_id, ts)
    values (1, '1970-01-01T00:00:00Z');

select _id, datetimepart('m',ts) from demo;

 _id | ts                           
-----+----------
   1 | 1
```

### Find out what day of the week a date is, with Sunday as 0

```sql
create table demo
    (_id id, ts timestamp timeunit 's');

insert into demo(_id, ts)
    values (1, '1970-01-01T00:00:00Z');

select _id, datetimepart('w',ts) from demo;

 _id | ts                           
-----+----------
   1 | 4
```


