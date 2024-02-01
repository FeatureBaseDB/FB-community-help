### MAP and TRANSFORM clauses for SETQ data types

SETQ data types are handled differently in the MAP and TRANSFORM clauses:

* MAP the numeric identifier for your `SETQ` data type to an equivalent `IDSET` or `STRINGSET` data type
* Combine the MAP identified `TIMESTAMP` and `SET` data types together in the TRANSFORM clause as follows:

```sql
TUPLE(@<timestamp-map-value>,<@set-map-value>)
```
