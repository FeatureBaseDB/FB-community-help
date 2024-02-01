```sql
create table allcoltypes
  (
    _id id,
    intcol int min 0 max 10000,
    boolcol bool,
    timestampcol timestamp timeunit 'ms',
    decimalcol decimal(2),
    stringcol string,
    stringsetcol stringset,
    stringsetcolq stringsetq timequantum 'YMD' ttl '24h',
    idcol id,
    idsetcol idset,
    idsetcolq idsetq timequantum 'YMD' ttl '24h',
    vectorcol vector(768)
  )
  with comment 'table containing all column types';
```
