---
title: DATETIMEADD()
layout: default
parent: Functions
grand_parent: SQL guide
---

# DATETIMEADD() function

The `DATETIMEADD()` function adds a time duration specified using time unit and integer value to a date-time and then returns the results.

## Syntax

```
DATETIMEADD(timeunit, int_expr, date-time)
```

## Arguments

| Argument | Data type | Description | Required | Additional information |
|---|---|---|---|---|
| timeunit | string | String value that specifies the time unit for the duration to be added to the target date-time. | Yes | [Time units](#timeunit).|
| int_expr | integer | Integer value specified as literal or expression to be added as time duration to the target date-time. | Yes | |
| date-time | timestamp | The target date-time specified as literal or expression the time duration is added to. | Yes | |


## Returns

| Data type | Value |
|---|---|
| timestamp | Returns date-time added to the specified time duration. |

## Additional information

### timeunit

{% include /sql-guide/datetimeadd-function-timeunit-table.md %}

Adding 1 day to current date time can be coded in multiple posible ways using various time units as shown below:

`datetimeadd('d',1,current_timestamp)` - add 1 day.

`datetimeadd('hh',24,current_timestamp)` - add 24 hours.

`datetimeadd('mi',1440,current_timestamp)` - add 1440 minutes.

`datetimeadd('s',86400,current_timestamp)` - add 86400 seconds.

## Examples

### Add 62 years to date of birth to derive retirement date

```sql
create table demo
    (_id id, dob timestamp timeunit 's');

insert into demo(_id, dob)
    values (1, '1970-01-01T00:00:00Z');
insert into demo(_id, dob)
    values (2, '1980-01-01T00:00:00Z');
insert into demo(_id, dob)
    values (3, '1990-01-01T00:00:00Z');
insert into demo(_id, dob)
    values (4, '2000-01-01T00:00:00Z');

select _id, dob, datetimeadd('yy',62,dob) as retirement_dt from demo;

 _id | dob                           | retirement_dt
-----+-------------------------------+-------------------------------
   1 | 1970-01-01 00:00:00 +0000 UTC | 2032-01-01 00:00:00 +0000 UTC
   2 | 1980-01-01 00:00:00 +0000 UTC | 2042-01-01 00:00:00 +0000 UTC
   3 | 1990-01-01 00:00:00 +0000 UTC | 2052-01-01 00:00:00 +0000 UTC
   4 | 2000-01-01 00:00:00 +0000 UTC | 2062-01-01 00:00:00 +0000 UTC
```

### Add 24 hours wait period to last run date to derive the next run time

```sql
create table demo
    (_id id, last_ad_run timestamp timeunit 's');

insert into demo(_id, last_ad_run)
    values (1, '2023-03-01T21:30:00Z');
insert into demo(_id, last_ad_run)
    values (2, '2023-03-02T21:30:00Z');
insert into demo(_id, last_ad_run)
    values (3, '2023-03-03T21:30:00Z');
insert into demo(_id, last_ad_run)
    values (4, '2023-03-04T21:30:00Z'); 

select _id, last_ad_run, datetimeadd('hh',24,last_ad_run) as next_ad_run_time from demo;

 _id | last_ad_run                   | next_ad_run_time
-----+-------------------------------+-------------------------------
   1 | 2023-03-01 21:30:00 +0000 UTC | 2023-03-02 21:30:00 +0000 UTC
   2 | 2023-03-02 21:30:00 +0000 UTC | 2023-03-03 21:30:00 +0000 UTC
   3 | 2023-03-03 21:30:00 +0000 UTC | 2023-03-04 21:30:00 +0000 UTC
   4 | 2023-03-04 21:30:00 +0000 UTC | 2023-03-05 21:30:00 +0000 UTC
```
### Use negative time duration to calculate date time values pointing in the past

```sql
select datetimeadd('d', -100, current_date) as hundred_days_ago_today;

 hundred_days_ago_today
-------------------------------
 2022-11-26 00:00:00 +0000 UTC
```
