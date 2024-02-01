---
title: Kafka delete message reference
layout: default
parent: Import data
grand_parent: Community
nav_order: 10
---

# Kafka delete message reference

{% include /com-ingest/com-ingest-kafka-avro-intro.md %}

This reference page provides information on structuring an Avro encoded and formatted Kafka messages that is:
* referenced by the Kafka delete consumer CLI command
* used to delete values from a FeatureBase database

## Before you begin

{% include /com-ingest/com-ingest-kafka-avro-before.md %}

## Kafka delete message syntax

```
{
    "namespace": "<example.test>",
    "type": "<delete-property>",
    "name": "<schema_name>",
    "delete": "<delete-property>",
    "fields":
      [
        <Kafka-Avro-data-types>,
      ]
}
```

## Kafka message delete properties

| Property | Description | Required | Default | Additional |
|---|---|---|---|
| `"namespace"` |  |  | Yes |  |
| `"type"` | Avro schema type `record` | Yes |  |  |
| `"name"` | AVRO schema name | Yes |  |  |
| `"<delete-property>"` | `delete` property determines how the Kafka consumer behaves, and what the Avro Schema should look like. |  | Yes | * [Delete fields properties](#delete-fields-properties)<br/>* [Delete values properties](#delete-values-properties)<br/>* [Delete records properties](#delete-records-properties) |
| `"fields"` | Delete all values in a list of fields for a single record without defining the specific data. | [Fields properties](#fields-properties) |

## Additional information

### Delete fields properties

{% include /com-ingest/com-ingest-kafka-avro-del-fields-default.md %}

Set `"delete": "fields"` to delete all values:
* in a list of fields
* for a single record
* for `IDSET` or `STRINGSET` fields where you don't know the specific values to delete

`"delete": "fields"` requires:
* FeatureBase index configured with `keys: true`
* `{"type": "array", "items": "string"}` defined under the `"fields"` parameter in the Kafka message

#### Delete values properties

Set `"delete": "values"` to:
* delete specified values from `IDSET` and `STRINGSET` fields
* specify `null` value for `BOOL`, `DECIMAL`, `INT` and `TIMESTAMP` fields

`"delete": "values"` requires:
* Avro fields containing data that can be deleted
* Matching name for Avro Record Schema field and target FeatureBase record

#### Avro data type field mapping
<!--Query for Jbrinlee -- is this the same stuff as in /_includes/com-ingest/com-ingest-extra-kafka-avro-mapping? Should I remove this, or modify the include file?-->
{: .note}
Kafka delete is not supported for the FeatureBase `time` or `time-quantum` data types.

| SQL data type | FeatureBase field data type | Avro field data type |
|---|---|---|
| `_id` | `Record ID`<br/>`Key` | `string`<br/>`int` |
| `STRING` | Keyed `Mutex` | `string` |
| `STRINGSET` | Keyed `Set` | `string` or array of strings |
| `STRINGSETQ` | Keyed `Time` | N/A |
| `ID`   | Non-Keyed `Mutex` | `int` |
| `IDSET`| Non-Keyed `Set` | int or array of ints |
| `IDSETQ` | Non-Keyed `Time` | N/A |
| `INT`  | `Int` | `boolean` |
| `DECIMAL` | `Decimal` | `boolean` |
| `TIMESTAMP` | `Timestamp` | `boolean` |
| `BOOL` | `Bool` | `boolean` |

#### Avro data types to Kafka message
<!--query for Jacob -- should this be deleted in favour of above, or include file com-ingest-extra-kafka-avro-mapping.md -->
| Avro data type | Kafka message | Additional |
|---|---|---|
| `string`<br/>`int` | Values to delete from FeatureBase field | Retain field values by using the `union` data type to union `null` value with `string` or `int` data types |
| `boolean` | `true` when FeatureBase field value should be deleted |

### Delete records parameters

The `"delete": "records"` parameter requires one or more Avro field data types:

| Avro data type | Description | FeatureBase index | JSON fields parameter |
|---|---|---|---|
| `"ids"` | Used to delete a list of records based on their FeatureBase `_id` | `keys: false` | `{"type": "array", "items": "int"}` |
| `"keys"` | Used to delete a list of records based on their FeatureBase `_id` | `keys: true` | `{"type": "array", "items": "string"}` |
| `"filter"` | Used to delete records based on `PQL` row calls | n/a |  `{"type": "string"}` |

<!--Note for Jacob -- I've duplicated these include files which are also in /docs/community/com-ingest/com-ingest-source-kafka-avro.md which currently sits in PR https://github.com/FeatureBaseDB/featurebase-docs/pull/88 -- I've copied here because they seem to be relevant here as much as there-->

{% include /com-ingest/com-ingest-extra-kafka-avro-fields.md %}

{% include /com-ingest/com-ingest-extra-kafka-avro-field-syntax.md %}

## Examples

### Kafka delete fields

{% include /com-ingest/com-ingest-eg-kafka-del-field-schema.md %}

{% include /com-ingest/com-ingest-eg-kafka-del-field-msg.md %}

{% include /com-ingest/com-ingest-eg-kafka-del-field-ingest.md %}

### Kafka delete values

{% include /com-ingest/com-ingest-eg-kafka-del-values-schema.md %}

{% include /com-ingest/com-ingest-eg-kafka-del-values-msg.md %}

{% include /com-ingest/com-ingest-eg-kafka-del-values-ingest.md %}

### Kafka delete records

{% include /com-ingest/com-ingest-eg-kafka-del-records-schema.md %}

{% include /com-ingest/com-ingest-eg-kafka-del-records-msg.md %}

{% include /com-ingest/com-ingest-eg-kafka-del-records-ingest.md %}

## Next step

* [Kafka Avro delete ingest flags](/docs/community/com-ingest/com-ingest-flags-kafka-avro-delete)
