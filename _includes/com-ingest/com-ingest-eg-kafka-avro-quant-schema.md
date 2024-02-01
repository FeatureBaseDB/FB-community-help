### Kafka Avro Schema with `quant` data types

```
{
    "namespace": "org.example",
    "type": "record",
    "name": "quantum_example",
    "fields": [
        {"name": "pk", "type": "string"},
        {"name": "an_idset", "type": "int", "quantum": "YMD", "fieldType": "id"},
        {"name": "an_int", "type": ["int", "null"], "fieldType": "int"},
        {"name": "a_quantum", "type": "bytes", "fieldType": "recordTime", "layout": "2006-01-02 15:04:05", "unit": "s"},
    ]
}
```
