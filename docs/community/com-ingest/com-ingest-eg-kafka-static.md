---
title: Kafka static ingest examples
layout: default
parent: Import data
grand_parent: Community
nav_order: 15
---

# Kafka static ingest examples
{: .no_toc}

This page provides examples of Kafka static ingest files and flags you can use to test the system

{% include page-toc.md %}

## Before you begin

* [Learn how to manage data import](/docs/community/com-ingest/com-ingest-manage)
* [Learn about Kafka static](/docs/community/com-ingest/com-ingest-source-kafka-static)
* [Apache Kafka static ingester reference](/docs/community/com-ingest/com-ingest-flags-kafka-static)

## Example 1 - Ingest two values from a Kafka message

### Kafka message file

{% include /com-ingest/com-ingest-eg-kafka-static-msg-2-val.md %}

### Kafka JSON file

{% include /com-ingest/com-ingest-eg-kafka-static-json-2-val.md %}

### Kafka ingest CLI flags

{% include /com-ingest/com-ingest-eg-kafka-static-flags-2-val.md %}

## Example 2 - Ingest an array of values from a Kafka message

### Kafka message file

{% include /com-ingest/com-ingest-eg-kafka-static-msg-array.md %}

### Kafka JSON file

{% include /com-ingest/com-ingest-eg-kafka-static-json-array.md %}

### Kafka ingest CLI flags

{% include /com-ingest/com-ingest-eg-kafka-static-flags-array.md %}
