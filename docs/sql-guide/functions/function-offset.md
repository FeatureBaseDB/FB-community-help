---
title: OFFSET()
layout: default
parent: Functions
grand_parent: SQL guide
---

# RTRIM () function

`OFFSET()` function is used in conjuction with the `LIMIT` clause to control the starting point of data retrieval in a SQL query result. It allows skipping a specified number of rows before fetching the desired number of rows.

## Syntax

```
limit(num_of_rows) Offset(offset_value)
```

## Arguments

| Argument | Description |
|---|---|
| `num_of_rows` | An `integer` value specifying the maximum number of rows to fetch. |
| `offset_value` | An `integer` value specifying the number of rows to skip. |


## Returns

The `OFFSET()` function doesn't have a direct return value. It affects the result set returned by the SQL query by skipping the specified number of rows before fetching the data.


## Examples

### Colors table

This table is used in subsequent OFFSET() queries.

```sql
create table colors
    (_id id, color string);

insert into colors(_id,color)
    values (1,'green')
insert into colors(_id,color)
    values (2,'red')
insert into colors(_id,color)
    values (3,'yellow')
insert into colors(_id,color)
    values (4,'blue')
insert into colors(_id,color)
    values (5,'orange')
```    
### SELECT WITH LIMIT and OFFSET

In this example, the OFFSET clause skips the first three rows, and the LIMIT 2 clause fetches the next two rows from the "colors" table.

```sql

select * from colors limit 2 offset 3;
+-----+--------+
| _id | color  |
+-----+--------+
|   4 | blue   |  
+-----+--------+
|   5 | orange |  
+-----+--------+
```
### By using LIMIT -1, the query returns all the rows starting from the offset specified (in this case, the third row) until the end of the result set.

```sql
select * from colors limit -1 offset 2;
+-----+--------+
| _id | color  |
+-----+--------+
|   3 | yellow |  
+-----+--------+
|   4 | blue   |  
+-----+--------+
|   5 | orange |  
+-----+--------+
```
