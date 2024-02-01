### Kafka Avro Schema source

```
{
    "namespace": "org.example",
    "type": "record",
    "name": "simple_example",
    "fields": [
        {"name": "a_string", "type": "string", "mutex": true},
        {"name": "a_stringset", "type": [{"type": "array", "items": "string"}, "null"]},
        {"name": "an_int", "type": "int", "fieldType": "int"},
        {"name": "a_decimal", "type": "float", "fieldType": "decimal", "scale": 2},
        {"name": "a_timestamp", "type": ["bytes", "null"], "fieldType": "timestamp", "layout": "2006-01-02 15:04:05", "epoch": "1970-01-01 00:00:00"},
    ]
}
```
