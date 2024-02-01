```sql
select _id, segment from segments where rangeq(segment, null ,2000000000)

+-----+---------------+
| _id | segment       |
+-----+---------------+
|   1 | GREEN,YELLOW  |
+-----+---------------+
|   2 | GREEN         |
+-----+---------------+
|   3 | RED           |
+-----+---------------+
```
