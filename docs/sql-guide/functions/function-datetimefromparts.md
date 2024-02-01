---
title: DATETIMEFROMPARTS()
layout: default
parent: Functions
grand_parent: SQL guide
---

# DATETIMEFROMPARTS() function

The `DATETIMEFROMPARTS()` function takes integer date and time arguments and returns timestamp.

## Syntax

```
DATETIMEFROMPARTS(year, month, date, hour, minute, seconds, milliseconds)
```

## Arguments

| Argument | Data type | Description | Required | Range |
|---|---|---|---|---|
| year | integer | year value | Yes | [0,9999] |
| month | integer | month value | Yes | [1,12] |
| day | integer | day value | Yes | [1,31] |
| hour | integer | hour of the day | Yes | [0,23] |
| minutes | integer | minutes value | Yes | [0,59] |
| seconds | integer | seconds value  | Yes | [0,59] |
| milliseconds | integer | milliseconds value | Yes | [0,999] |

## Returns

| Data type | Value                                                       |
|---|---|
| timestamp | date-time value |

## Additional information

The `DATETIMEFROMPARTS` function combines date and time arguments to return a fully initialized `timestamp` value. 
- Returns `null` if any of the arguments are null.
- Returns error if the arguments are out of range or if the arguments do not form a valid datetime. 

## Examples

### Creating timestamp of the first commit to Featurebase.

```sql
select datetimefromparts(2013,10,16,17,34,43,0) as FirstCommit;

|      FirstCommit     |
+----------------------+
| 2013-10-16T17:34:43Z |

```

### Not a valid timestamp returns error

```sql
select datetimefromparts(2023,20,28,13,30,0,0) as column;

Error: [0:0] not a valid datetimepart 20
```

### With a null argument

```sql
select datetimefromparts(2013,10,16,17,34,null,0) as column;

|        column        |
+----------------------+
|         null         |

```
