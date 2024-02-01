## Kafka static ingest data type mapping

| `"type":` | JSON Input Type | FeatureBase Field Type | Config Options |
|---|---|---|---|
| `"id"` | `10` | set/mutex/time | `"Mutex"`, `"Quantum"`, `"TTL"`, `"CacheConfig"` |
| `"ids"` | `[1, 2, 3]` | set/time | `"Quantum"`, `"TTL"`, `"CacheConfig"` |
| `"string"` | `"example"` | keyed set/mutex/time | `"Mutex"`, `"Quantum"`, `"TTL"`, `"CacheConfig"` |
| `"strings"` | `["a", "b", "c"]` | keyed set/time | `"Quantum"`, `"TTL"`, `"CacheConfig"` |
| `"bool"` | `true`/`false` | packed bool field (row in keyed set fields) | None |
| `"int"` | `10`/`-12`/`"example"` | integer (possibly a foreign-index reference) | `"Min"`, `"Max"`, `"ForeignIndex"` |
| `"decimal"` | `10.9`/`"10.9"` | decimal | `"Scale"` |
| `"signedIntBoolKey"` | `10`/`-12` | same as id, except a negative value clears | None |
| `"recordTime"` | `"2006-01-02T15:04:05Z07:00"`/`1273823` | applied to id(s)/string(s) (using "Quantum") | `"Layout"`, `"Epoch"` , `"Unit"` |
| `"dateInt"` | `"2006-01-02T15:04:05Z07:00"`/`1273823` | integer timestamp relative to an epoch | `"Layout"`, `"Epoch"`, `"Unit"`, `"CustomUnit"` |
| `"timestamp"` | `"2006-01-02T15:04:05Z07:00"`/`1273823` | integer(BSI) timestamp relative to an epoch | `"Granularity"`, `"Layout"`, `"Epoch"`, `"Unit"` |
