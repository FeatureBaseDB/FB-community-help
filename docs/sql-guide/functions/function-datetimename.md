---
title: DATETIMENAME()
layout: default
parent: Functions
grand_parent: SQL guide
---

# DATETIMENAME() function

The `DATETIMENAME()` function returns the specified part of a given date.
If the part is a month or day of the week, it returns the name of that month or day, otherwise it returns a string containing the numerical representation.

## Syntax

```
DATETIMENAME(timeunit, date-time)
```

## Arguments

| Argument | Data type | Description | Required | Additional information |
|---|---|---|---|---|
| timeunit | string | String value that specifies the time unit for the duration to be added to the target date-time. | Yes | [Time units](#timeunit).|
| date-time | timestamp | The target date-time specified as literal or expression the time duration is added to. | Yes | |


## Returns

| Data type | Value |
|---|---|
| string | Returns name of month or weekday, or number for other part |

## Additional information

### timeunit

{% include /sql-guide/datetimename-function-timeunit-table.md %}

## Examples

### Find out what month a particular date is in

```sql
create table demo
    (_id id, ts timestamp timeunit 's');

insert into demo(_id, ts)
    values (1, '1970-01-01T00:00:00Z');

select _id, datetimename('m',ts) from demo;

 _id | ts                           
-----+----------
   1 | January
```

### Find out what day of the week a particular date is

```sql
create table demo
    (_id id, ts timestamp timeunit 's');

insert into demo(_id, ts)
    values (1, '1970-01-01T00:00:00Z');

select _id, datetimename('w',ts) from demo;

 _id | ts                           
-----+----------
   1 | Thursday
```


