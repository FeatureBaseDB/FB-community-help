---
title: Kafka delete ingest consumer
layout: default
parent: Import data
grand_parent: Community
nav_order: 11
---

# Kafka delete ingest consumer reference
{: .no_toc}

{% include /com-ingest/com-ingest-kafka-summary.md %}

To ingest data to FeatureBase tables from Confluent managed Kafka schemas, you will require:
* A list of Kafka hosts
* A FeatureBase index name (`--index <indexname>`),
* One primary key method:
  * `--primary-key-field <fieldnames>`, or
  * `--id-field <fieldname>`, or
  * `--auto-generate`

The Kafka Avro delete consumer was built to supply delete functionality that doesn't exist in the Kafka Avro consumer.

The `"fields"`values in the Kafka Avro message define the data to be deleted at the `--primary-key-fields` specified on the CLI.

{: .note}
`./molecula-consumer-kafka-delete` processes Kafka messages one at a time.

{% include page-toc.md %}

## Before you begin

* [Learn how to configure the Kafka message to delete values](/docs/community/com-ingest/com-ingest-source-kafka-avro-delete)
* [Start Apache Kafka services](https://kafka.apache.org/quickstart){:target="_blank"}

## Kafka CLI Syntax

```
molecula-consumer-kafka-delete    \
  <source-and-target-flags>       \
  <kafka-common-flags>            \
  <kafka-confluent-schema-flags>  \
  <kafka-delete-flags>            \
  <id-flags>                      \
  <batch-flags>                   \
  <error-flags>                   \
  <log-stat-flags>                \
  <testing-flags>                 \
  <kafka-auth-flags>              \
  <kafka-ssl-flags>               \
```

{% include /com-ingest/com-ingest-flag-source-target.md %}

{% include /com-ingest/com-ingest-flag-kafka-common.md %}

{% include /com-ingest/com-ingest-flag-kafka-avro.md %}

## Kafka delete flags

The following flags are required when the Kafka Avro message `"fields"` value is set for:
* the Avro Record Schema
* the Kafka message `"delete"` property

{% include /com-ingest/com-ingest-kafka-avro-del-fields-default.md %}

| Flag | Data type | Description | Default | Additional |
|---|---|---|---|---|
| `--featurebase-grpc-hosts` | `string` | Comma separated list of host:port pairs for FeatureBase's GRPC endpoint. |  |  |
| `--schema-registry-url` | `string` | URL or IP address of Confluent managed schema registry | localhost:9092 | [Confluent Schema Registry](https://docs.confluent.io/platform/current/schema-registry/index.html){:target="_blank"} |
| `--topics` | `string` | delete topic JSON config file |  |  |

{% include /com-ingest/com-ingest-flag-common-id.md %}

{: .important}
>When `"delete": "fields"` is defined in the Kafka message there must be a direct relationship between the following:
>* fields to delete defined by `"fields"` `{"type": "array", "items": "string"}`, AND
>* a corresponding FeatureBase table `ID` defined by `--primary-keys-fields`

{% include /com-ingest/com-ingest-flag-common-batch.md %}

{% include /com-ingest/com-ingest-flag-common-error.md %}

{% include /com-ingest/com-ingest-flag-common-log-stat.md %}

{% include /com-ingest/com-ingest-flag-common-testing.md %}

{% include /com-ingest/com-ingest-flag-kafka-auth.md %}

{% include /com-ingest/com-ingest-flag-kafka-ssl.md %}

## Additional information

{% include /com-ingest/com-ingest-extra-batch-size.md %}

{% include /com-ingest/com-ingest-extra-concurrency.md %}

{% include /com-ingest/com-ingest-help-kafka.md %}

{% include /com-ingest/com-ingest-extra-kafka-debug.md %}

{% include /com-ingest/com-ingest-extra-env-var-consumer.md %}

{% include /com-ingest/com-ingest-extra-missing-val.md %}

{% include /com-config/com-config-extra-quoting-values.md %}

{% include /com-ingest/com-ingest-extra-path-selection.md %}

{% include /com-ingest/com-ingest-extra-config-datatype.md %}

## Examples

* [Kafka Avro delete ingest examples](/docs/community/com-ingest/com-ingest-eg-kafka-avro-delete)
