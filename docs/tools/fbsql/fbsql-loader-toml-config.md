---
title: loader TOML configuration
layout: default
parent: fbsql CLI SQL tool
grand_parent: Tools
nav_order: 14
---

# fbsql loader TOML configuration

The fbsql `loader` command relies on an appropriately formatted TOML configuration file that contains:
* FeatureBase target table to insert data
* Connection settings for an Apache Impala, Apache Kafka or PostgreSQL data source
* An optional series of key/value pairs that correspond to target table columns.

## Before you begin

* [Learn about TOML format](https://toml.io/)
* [Learn about Apache Impala](https://impala.apache.org/){:target="_blank"}
* [Learn about Apache Kafka Confluent Consumer](https://docs.confluent.io/platform/current/clients/consumer.html){:target="_blank"}
* [Learn about PostgreSQL](https://www.postgresql.org/docs/){:target="_blank"}
{% include /fbsql/fbsql-before-begin.md%}
{% include /fbsql/fb-db-create.md %}
* [Create a destination table](/docs/sql-guide/statements/statement-table-create)

## TOML configuration syntax

```
# Kafka keys
hosts = ["<address:port>",...]
group = "<kafka-confluent-group>"
topics = "<kafka-confluent-topics>"

# Impala and PostgreSQL connection keys
driver= "<datasource-type>"
connection-string = "<datasource-type>://<datasource-connection-string>"

# Data keys
table = "<target-table>"
query = "<select-from-impala-or-postgresql-data-source>"

# Ingest batching keys
batch-size = <integer-value>
batch-max-staleness = "<integer-value><time-unit>"
timeout = "<integer-value><time-unit>"

# Optional target table keys
[[fields]]
name = "<target-table-column>"
source-type = "<target-table-column-data-type>"
source-column = "<target-table-column>"
[primary-key= "true"]
[source-path = ["<kafka-json-parent-key>", "<json-child-key>"]]
```

## Kafka keys

| Key | Description | Required | Additional information |
|---|---|---|---|
| `hosts` | One or more Kafka confluent consumer hosts. Use `[]` for multiple hosts | Apache Kafka | [Confluent Hosts documentation](https://docs.confluent.io/platform/current/clients/consumer.html){:target="_blank"} |
| `group` | Kafka consumer group | Kafka | [Confluent Hosts documentation](https://docs.confluent.io/platform/current/clients/consumer.html){:target="_blank"} |
| `topics` | One or more Kafka topics | Yes | [Confluent Hosts documentation](https://docs.confluent.io/platform/current/clients/consumer.html){:target="_blank"} |

## Impala and PostgreSQL connection keys

| Key | Description | Required | Additional information |
|---|---|---|---|
| `driver` | Driver required for data source | Impala or PostgreSQL |  |
| `connection-string` | Quoted connection string that includes the data source type | Impala or PostgreSQL | [Data source connection strings](#data-source-connection-strings) |

## Data keys

| Key | Description | Required | Additional information |
|---|---|---|---|
| `table` | Double-quoted target table to insert data | Yes | [CREATE TABLE statement](/docs/sql-guide/statements/statement-table-create) |
| `query` | Valid SQL query to SELECT data from the data source for insertion into the target table | Impala or PostgreSQL |  |

## Ingest batching keys

Data is collected into batches before importing to FeatureBase. Default values are used if batching keys are not supplied.

| Key | Description | Required | Default | Additional information |
|---|---|---|---|---|
| `batch-size` | Integer value representing the maximum size of a batch file containing the data to import. | Yes | 1 | [Batch keys](/#batch-keys) |
| `batch-max-staleness` | Maximum length of time the oldest record in a batch can exist before the batch is flushed | Kafka |  | [Batch keys](/#batch-keys) |
| `timeout` | Time to wait before batch is flushed | Kafka | `"1s"` | [Batch keys](/#batch-keys) |

## Optional target table keys

{: .note}
Run [SHOW CREATE TABLE `<tablename>`](/docs/sql-guide/statements/statement-table-create-show) to output column names and data types required for `[[fields]]` key-values.

FeatureBase will supply values from specified `table` key if `[[fields]]` key/values are not supplied.

| Key | Description | Required | Additional information |
|---|---|---|---|
| `name` | Target column name | Yes |  |
| `source-type` | Target column data [^9ab2] | Yes | [Featurebase data types](/docs/sql-guide/data-types/data-types-home) |
| `source-path` | Nested JSON object parent and child | Kafka | Defaults to `name` value when not supplied |
| `source-column` | Target column name | Optional | When omitted, order of `[[fields]]` key-values are correlated to those in `<target-table>` |
| `primary-key` | Set to `"true"` for FeatureBase `_id` column | Only for `_id` column | Omit for other columns |


Specifies the FeatureBase column type the incoming data will be formatted as. For example, if a kafka message contains "foo":"6" the configuration for foo should contain source-type = "string" even if the foo column in FeatureBase is an Int type. If a source-type is not provided, it will default to the FeatureBase field’s type.


## Additional information

### Impala and PostgreSQL connection strings

* [Impala connection string documentation](https://impala.apache.org/docs/build/html/topics/impala_client.html){:target="_blank"}
* [PostgreSQL connection string documentation](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS){:target="_blank"}

### Batch keys

* There is a direct correlation between the `batch-size` value in relation to the speed of import and resource usage.
* `batch-max-staleness` values may result in timeouts while waiting for a data source
* `timeout` can be set to `0s` to disable

### Batch key time-unit

Batch keys that require `<integer-value><time-unit>` can use one or more of the following combinations, in descending order.

| Time unit | Declaration | Example |
|---|---|---|
| hour | `h` | 24h30m |
| minute | `m` | 30m45s |
| second | `s` | 45s10ms |
| milliseconds | `ms` | 10ms22us |
| microseconds | `us` | 22us28ns |
| nanoseconds | `ns` | 28ns |

## Further information

* [fbsql loader examples](/docs/tools/fbsql-examples/fbsql-loader-eg-home)
* [TOML arrays of tables](https://toml.io/en/v1.0.0#array-of-tables)
