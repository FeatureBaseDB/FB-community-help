### BULK INSERT statement with `TUPLE()`

```sql
BULK INSERT INTO tuple-demo(
    _id,
    time_col,
    stringset_col,
    ideset_col,
    stringsetq_col,
    idesetq_col
  )
  MAP (
    0 STRING,
    1 TIMESTAMP,
    2 STRINGSET,
    3 IDSET
  )
  TRANSFORM(
    @0,
    @1,
    @2,
    @3,
    TUPLE(@1,@2),
    TUPLE(@1,@3)
  )
  FROM x'
    A,2013-07-15T01:18:46Z,stringset1, 1
    B,2014-07-15T01:18:46Z,stringset2, 2
  '
  WITH
    BATCHSIZE 10000
    format 'CSV'
    input 'INLINE';
```
