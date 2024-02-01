---
title: Ingest from Kafka static schema
layout: default
parent: Import data
grand_parent: Community
nav_order: 13
---

# How do I ingest data from a Kafka static schema?

Ingesting data from a Kafka static schema involves the use of:

* JSON message blob which defines the source data
* JSON document that defines the source data as an array that matches the destination table structure
* Specifying the JSON document using the `static` CLI flag when running `./molecula-consumer-kafka-static`

## Before you begin

* [Install Apache Kafka on your system](https://kafka.apache.org/downloads){:target="_blank"}
* [Install Apache Zookeeper on your system](https://zookeeper.apache.org/releases.html){:target="_blank"}
* [Install Apache Avro on your system](https://avro.apache.org/project/download/){:target="_blank"}
* [Learn about Kafka static schema settings](https://kafka.apache.org/20/javadoc/org/apache/kafka/connect/data/Schema.html){:target="_blank"}
* Define your data in a Kafka message/blob

## Kafka static schema definition

The schema file is formatted as an array of JSON objects, each of which describes one ingester field.

```json
[
	{
		"name": "<featurebase-field>",
		"path": ["<JSON-config-file>"],
		"type": "<data type>",
		"config": {
			"parameters": "<Optional field data type>"
		}
	}
]
```

## Kafka static JSON parameters

| Parameter | Description | Required | Additional |
|---|---|---|---|
| `name` | Destination field in FeatureBase. | Yes |  |
| `path` | The path option is a String array of JSON object keys which are applied in order to locate the value of the `name` field. | Yes | [path-parameters](#path-parameters) |
| `type` | the field data type | Yes |  |
| `config` | optional constraints and parameters for the data type | No |  |
| `parameters` | optional constraints and parameters for the data type | No |  |

## Additional information

* The Schema is specified with a JSON document to ensure compatibility with complex JSON message formats
* The `name`, `path`, and `type` parameters are repeated for each record to import to FeatureBase.

### `path` parameter

* Array indexing is not supported
* Errors are returned if a value is missing from the `path`
* Missing values can be ignored by adding the `--allow-missing-fields` flag when using `./molecula-consumer-kafka-static`

### `type` data types

{% include /sql-guide/datatype-mapping.md %}

{% include /com-ingest/com-ingest-extra-map-avro-idk.md %}

### Default `config` parameters

<!-- Question for Jacob -- what **are** the default config parameters?? -->

### Custom config parameters

The following information applies to `"config": "parameters"`:

| Value/Data type | Description | Default | Required | Additional |
|---|---|---|---|---|
| `"CacheConfig"` | Specify the size and type of a [`TopN`](/docs/pql-guide/pql-read-topn) cache for a `set` or `mutex` field. |  | `TopN` cache | * Does not affect time fields<br/>* [TopN cache example](#topn-cache-example) |
| `"CustomUnit"` | Specify an integer time unit using standard units "ns", "us", "ms", "s", "m", or "h" |  |  |  |
| `"Epoch"` |  The incoming number will be interpreted as the number of `Unit` since `Epoch`. |   | Incoming value is numeric | Unix epoch | * Cannot be used for `timestamp` strings<br/>*  | [Time stamp](https://en.wikipedia.org/wiki/Timestamp) |
| `"ForeignIndex"` | Index of columns in target used to reference table columns |  |  |  |
| `"Granularity"` | Standard units used to represent incoming data: `s`, `ms`, `us`, `ns` | `"s"` |  |  |
| `"Layout"` | Format used to parse time strings  | RFC3339 | [Golang RFC339 format definition ](https://golang.org/pkg/time/#pkg-constants){:target="_blank"} |
| `"Max"` | The maximum possible value for an integer | 2^63 - 1 |  | [Wolfram Alpha representation](https://www.wolframalpha.com/input/?i=2%5E63-1){:target="_blank"} |
| `"Min"` | Minimum possible value for an integer | -2^63 |  | [Wolfram Alpha representation](https://www.wolframalpha.com/input?i=-2%5E63-1){:target="_blank"} |
| `"Mutex": "true"` | Data is ingested into a mutex field |  |  |  |
| `"Mutex": "false"` | Data is ingested into a `set` field |  |  |  |
| `"Quantum"` | Time quantum constraint used when ingesting data from `recordTime` field to a `time` column.  |  |  |  |
| `"Scale"` | number of digits of precision to store after the decimal point |  |  |  |
| `"TTL"` |  |  |  | [Time to live](#ttl-time-to-live) |
| `"Unit"` | Standard units used to store timestamp for  are `"d"`, `"h"`, `"m"`, `"s"`, `"ms"`, `"us"`, `"ns"` or `"c"` for custom (using `"CustomUnit"` for `dateInt`) | `"s"` | * `dateInt` data type<br/>* `recordtime` when incoming data is numeric<br/>* `timestamp` when incoming data is numeric |

### Cache

* Improve precision by increasing the cache size for the `"ranked"` cache type which increases the number of top rows tracked within a shard of data
* Set the data type to `"none"` to disable the cache.

### recordTime fields

`recordTime` fields have two modes.

| Mode | Result |
|---|---|
| `"Epoch"` or `Unit` set | Incoming data is interpreted as numeric |
| Other values | Incoming data is interpreted as a date/timestamp and parsed with the `"Layout"` parameter |

### TopN cache

`TopN` cache memory usage is:
* jointly proportional to cache size and number of shards when the cache is full
* for example, the field is greater than the `CacheSize` rows within each shard)

Disabling `TopN` cache disables `TopN`

### Querying

Use a [`TopK`](/docs/pql-guide/pql-read-topk) or sorted [`GroupBy`](/docs/pql-guide/pql-read-groupby) when operating a field without a cache.

{% include /sql-guide/timequantum-additional.md %}

{% include /sql-guide/ttl-additional.md %}

## Examples

### `path` example

Select `1` within `{"a":{"b":{"c":1}}}`

```
"path": ["a","b","c"]
```

### TopN cache example

This "cache" is used for the `TopN` approximation.
The default setting is:
```json
{
	"CacheType": "ranked",
	"CacheSize": 50000,
}
```

### Ingest two values from a Kafka message

{% include /com-ingest/com-ingest-eg-kafka-static-msg-2-val.md %}

{% include /com-ingest/com-ingest-eg-kafka-static-json-2-val.md %}

{% include /community/com-config-cli-run.md %}

{% include /com-ingest/com-ingest-eg-kafka-static-flags-2-val.md %}

### Ingest data from an array of values

{% include /com-ingest/com-ingest-eg-kafka-static-msg-array.md %}

{% include /com-ingest/com-ingest-eg-kafka-static-json-array.md %}

{% include /community/com-config-cli-run.md %}

{% include /com-ingest/com-ingest-eg-kafka-static-flags-array.md %}

## Further information

* [RFC339 definition](https://www.rfc-editor.org/rfc/rfc3339){:target="_blank"}

## Next step

* [Kafka static ingest consumer flags reference](/docs/community/com-ingest/com-ingest-flags-kafka-static)
