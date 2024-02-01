---
title: Kafka static ingest consumer
layout: default
parent: Import data
grand_parent: Community
nav_order: 14
---

# Kafka static ingest consumer reference
{: .no_toc}

{% include /com-ingest/com-ingest-kafka-summary.md %}

{% include page-toc.md %}

## Before you begin

* [Learn how to setup Kafka messages and JSON files ready for ingestion](/docs/community/com-ingest/com-ingest-source-kafka-static)
* [Start Apache Kafka services](https://kafka.apache.org/quickstart){:target="_blank"}

## Kafka CLI Syntax

```
molecula-consumer-kafka-static \
  <source-and-target-flags>    \
  <kafka-common-flags>         \
  <kafka-static-flags>         \
  <id-flags>                   \
  <batch-flags>                \
  <error-flags>                \
  <log-stat-flags>             \
  <testing-flags>              \
  <kafka-auth-flags>           \
  <kafka-ssl-flags>            \
```

{% include /com-ingest/com-ingest-flag-source-target.md %}

{% include /com-ingest/com-ingest-flag-kafka-common.md %}

## Kafka static flags

| Flag | Data type | Description | Default | Required | Additional |
|---|---|---|---|---|---|
| `--header` | `string` | Path to the static schema definition or "header" file in JSON format which can be located on the local file system or an S3 URI | For `--s3-region` or `AWS_REGION`  | [Kafka Static schema ingest source](/docs/community/com-ingest/com-ingest-source-kafka-static) |
| `--s3-region` | `string` | S3 Region, optionally used when header is specified as an S3 URI.  |  | Required for `--header <s3-URI>` |  Alternatively, use `AWS-REGION` environment variable |
| `--dead-letter-queue-host` | `string` | Dead letter queue host:port. Kafka static consumer can be configured to report failed messages to a DLQ and continue processing without exiting. Specifying a valid DLQ host and topic will enable this optional behaviour.| |  |  |
| `--dead-letter-queue-topic` | string | Dead letter queue topic the failed messages should be routed to.| |  |  |

{% include /com-ingest/com-ingest-flag-common-id.md %}

{% include /com-ingest/com-ingest-flag-common-batch.md %}

{% include /com-ingest/com-ingest-flag-common-error.md %}

{% include /com-ingest/com-ingest-flag-common-log-stat.md %}

{% include /com-ingest/com-ingest-flag-common-testing.md %}

{% include /com-ingest/com-ingest-flag-kafka-auth.md %}

{% include /com-ingest/com-ingest-flag-kafka-ssl.md %}

## Additional information

* Run `./molecula-consumer-kafka-static` from the `/featurebase/idk` directory.

{% include /com-ingest/com-ingest-extra-batch-size.md %}

{% include /com-ingest/com-ingest-extra-concurrency.md %}

{% include /com-ingest/com-ingest-help-kafka.md %}

{% include /com-ingest/com-ingest-extra-kafka-debug.md %}

{% include /com-ingest/com-ingest-extra-missing-val.md %}

{% include /com-config/com-config-extra-quoting-values.md%}

{% include /com-ingest/com-ingest-extra-config-datatype.md %}

{% include /com-ingest/com-ingest-extra-env-var-consumer.md %}

## Examples

* [Kafka static ingest consumer examples](/docs/community/com-ingest/com-ingest-eg-kafka-static)
