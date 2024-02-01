### Kafka Avro data type syntax

Map Avro field data types and property key-value pairs to determine the FeatureBase record data type

#### BOOL

| Kafka Avro fields | Description |
|---|---|
| `{"name": "bool_bool", "type": "boolean"}` | FeatureBase Bool from Avro Boolean

#### DECIMAL

| Kafka Avro fields | Description |
|---|---|
| `{"name": "decimal_float", "type": "float", "fieldType": "decimal", "scale": 2}` | FeatureBase Decimal from Avro Float |

#### ID

| Kafka Avro fields | Description |
|---|---|
| `{"name": "id_long", "type": "long", "mutex": true, "fieldType": "id"}` | FeatureBase ID from Avro Long |
| `{"name": "id_int", "type": "int", "mutex": true, "fieldType": "id"}` | FeatureBase ID from Avro int |

#### IDSET

| Kafka Avro fields | Description |
|---|---|
| `{"name": "idset_int", "type": "int", "fieldType": "id"}` | FeatureBase IDSET from Avro Int |
| `{"name": "idset_intarray", "type": {"type": "array", "items": "int"}}` | FeatureBase IDSET from Avro Int Array |

#### IDSETQ

{: .important}
`STRINGSETQ` Avro strings require a matching `RecordTime` field in the Avro Schema. Examples are provided below.

| Kafka Avro string | Description | Required in Avro schema |
|---|---|---|
| `{"name": "idsetq_int", "type": "int", "fieldType": "id", "quantum": "YMD"}` | FeatureBase IDSETQ from Avro Int | `{"name": "recordtime_bytes", "type": "bytes", "fieldType": "recordTime", "layout": "2006-01-02 15:04:05", "unit": "s"}` |
| `{"name": "idsetq_intarray", "type": "array", "items": {"type": "int", "quantum": "YMD"}}` | FeatureBase IDSETQ from Avro Int Array | `{"name": "recordtime_bytes", "type": "bytes", "fieldType": "recordTime", "layout": "2006-01-02 15:04:05", "unit": "s"}` |

#### INT

| Kafka Avro fields | Description |
|---|---|
| `{"name": "int_int", "type": "int", "fieldType": "int"}` | FeatureBase Int from Avro Int |

#### Strings

| Kafka Avro fields | Description | Additional |
|---|---|---|
| `{"name": "string_string", "type": "string", "mutex": true }`| FeatureBase String from Avro String |  |
| `{"name": "string_bytes", "type": "bytes" , "mutex": true }` | FeatureBase String from Avro Bytes |  |
| `{"name": "string_enum", "type": "enum"}` | FeatureBase String from Avro Enum |  |
| `{"name": "string_string", "type": ["string", "null"], "mutex": true }` | Optional String | [Ignore missing fields](#ignore-missing-fields) |
| `{"name": "stringset_stringarray", "type": [{"type": "array", "items": "string"}, "null"]}` | Optional Array of Strings | [Ignore missing fields](#ignore-missing-fields) |

#### STRINGSET

| Kafka Avro string | Description |
|---|---|
| `{"name": "stringset_string", "type": "string"}` | FeatureBase StringSet from Avro String |
| `{"name": "stringset_bytes", "type": "bytes"}` | FeatureBase StringSet from Avro Bytes |
| `{"name": "stringset_stringarray", "type": {"type": "array", "items": "string"}}` | FeatureBase StringSet from Avro String Array |

#### STRINGSETQ

{: .important}
`STRINGSETQ` Avro strings require a matching `RecordTime` field in the Avro Schema. Examples are provided below.

| Kafka Avro string | Description | Required in Avro schema |
|---|---|---|
| {"name": "stringsetq_string", "type": "string", "quantum": "YMD"} | FeatureBase StringSetQ with Day Granularity from Avro String | `{"name": "recordtime_bytes", "type": "bytes", "fieldType": "recordTime", "layout": "2006-01-02 15:04:05", "unit": "s"}` |
| {"name": "stringsetq_stringarray", "type": "array", "items": {"type": "string", "quantum": "YMD"}} | FeatureBase StringSetQ with Day Granularity from Avro String Array | `{"name": "recordtime_bytes", "type": "bytes", "fieldType": "recordTime", "layout": "2006-01-02 15:04:05", "unit": "s"}`  |

#### TIMESTAMP

| Kafka Avro string | Description | Additional |
|---|---|
| `{"name": "timestamp_bytes_ts", "type": "bytes", "fieldType": "timestamp", "layout": "2006-01-02 15:04:05", "epoch": "1970-01-01 00:00:00"}` | FeatureBase Timestamp from Avro Bytes | Expects byte representation of string timestamp |
| `{"name": "timestamp_bytes_int", "type": ["bytes", "null"], "fieldType": "timestamp", "unit": "s", "layout": "2006-01-02 15:04:05", "epoch": "1970-01-01 00:00:00"}` | FeatureBase Timestamp from Avro Int |
