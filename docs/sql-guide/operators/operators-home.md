---
title: Operators
layout: default
parent: SQL guide
nav_order: 6
---

# SQL Operators

SQL Operators are used in SELECT statements to perform mathematical and logical operations on operands.

## Before you begin

{% include /sql-guide/sql-guide-before-begin.md %}

## Unary Operators

### Sign

| Operator | Description | Example | Result |
|:---:|---|---|---|
| `+` or `-` | apply a sign to a numeric data type | `SELECT -1` | -1 |

### Bitwise

| Operator | Description | Example | Binary representation | Binary Result |
|:---:|---|---|---|---|
| `!` | **Not** inverts all the bits of the operand using [Two's complement](https://en.wikipedia.org/wiki/Two%27s_complement) | `SELECT !5;` | `0101` | `1010` --> `(-8)+(0)+(2)+(0) = -6`|

## Binary Operators

### Logical

| Operator | WHERE condition returns **true** when... | Examples |
|:---:|---|---|
| `=` | **both** operands are equal. | `select _id from products WHERE price = 52.50;` |
| `!=` | **both** operands are **not** equal. | `select stock from products WHERE price != 0.50;` |
| `<>` | **both** operands are **not** equal. | `select stock from products WHERE price <> 0.50;` |
| `AND` | **both** conditions match the operand. | `select * from products WHERE stock > 20 AND price < 10;` |
| `BETWEEN` | the operand is within the range of two integer values | `select * from products WHERE stock BETWEEN 0 AND 100;` |
| `LIKE` | the operand matches the specified pattern. | `select * from products WHERE prodlist LIKE '%play%';` |
| `OR` | **either** condition matches the operand |  `select * from products WHERE prodlist LIKE '%pla%' OR stock < 20;` |

<!-- Add missing from https://www.w3schools.com/sql/sql_operators.asp once supported -->

### Comparison

| Operator | WHERE condition returns **True** when... | Examples |
|:---:|---|---|
| `<` | the operand on the left is **less than** the operand on the right. | `SELECT 1 WHERE 10 < 100;` |
| `>` | the operand on the left is **greater than** the operand on the right. | `SELECT 1 WHERE 10 > 1;` |
| `<=` | the operand on the left is **less than  or equal to** the operand on the right. | `SELECT 1 WHERE 10 >= 10;` |
| `>=` | the operand on the left is **greater than or equal to** the operand on the right. | `SELECT 1 WHERE 10 <= 11;` |

### Arithmetic

| Operator | Description | Examples |
|:---:|---|---|
| `+` | Add two operands. | `SELECT 1+1;` |
| `-` | Subtract two operands. | `SELECT 1-1;` |
| `*` | Multiply two operands. | `SELECT 12*11;` |
| `/` | Divide two operands. | `SELECT 120/12;` |
| `%` | Modulo divides two operands then returns the remainder or signed remainder. | `SELECT 5%3;` |

### Bitwise

| Operator | Description | Example | Binary representation | Binary Result |
|:---:|---|---|---|---|
| `&` | **And** sets each bit to 1 where both bits are 1 | `SELECT 5 & 1` | `0101 & 0001` | `0001` |
| `|` | **Or** sets each bit to 1 if one of two bits = 1 | `SELECT 5 | 1` | `0101 | 0001` | `0101` |
| `<<` | The second operand determines the number of zeroes to **insert** to the right which then **shifts left** the value of the first operand. | `SELECT 5 << 1;` | `0101 << 1` | `1010` |
| `>>` | The second operand determines the number of zeroes to **remove** from the right which then **shifts right** the value of the first operand. | `SELECT 5 >> 1;` | `0101 >> 1` | `0010` |

### String

| Operator | Description | Example | Result |
|:---:|---|---|---|
| `||` | Concatenate two strings into a single string. | `SELECT 'CON' || 'CAT';` | `CONCAT` |

## Further information

FeatureBase also supports standard operators:

* [SQL IN operator](https://www.w3schools.com/Sql/sql_in.asp){:target="_blank"}
