---
title: TOTIMESTAMP()
layout: default
parent: Functions
grand_parent: SQL guide
---
# TOTIMESTAMP() function

The `TOTIMESTAMP()` function uses the Unix Epoch to calculate a date-time equivalent of a specified integer, then returns the results.

## Before you begin
* [Learn about unix epoch/unix time](https://en.wikipedia.org/wiki/Unix_time){:target="_blank"}

## Syntax

```
TOTIMESTAMP(int_expr, [timeunit])
```

## Arguments

| Argument | Data type | Description | Required | Additional information |
|---|---|---|---|---|
| int_expr | integer | Integer value specified as literal or expression to be converted to a timestamp | Yes | |
| timeunit | string | String value that specifies the unit of time to convert. | Optional | [Time units](#additional-information).|

## Returns

| Data type | Value |
|---|---|
| timestamp | Returns timestamp equivalent of `int_expr`, it converts the input using unix epoch as base and the optional `timeunit` to determine the granularity of the input value. |

## Additional information

### timeunit

`timeunit` defaults to `s` if not specified.

{% include /sql-guide/timestamp-timeunit-table.md %}

## Examples

### Implicitly convert integer to timestamp.
Implicit conversion will treat the integer value as seconds since unix epoch. Seconds is the default granularity of integer date-time value.

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

select _id, ts from demo;

 _id | ts                            
-----+-------------------------------
   1 | 1970-01-01 00:00:00 +0000 UTC
   2 | 1970-01-02 00:00:00 +0000 UTC
   3 | 1970-01-02 01:01:01 +0000 UTC
   4 | 1969-12-31 00:00:00 +0000 UTC
```

### Convert granular integers to timestamp.
To convert integer date-time values with non-standard granularity TOTIMESTAMP() can be used with appropriate `timeunit` parameter that matches the granularity of the input.

```sql
create table demo
    (_id id, ts timestamp timeunit 's');

insert into demo(_id, ts)
    values (1, TOTIMESTAMP(90061));
insert into demo(_id, ts)
    values (2, TOTIMESTAMP(90061, 's'));
insert into demo(_id, ts)
    values (3, TOTIMESTAMP(90061000,'ms'));    
insert into demo(_id, ts)
    values (4, TOTIMESTAMP(90061000000,'us'));   
insert into demo(_id, ts)
    values (5, TOTIMESTAMP(90061000000000,'ns'));   

select _id, ts from demo;

 _id | ts                            
-----+-------------------------------
   1 | 1970-01-02 01:01:01 +0000 UTC
   2 | 1970-01-02 01:01:01 +0000 UTC
   3 | 1970-01-02 01:01:01 +0000 UTC
   4 | 1970-01-02 01:01:01 +0000 UTC
   5 | 1970-01-02 01:01:01 +0000 UTC
```
### Use TOTIMESTAMP() in a SELECT query.
TOTIMESTAMP() is a scalar function, so it can be used in the SELECT list and in parts of the query where expressions are allowed.

```sql
create table demo
    (_id id, int_ts int);

insert into demo(_id, int_ts)
    values (1, 86400);
insert into demo(_id, int_ts)
    values (2, 86400);
insert into demo(_id, int_ts)
    values (3, 86400000);

select _id, int_ts, TOTIMESTAMP(int_ts, 's') as ts
from demo;

 _id |   int_ts | ts                            
-----+----------+-------------------------------
   1 |    86400 | 1970-01-02 00:00:00 +0000 UTC
   2 |    86400 | 1970-01-02 00:00:00 +0000 UTC
   3 | 86400000 | 1972-09-27 00:00:00 +0000 UTC

select _id, int_ts, TOTIMESTAMP(int_ts, 's') as ts
from demo
where TOTIMESTAMP(int_ts, 's')>'1970-01-02T00:00:00Z';

 _id |   int_ts | ts                            
-----+----------+-------------------------------
   3 | 86400000 | 1972-09-27 00:00:00 +0000 UTC

```
