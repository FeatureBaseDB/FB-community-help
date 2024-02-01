---
title: fbsql loader examples
layout: default
has_children: true
parent: Tools
nav_order: 2
has_toc: false
---

# fbsql loader examples

These examples demonstrate how to:
* Create a FeatureBase table ready for data to be imported
* Create an Impala, Kafka or PostgreSQL data source
* Create a TOML configuration file for your data source
* Run the fbsql `loader` command with the TOML configuration file

When the `loader` process is complete, content from the data source is imported to the target table ready to be queried.

## Before you begin

{% include /fbsql/fbsql-before-begin.md%}
{% include /fbsql/fb-db-create.md %}
* [Learn about fbsql TOML configuration](/docs/tools/fbsql/fbsql-loader-toml-config)
* Choose a connection method for your Cloud database:
  * User credentials
  * [Learn how to create a Cloud API key](/docs/cloud/cloud-authentication/cloud-auth-create-key)

## Step one - create your destination table

Choose one of the following tables:
* [Create a table for Impala or PostgreSQL data](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-impala-postgres)
* [Create a table for Kafka data](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-kafka)

## Step two - create your data source and TOML configuration file

Create one of the following data sources and TOML files:
* [Create an Apache Impala data source and TOML configuration file](/docs/tools/fbsql-examples/fbsql-loader-eg-impala-source)
* [Create an Apache Kafka data source and TOML configuration file](/docs/tools/fbsql-examples/fbsql-loader-eg-kafka-source)
* [Create a PostgreSQL data source and TOML configuration file](/docs/tools/fbsql-examples/fbsql-loader-eg-postgres-source)

## Step three - run fbsql loader

* [Run fbsql loader with your TOML configuration file]( /docs/tools/fbsql-examples/fbsql-loader-eg-ingest)

## Step four - query your data

* [Query Impala data]
* [Query PostgreSQL data]
* [Query Kafka data]
