---
title: COALESCE()
layout: default
parent: Functions
grand_parent: SQL guide
---

# COALESCE() function

The `COALESCE()` function inserts a specified value in place of `null` values in SELECT query results. This can be used to:
* remove `null` values in calculations or concatenations
* insert a default value where one is not available

## Syntax

```
COALESCE(<target-column-name>,...,<value>)
```

## Arguments

| Argument | Description | Required? | Additional information |
|---|---|---|---|
| `<target-column-name>` | Target column-name to insert `<value>` | Yes |  |
| `<value>` | Value to insert in place of 'null' | Yes | `<value>` must match data type of destination column |

## Returns

The specified value in place of `null` values in the destination column

## Examples

### using Coalesce() function to handle null values

```sql
CREATE TABLE stock
    (__id ID, product STRING, brand STRING, subcategory STRING, category STRING, family STRING, quantity_available INT, minimum_to_have INT);

INSERT INTO stock
    VALUES
    (1, 'pork ribs', NULL, 'pork meat', 'meat','food',400, 130),
    (2, 'tomatoes','Mr Red', NULL, 'vegetables','food',280, 100),
    (3,'lettuce',NULL, 'Leaf vegetables', NULL,'food',280, Null),
    (4,'Bananas',NULL, NULL,NULL,'food',Null, NULL),
    (5,'hamburger','MaxBurg','cow meat','meat','food',220, 150),
    (6,'hamburger','SuperBurga',Null,Null,Null,125, Null);

SELECT * FROM stock;

| _id | product  | brand    | subcategory    | category  | family | quantity_available| minimum_to_have|
+----+----------+----------+----------------+-----------+--------+-------------------+----------------+
| 1  | pork ribs| NULL     | pork meat      | meat      | food   | 400               | 130            |
+----+----------+----------+----------------+-----------+--------+-------------------+----------------+
| 2  | tomatoes | Mr Red   | NULL           | vegetables| food   | 280               | 100            |
+----+----------+----------+----------------+-----------+--------+-------------------+----------------+
| 3  | lettuce  | NULL     | Leaf vegetables| NULL      | food   | 280               | NULL           |
+----+----------+----------+----------------+-----------+--------+-------------------+----------------+
| 4  | Bananas  | NULL     | NULL           | NULL      | food   | NULL              | NULL           |
+----+----------+----------+----------------+-----------+--------+-------------------+----------------+
| 5  | hamburger| MaxBurg  | cow meat       | meat      | food   | 220               | 150            |
+----+----------+----------+----------------+-----------+--------+-------------------+----------------+
| 6  | hamburger|SuperBurga| NULL           | NULL      | NULL   | 125               | NULL           |
+----+----------+----------+----------------+-----------+--------+-------------------+----------------+

SELECT product, COALESCE(brand, 'locally grown') AS final_brand FROM stock;

+-----------+--------------+
| product   | final_brand  |
+-----------+--------------+
|  pork ribs| locally grown|
+-----------+--------------+
|  tomatoes | Mr Red       |
+-----------+--------------+
|  lettuce  | locally grown|
+-----------+--------------+
|  Bananas  | locally grown|
+-----------+--------------+
| hamburger | MaxBurg      |
+-----------+--------------+
| hamburger | SuperBurga   |
+-----------+--------------+

SELECT product, COALESCE(subcategory, category, family, 'no product description') AS product_and_subcategory FROM stock;
+-----------+--------------------------+
| product   | product_and_subcategory  |
+-----------+--------------------------+
|  pork ribs| pork meat                |
+-----------+--------------------------+
|  tomatoes | vegetables               |
+-----------+--------------------------+
|  lettuce  | Leaf vegetables          |
+-----------+--------------------------+
|  Bananas  | food                     |
+-----------+--------------------------+
| hamburger | cow meat                 |
+-----------+--------------------------+
| hamburger | no product description   |
+-----------+--------------------------+

SELECT _id, COALESCE(quantity_available, minimum_to_have, 100) AS quantity FROM stock;
+----+----------+
| _id | quantity|
+-----+---------+
|   1 |  400    |
+-----+---------+
|   2 |  280    |
+-----+---------+
|   3 |  280    |
+-----+---------+
|   4 |  100    |
+-----+---------+
|   5 |  220    |
+-----+---------+
|   6 |  125    |
+-----+---------+

```
