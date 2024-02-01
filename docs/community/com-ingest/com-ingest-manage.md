---
title: Import data
layout: default
parent: Community
has_children: true
nav_order: 6
has_toc: false
---

# How do I import data to FeatureBase Community?
{: .no_toc}

This overview explains the process of importing data to FeatureBase using three methods:
* CSV
* SQL
* Apache Kafka

{% include page-toc.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}

## What are ingesters?

Ingesters are used to:
* retrieve data from a specified upstream data source
* transform the data to the FeatureBase bit-columnar format
* write that data to target database tables.

{: .note}
Tables defined by ingest source files are created if they do not already exist.

## Perform data modeling

{% include /concepts/summary-data-modeling.md %}

* [Learn about data modeling](/docs/concepts/overview-data-modeling/)

## Import data

You can import data to FeatureBase running three types of ingester processes:

* CSV ingest
* SQL ingest
* Kafka ingest

## CSV ingest

Learn how to build CSV source files and the ingest flags you use to import your data.

* [CSV source format reference](/docs/community/com-ingest/com-ingest-source-csv)
* [CSV ingest flag reference](/docs/community/com-ingest/com-ingest-flags-csv)
* [Example CSV source and ingest flags](/docs/community/com-ingest/com-ingest-example-csv)

## SQL import method

Learn how to define your SQL source and ingest flags to import the data.

* [SQL format reference](/docs/community/com-ingest/com-ingest-source-sql)
* [SQL ingester reference](/docs/community/com-ingest/com-ingest-flags-sql)
* [Example SQL source and ingest flags](/docs/community/com-ingest/com-ingest-example-sql)

## Kafka import methods

Learn how to define Avro and Static Schema source files and valid ingest flags to import your data.

* [Kafka Avro ingest](/docs/community/com-ingest/com-ingest-source-kafka-avro)
* [Kafka Avro delete ingest](/docs/community/com-ingest/com-ingest-source-kafka-avro-delete)
* [Kafka static schema ingest](/docs/community/com-ingest/com-ingest-source-kafka-static)

## Troubleshooting

* [Issue: Ingesting mutex fields is slow](/docs/community/com-troubleshooting/com-issue-ingest-mutex-fields)
