---
title: Kafka consumer ingest examples
layout: default
parent: Import data
grand_parent: Community
nav_order: 9
---

# Kafka consumer examples
{: .no_toc}

This page provides examples of Kafka consumer ingest files and flags you can use to test the system

{% include page-toc.md %}

## Before you begin

* [Learn how to manage data import](/docs/community/com-ingest/com-ingest-manage)
* [Learn about Kafka Avro source files](/docs/community/com-ingest/com-ingest-source-kafka-avro)
* [Kafka Avro ingest flags reference](/docs/community/com-ingest/com-ingest-flags-kafka-avro)

## Simple Kafka Avro ingest example

In this example:

* The Kafka schema will encode the data to Kafka
* The Kafka Avro schema source includes example fields defined with storage specification set to `tuplestore`
* The messages include three Kafka messages:
  * `a_stringset` and `a_timestamp` fields that use the union between a field and null
  * The third message `{"null": null}` can be passed when there is missing data for a record.

This means the `./molecula-consumer-kafka` CLI command:
  * ignores null fields
  * requires field values for all other fields

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
        {"name": "an_int_tstore", "type": "int", "fieldType": "int", storage-specifier="tuplestore"},
        {"name": "a_decimal_tstore", "type": "float", "fieldType": "decimal", "scale": 2, storage-specifier="tuplestore"},
        {"name": "a_string_tstore", "type": "string", storage-specifier="tuplestore", length=256 },
    ]
}
```

### Kafka avro raw data message
```
{"a_string": "7EYSp", "a_stringset": {"array": ["vbbuf", "VQs7y", "9z4aw", "h1iqc", "aQQxr"]}, "an_int": 344, "a_decimal": 3.23, "a_timestamp": {"bytes": "2023-02-16 07:53:59"}, "an_int_tstore": 3440, "a_decimal_tstore": 33.23, "a_string_tstore": "TT-7EYSp"},
{"a_string": "iYeOV", "a_stringset": {"array": ["iYeOV", "v31XN", "uirDR"]}, "an_int": 884, "a_decimal": 4.32, "a_timestamp": {"bytes": "2023-01-31 11:11:30"}, "an_int_tstore": 8840, "a_decimal_tstore": 44.32, "a_string_tstore": "TT-iYeOV"},
{"a_string": "X9jWC", "a_stringset": {"null": null}, "an_int": 879, "a_decimal": 2.84, "a_timestamp": {"null": null}, "an_int_tstore": 8790, "a_decimal_tstore": 22.84, "a_string_tstore": "TT-X9jWC"}
```

## Kafka Avro ingest featuring Quantum values

This example features:

* the `IDSETQ` data type defined for the `an_ideset` field
* `an_idset` values stored with respect to time so they can be included in queries
* the optional `an_int` field used with the `Union` Avro data type

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

### Kafka Avro message raw data for `quant` data types and values
```
{"pk": "7EYSp", "an_idset": 10, "an_int": {"int": 39},    "a_quantum": "2023-02-16 07:53:59"},
{"pk": "7EYSp", "an_idset": 11, "an_int": {"null": null}, "a_quantum": "2023-02-22 14:32:23"},
{"pk": "X9jWC", "an_idset": 12  "an_int": {"int": 43},    "a_quantum": "2023-01-31 11:11:30"}
```

### Kafka Avro ingest script for `quantum` data
```
molecula-consumer-kafka \
    --index target_index \
    --featurebase-hosts localhost:10101 \
    --kafka-hosts localhost:9092 \
    --schema-registry-url http://localhost:8081 \
    --topic source_topic \
    --primary-key-fields pk
```



<!-- Commented out to demo examples in one place to reduce number of include files

### Simple Kafka Avro ingest

{% include /com-ingest/com-ingest-eg-kafka-avro-summary.md %}

{% include /com-ingest/com-ingest-eg-kafka-avro-schema.md%}

{% include /com-ingest/com-ingest-eg-kafka-avro-msg.md%}

{% include /community/com-config-cli-run.md %}

{% include /com-ingest/com-ingest-eg-kafka-avro-ingest.md%}

### Kafka Avro ingest featuring Quantum values

{% include /com-ingest/com-ingest-eg-kafka-avro-quant-summary.md %}

{% include /com-ingest/com-ingest-eg-kafka-avro-quant-schema.md%}

{% include /com-ingest/com-ingest-eg-kafka-avro-quant-msg.md%}

{% include /community/com-config-cli-run.md %}

{% include /com-ingest/com-ingest-eg-kafka-avro-quant-ingest.md%}
-->
