### Kafka delete records Avro schema

```
{
    "namespace": "example.test",
    "type": "record",
    "name": "alltypes_delete_records",
    "docs": "supply list of keys or a PQL filter",
    "delete": "records",
    "fields": [
        {"name": "keys", "type": [{"type": "array", "items": "string"}, "null"]},
        {"name": "filter", "type": ["string", "null"]}
    ]
}
```
