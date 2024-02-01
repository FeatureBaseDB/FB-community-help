---
title: Kafka consumer ingest
layout: default
parent: Import data
grand_parent: Community
nav_order: 7
---

# How do I add data to FeatureBase tables using Kafka?
{: .no_toc}

{% include /com-ingest/com-ingest-kafka-avro-intro.md %}

The Kafka Confluent ingest process:
* streams and reads encoded records from a Kafka topic
* uses Confluent Schema Management to determine the message schema, destination FeatureBase field data types
* ingests the data into FeatureBase tables.

{% include page-toc.md %}

## Before you begin

{% include /com-ingest/com-ingest-kafka-avro-before.md %}

## Avro schema for Kafka messages

```
{
    "namespace": "<namespace>",
    "type": "record",
    "name": "<name-of-schema>",
    "fields": [
        <Kafka-Avro-data-types>,
    ]
}
```

## Additional information

### Storing String, Integer and Decimal fields in Featurebase Tuple Store

For Featurebase `string`, `int` and `decimal` type fields the default Bitmap store backend can be overridden and the new Tuple store backend can be specified as the field's target storage. In avro field definitions a new `storage-specifier` attribute can be used to specify the preferred backend for these three types. When no storage specification is provided these types will continute to store in the default Bitmap backend. Refer to the following table for avaialble `storage-specifier` options and valid use cases.

#### Storage Specification

| Field's FeatureBase Data Type | Avro Field Properties | Backend Selection |
|---|---|---|
|`STRING`| storage-specifier="tuplestore", length=256| This string field will be stored in Tuple store with 256 defined as maximum field length.|
|`STRING`| mutex=true, quantum=(YMD), storage-specifier="bitmapstore"| This string mutex field will be stored in Bitmap store with time quantum support.|
|`STRING`| mutex=true, quantum=(YMD), storage-specifier="tuplestore"| This field will be stored in Bitmap store. In this case the storage-specifier="tuplestore" is invalid and ignored. When either `mutex=true` or `quantum=(YMD)` is specified the default bitmap backend will be automatically selected to support the mutex and time quantum features.|
|`INT`| storage-specifier="tuplestore"| This integer field will be stored in Tuple store.|
|`DECIMAL`| storage-specifier="tuplestore", scale=2| This decimal field will be stored in Tuple store with precision set to 2 decimal points.|

### Mapping Avro and FeatureBase data types

The `./molecula-consumer-kafka` and `./molecula-consumer-kafka-delete` CLI commands:
* Read the Avro schema from the Confluent Schema Registry
* Infers the FeatureBase data type for each field as specified in the following tables

#### avro.Array

| Avro data type | Properties | FeatureBase Data type | Backend |
|---|---|---|---|
| avro.Array : avro.String |  | STRINGSET | bitmap store |
| avro.Array : avro.Bytes  |  | STRINGSET | bitmap store |
| avro.Array : avro.Fixed  |  | STRINGSET | bitmap store |
| avro.Array : avro.Enum   |  | STRINGSET | bitmap store |
| avro.Array : avro.String | quantum=(YMD) | STRINGSETQ | bitmap store |
| avro.Array : avro.Bytes  | quantum=(YMD) | STRINGSETQ | bitmap store |
| avro.Array : avro.Fixed  | quantum=(YMD) | STRINGSETQ | bitmap store |
| avro.Array : avro.Enum   | quantum=(YMD) | STRINGSETQ | bitmap store |
| avro.Array : avro.Long   |  | IDSET | bitmap store |
| avro.Array : avro.Long   | quantum=(YMD)  | IDSETQ | bitmap store |

#### avro.Bytes

| Avro data type | Properties | FeatureBase Data type | Backend |
|---|---|---|---|
| avro.Bytes | logicalType=decimal, scale | `DECIMAL` | bitmap store |
| avro.Bytes | fieldType=decimal, scale | `DECIMAL` | bitmap store |
| avro.Bytes | fieldType=decimal, scale, storage-specifier="tuplestore" | `DECIMAL`  | tuple store |
| avro.Bytes | fieldType=recordTime | `STRINGSETQ` and `IDSETQ` | bitmap store |
| avro.Bytes |  | `STRINGSET`   | bitmap store |
| avro.Bytes | mutex=true | `STRING` | bitmap store |
| avro.Bytes | storage-specifier="tuplestore" | `STRING` | tuple store |
| avro.Bytes | quantum=(YMD) | `STRINGSETQ` | bitmap store |
| avro.Bytes | quantum=(YMD) | `STRINGSETQ` | bitmap store |

#### avro.boolean

| Avro data type | Properties | FeatureBase Data type | Backend |
|---|---|---|---|
| avro.Boolean |  | `BOOL` | bitmap store |

#### avro.Double, avro.Float

| Avro data type | Properties | FeatureBase Data type | Backend |
|---|---|---|---|
| avro.Double, avro.Float | scale | `DECIMAL` | bitmap store |
| avro.Double, avro.Float | scale, storage-specifier="tuplestore" | `DECIMAL` | tuple store |

#### avro.Enum

| Avro data type | Properties | FeatureBase Data type | Backend |
|---|---|---|---|
| avro.Enum |  | `STRING` | bitmap store |

#### avro.Int, avro.Long

| Avro data type | Properties | FeatureBase Data type | Backend |
|---|---|---|---|
| avro.Int, avro.Long | fieldType=id   | IDSET  | bitmap store |
| avro.Int, avro.Long | fieldType=id, mutex=false | ID  | bitmap store |
| avro.Int, avro.Long | fieldType=id, quantum=(YMD)    | IDSETQ | bitmap store |
| avro.Int, avro.Long | fieldType=int, min, max| INT | bitmap store |
| avro.Int, avro.Long | fieldType=int, min, max, storage-specifier="tuplestore" | INT | tuple store |

#### avro.String

| Avro data type | Properties | FeatureBase Data type | Backend |
|---|---|---|---|
| avro.String || STRINGSET   | bitmap store |
| avro.String | mutex=true| STRING | bitmap store |
| avro.String | quantum=(YMD)  | STRINGSETQ  | bitmap store |
| avro.String | storage-specifier="tuplestore", length| STRING | tuple store |

#### avro.Union

| Avro data type | Properties | FeatureBase Data type |
|---|---|---|
| avro.Union  || Supports one or two members (if two, one must be avro.NULL) |

#### Not supported in FeatureBase

| Avro data type | Properties | FeatureBase Data type |
|---|---|---|
| avro.Map |  | NOT SUPPORTED  |
| avro.Null |  | NOT SUPPORTED |
| avro.Record |  | NOT SUPPORTED  |
| avro.Recursive |  | NOT SUPPORTED  |

{% include /com-ingest/com-ingest-extra-kafka-avro-field-syntax.md %}

## Examples

* [Example Kafka Avro ingest source](/docs/community/com-ingest/com-ingest-example-kafka-avro)

<!-- commented out to demo how a single example file can reduce number of includes
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

## Next step

* [Kafka Avro ingest consumer flags reference](/docs/community/com-ingest/com-ingest-flags-kafka-avro)

## Further information

* [Learn about Kafka Consumer](https://kafka.apache.org/22/javadoc/org/apache/kafka/clients/consumer/KafkaConsumer.html)
* [Learn about Kafka Consumer configs](https://kafka.apache.org/documentation/#consumerconfigs)
* [Learn about Kafka Consumer API](https://kafka.apache.org/documentation/#consumerapi)
* [FeatureBase data types](/docs/sql-guide/data-types/data-types-home)
