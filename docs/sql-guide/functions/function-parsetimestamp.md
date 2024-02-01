---
title: PARSETIMESTAMP()
layout: default
parent: Functions
grand_parent: SQL guide
---

# PARSETIMESTAMP() function

The `PARSETIMESTAMP()` function converts the input time value in string format to timestamp based on the format provided.

## Syntax

```
PARSETIMESTAMP(expr, format)
```

## Arguments

| Argument | Data type | Description | Required | Additional information |
|---|---|---|---|---|
| `expr`   | string | Input string expression that needs to be converted to a timestamp | Yes | |
| `format` | string | String value that specifies the format used to parse the time value. | Yes | [Format Codes](#format-codes) |


## Format Codes

| Format | Meaning| Example|
|---|---|---|
| `%Y` | Year with century as a decimal number. | 2006|
| `%m` | Month as a zero-padded decimal number. | 01 |
| `%d` | Day of the month as a zero-padded decimal number.| 02 |
| `%H` | Hour (24-hour clock) as a zero-padded decimal number.| 15 |
| `%M` | Minute as a zero-padded decimal number.| 04 |
| `%S` | Second as a zero-padded decimal number.| 04 |
| `%b` | Month as abbreviated name.| Jan |
| `%B` | Month as full name.| January |
| `%a` | Weekday as abbreviated name.| Mon |
| `%A` | Weekday as full name.| Monday |
| `%w` | Weekday as a decimal number, where 0 is Sunday and 6 is Saturday.| 1 |
| `%y` | Year without century as a zero-padded decimal number.| 06 |
| `%I` | Hour (12-hour clock) as a zero-padded decimal number.| 03 |
| `%p` | Locale’s equivalent of either AM or PM.| PM |
| `%z` | UTC offset in the form ±HHMM[SS[.ffffff]]| -0700 |
| `%Z` | Time zone name| MST |
| `%j` | Day of the year as a zero-padded decimal number.| 002 |
| `%U` | Week number of the year (Sunday as the first day of the week) as a zero-padded decimal number. All days in a new year preceding the first Sunday are considered to be in week 0.| 01 |
| `%W` | Week number of the year (Monday as the first day of the week) as a zero-padded decimal number. All days in a new year preceding the first Monday are considered to be in week 0.| 01 |
| `%c` | Locale’s appropriate date and time representation.| Mon Jan 02 15:04:05 2006 |
| `%x` | Locale’s appropriate date representation.| 01/02/06 |
| `%X` | Locale’s appropriate time representation.| 15:04:05 |
| `%%` | A literal '%' character.| % |
| `%f` | Microsecond as a decimal number, zero-padded to 6 digits.| 999999 |


## Returns

| Data type | Value |
|---|---|
| timestamp | Returns timestamp in RFC3339 format and no timezone specified. |


## Examples

### ParseTimesStamp
```sql
create table demo
    (_id id, ts string);
  
insert into demo(_id, ts)
    values (1, '2023-01-02');
insert into demo(_id, ts)
    values (2, '2023-jan-02-02-23-34');    
insert into demo(_id, ts)
    values (3, 'Mon May 02 15:04:05 2022');
insert into demo(_id, ts)
    values (4, '05/02/22');
    insert into demo(_id, ts)
    values (5, '15:30:45');

select _id, ts from demo;

 _id | ts                            
-----+-------------------------------
   1 | 2023-01-02
   2 | 2023-jan-02-02-23-34
   3 | Mon May 02 15:04:05 2022
   4 | 05/02/22
   5 | 15:30:45
```

### SELECT statements with PARSETIMESTAMP()
```sql
SELECT _id, parsetimestamp(ts,'%Y-%m-%d') as time FROM demo where _id = 1;
+-----+--------------------+
| _id | time               |
+-----+--------------------+
|   1 |2023-01-02T00:00:00Z|
+-----+--------------------+
```

```sql
SELECT _id, parsetimestamp(ts,'%Y-%b-%d-%H-%M-%S') as time FROM demo where _id = 2;
+-----+--------------------+
| _id | time               |
+-----+--------------------+
|   1 |2023-01-02T02:23:34Z|
+-----+--------------------+
```

```sql
SELECT _id, parsetimestamp(ts,'%c') as time FROM demo where _id = 3;
+-----+--------------------+
| _id | time               |
+-----+--------------------+
|   1 |2022-05-02T15:04:05Z|
+-----+--------------------+
```

```sql
SELECT _id, parsetimestamp(ts,'%x') as time FROM demo where _id = 4;
+-----+--------------------+
| _id | time               |
+-----+--------------------+
|   1 |2022-05-02T00:00:00Z|
+-----+--------------------+
```

```sql
SELECT _id, parsetimestamp(ts,'%X') as time FROM demo where _id = 5;
+-----+--------------------+
| _id | time               |
+-----+--------------------+
|   1 |0000-01-01T15:30:45Z|
+-----+--------------------+
```
