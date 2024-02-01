---
title: CREATE TABLE for kafka import
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# CREATE TABLE loader-target

{% include /fbsql/fbsql-loader-eg-target-summary.md %}

## Before you begin

* [CREATE TABLE statement](/docs/sql-guide/statements/statement-table-create)
* [FeatureBase SQL editors](/docs/sql-guide/sql-guide-home/#running-sql-queries)
* [fbsql loader examples](/docs/tools/fbsql-examples/fbsql-loader-eg-home)

## Create required table

Run the following SQL in a SQL editor:

```sql
CREATE TABLE loader-target (
    _id id,
    name string,
    qty int,
    categories stringset,
    level decimal(2),
    ts timestamp
)
```

## Next step

* [Part 2 - Create an Apache Kafka data source and TOML configuration file](/docs/tools/fbsql-examples/fbsql-loader-eg-kafka-source)
