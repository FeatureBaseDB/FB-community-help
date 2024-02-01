---
title: Kafka ingest consumer reference
layout: default
parent: Import data
grand_parent: Community
nav_order: 8
---

# Kafka ingest consumer reference
{: .no_toc}

{% include /com-ingest/com-ingest-kafka-summary.md %}

To ingest data to FeatureBase tables from Confluent managed Kafka schemas, you will require:
* A list of `kafka-hosts`
* A FeatureBase`index <indexname>`),
* One primary key method:
  * `--primary-key-field <fieldnames>`, or
  * `--id-field <fieldname>`, or
  * `--auto-generate`

{% include page-toc.md %}

## Before you begin

* [Setup Confluent managed Kafka ready for ingestion](/docs/community/com-ingest/com-ingest-source-kafka-avro)
* [Start Apache Kafka services](https://kafka.apache.org/quickstart){:target="_blank"}

## Kafka CLI Syntax

```
molecula-consumer-kafka           \
  <source-and-target-flags>       \
  <kafka-common-flags>            \
  <kafka-confluent-schema-flags>  \
  <kafka-consumer-flags           \
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

## Kafka consumer flags

| Flag | Data type | Description | Default | Additional |
|---|---|---|---|---|
| `--schema-registry-url` | `string` | URL or IP address of Confluent managed schema registry | localhost:9092 | [Confluent Schema Registry](https://docs.confluent.io/platform/current/schema-registry/index.html){:target="_blank"} |

{% include /com-ingest/com-ingest-flag-common-id.md %}

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

{% include /com-config/com-config-extra-quoting-values.md%}

{% include /com-ingest/com-ingest-extra-config-datatype.md %}

## Further information

* [Kafka Avro ingest consumer examples](/docs/community/com-ingest/com-ingest-example-kafka-avro)
