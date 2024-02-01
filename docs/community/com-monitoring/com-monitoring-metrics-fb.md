---
title: FeatureBase Metrics
layout: default
parent: Community monitoring
grand_parent: Community
nav_order: 10
---

# FeatureBase Metrics reference

FeatureBase metrics are labelled according to a key-value format which are used with multiple metrics including:

| FeatureBase metric | Naming convention |
|---|---|
| Index | `index:<indexname>` |
| Field | `field:<fieldname>` |
| Node ID | `node_id:<nodeID>` |

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [Manage monitoring](/docs/community/com-monitoring/com-monitoring-home)

## Cache metrics

| Metric name | Description |
|---|---|
| `featurebase_recalculate_cache_total` | Count of cache recalculations |
| `featurebase_invalidate_cache_total`| Count of cache invalidations|
| `featurebase_invalidate_cache_skipped_total`| Count of skipped cache invalidations |
| `featurebase_dirty_cache_total` | Count of dirty cache |
| `featurebase_rank_cache_length` | Gauge of cache length |
| `featurebase_cache_threshold_reached_total` | Count of times cache reaches threshold and trimming is required |

## Cluster metrics

{: .note}
{% include /concepts/concept-anti-entropy.md %}

| Metric name | Description | featurebase.conf parameter |
|---|---|---|
| `featurebase_antientropy_total` | Count of times the anti-entropy process runs | FEATUREBASE_ANTI_ENTROPY_INTERVAL
| `featurebase_antientropy_duration_seconds`| Histogram of duration of the anti-entropy process |

* [Learn how to setup a FeatureBase Community cluster](/docs/community/com-cluster/com-cluster-setup)

## Field metrics

| Metric name | Description |
|---|---|
| `featurebase_create_field_total`| count of successful field creations |
| `featurebase_delete_field_total`| count of successful field deletions |
| `featurebase_sync_field_duration_seconds` | timing histogram of the field sync process |

## Import/Ingest metrics

| Metric name | Description |
|---|---|
| `featurebase_importing_total` | Count of imported set bits, before importing |
| `featurebase_imported_total`| Count of imported set bits, after successfully importing (number that actually changed) |
| `featurebase_clearing_total`| Count of imported clear bits, before importing |
| `featurebase_cleared_total` | Count of imported clear bits, after successfully importing (number that actually changed) |

## Index metrics

| Metric Name | Description |
|---|---|
| `featurebase_create_index_total`| Count of successful index creations |
| `featurebase_delete_index_total`| Count of successful index deletions |
| `featurebase_sync_index_duration_seconds` | Timing histogram of the index sync process |

## Query metrics

Query metrics are lower-case and use the naming convention:

```
query_<statement>_<modifier>
```

| Metric name | Description |
|---|---|
| `featurebase_query_row_total` | count of row queries |
| `featurebase_query_row_bsi_total` | count of row queries that operate on a BSI (integer) field |
| `featurebase_set_bit_total` | count of set bits, set by a query (as opposed to an import) |
| `featurebase_clear_bit_total` | count of clear bits, set by a query (as opposed to an import) |

## Request metrics

| Metric name | Description | Additional information |
|---|---|---|
| `featurebase_http_request_duration_seconds` | Timing histogram of all http requests | [http_request_duration_seconds](#http_request_duration_seconds) |
| `featurebase_grpc_request_pql_unary_query_duration_seconds` | Timing histogram of the query processing part of unary GRPC requests |
| `featurebase_grpc_request_pql_unary_format_duration_seconds`| Timing histogram of the result formatting part of unary GRPC requests |
| `featurebase_grpc_request_pql_stream_query_duration_seconds`| Timing histogram of the query processing part of streaming GRPC requests |
| `featurebase_grpc_request_pql_stream_format_duration_seconds` | Timing histogram of the result formatting part of streaming GRPC requests |

## Shard metrics

| Metric name | Description |
|---|---|
| `featurebase_delete_available_shard_total`| Count of successful shard deletions |
| `featurebase_maximum_shard` | Gauge of the maximum shard in the index. | Value will be a multiple of 256 for indexes with `keys: true` due to key partitioning in shards. |

## Other metrics

| Metric name | Description | Additional information |
|---|---|---|
| `featurebase_snapshot_duration_seconds` | timing histogram of the snapshot process |  |
| `featurebase_block_repair_total`| count | (labels: primary={true,false}) |

## Additional information

### http_request_duration_seconds

Additional arguments include:

| Argument | Description | Additional information |
|---|---|---|
| `where` `internal` | Indicates an in-cluster request |
| `where` `external` | Indicates a request from outside the cluster |
| `path` | The path used to make a request. | For example, `/index/<index>/query` for an HTTP PQL query request. |
| `useragent` | The user agent string used to make a request. | For example, `curl/7.54.0` |
| `method` | The method used to make a request. | For example, `POST` |
| `slow` | `true` or `false` indicates a "slow query" based on the `long-query-time` configuration option for FeatureBase |  |

<!-- OLD as future.rename has been depreciated
where `featurebase` is either `featurebase` if the [`--future.rename` configuration flag](/docs/community/old-versions/old-featurebase-rename) is set, or `pilosa`.-->
