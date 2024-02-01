### SELECT statement with `TUPLE()`

```sql
SELECT _id, TUPLE(time_col, stringset_col, idset_col)
  AS tup
  FROM tuple-demo;

_id | tup
----+-------------------------------------
  A | (2013-07-15T01:18:46Z,stringset1, 1)
  B | (2014-07-15T01:18:46Z,stringset2, 2)
```
