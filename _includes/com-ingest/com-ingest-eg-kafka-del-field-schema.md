### Kafka delete field Avro schema definition

```
{
    "namespace": "example.test",
    "type": "record",
    "name": "a_delete_schema",
    "delete": "fields",
    "fields": [
        {"name": "pk0", "type": "string"},
        {"name": "pk1", "type": "string"},
        {"name": "fields", "type": {"type": "array", "items": "string"}}
    ]
}
```
