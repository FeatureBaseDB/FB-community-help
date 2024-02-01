---
title: REPLACEALL()
layout: default
parent: Functions
grand_parent: SQL guide
---

# REPLACEALL() function

`ReplaceAll()` evaluates column values and replaces all specified strings with a new value.

## Syntax

```
replaceall(expr,exprOld,exprNew)
```

## Arguments

| Argument | Description |
|---|---|
| `expr` | Any `string` expression. |
| `exprOld` | String expression to replace |
| `exprNew` | String expression that replaces `exprOld` |

## Returns

| Data type | Value |
|---|---|
| `string` | All `exprOld` values replaced by `exprNew` in the column |

## Examples

### Replace `hello world` string

```sql
create table segments
    (_id id, segment string);

insert into segments(_id,segment)
    values (1,'hello world!')

select _id, segment ,replaceall(segment, 'world','universe') as replaced from segments;
+-----+--------------+-----------------+
| _id | segment      | replaced        |
+-----+--------------+-----------------+
|   1 | hello world! | hello universe! |
+-----+--------------+-----------------+
```
### Nested REPLACE() and REVERSE() functions

Replace `exprOld` with reversed `exprNew`

```sql
create table segments
    (_id id, segment string, rev string);

insert into segments(_id,segment)
    values (1,'tic tac', 'cot')

select _id, segment, replaceall(segment, 'tac', reverse(rev)) as replaced from segments;
+-----+--------------+-----------------+
| _id | segment      | replaced        |
+-----+--------------+-----------------+
|   1 | tic tac      | tic toc         |
+-----+--------------+-----------------+
```

## Further information

* [REVERSE()](/docs/sql-guide/functions/function-reverse)
