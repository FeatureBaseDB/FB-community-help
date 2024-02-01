### Segments table

```sql
create table segments
    (_id id, segment stringset);
insert into segments(_id, segment)
    values (1, ['RED', 'BLUE', 'GREEN']);

+-----+------------------+
| _id | segment          |
+-----+------------------+
|   1 | [RED BLUE GREEN] |
+-----+------------------+
```
