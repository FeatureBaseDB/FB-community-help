---
title: Glossary
layout: default
parent: Concepts
has_children: false
nav_order: 1
---

# FeatureBase Glossary of terms
{: .no_toc }

{% include /page-toc.md %}

## 0-9

| Term | Context | Additional information |
|---|---|---|---|
| 1,048,576 | FeatureBase Community `batch-size` ingest flag | [CSV ingest flags](/docs/community/com-ingest/com-ingest-flags-csv) |

## A

| Term | Context | Additional information |
|---|---|---|---|
| ALL | PQL query | [PQL ALL read query](/docs/pql-guide/pql-read-all) |
| Anti-entropy | FeatureBase Community cluster | {% include /concepts/concept-anti-entropy.md %} |
| APPLY | PQL query | [PQL APPLY read query](/docs/pql-guide/pql-read-apply) |
| ARROW | PQL query | [PQL ARROW read query](/docs/pql-guide/pql-read-arrow) |
| Authentication | FeatureBase Cloud | [Manage cloud users](/docs/cloud/cloud-users/cloud-users-manage) |
| Authentication | FeatureBase Community | [Community authentication](/docs/community/com-auth/com-auth-manage) |

## B

| Term | Context | Additional information |
|---|---|---|
| Batch (ingest) | Data import to FeatureBase | [BULK INSERT statement](/docs/sql-guide/statements/statement-insert-bulk) |
| Bitmap<br/>Bitmap Index (BMI)<br/>Roaring B-Tree format (RBT) | FeatureBase database table rows | FeatureBase uses the [Roaring Bitmap](https://roaringbitmap.org/){:target="_blank"} format to store data. |
| Bit Sliced Indexing (BSI) | Multi-bit integer and timestamp data types used for Range, Min, Max and Sum queries | * [INT data type](/docs/sql-guide/data-types/data-type-int)<br/>* [TIMESTAMP data type](/docs/sql-guide/data-types/data-type-timestamp)<br/>* [MIN query](/docs/pql-guide/pql-read-min)<br/>* [MAX query](/docs/pql-guide/pql-read-max)<br/>* [SUM query](/docs/pql-guide/pql-read-sum) |

## C

| Term | Context | Additional information |
|---|---|---|
| CLEAR | PQL query | [PQL CLEAR write query](/docs/pql-guide/pql-write-clear) |
| CLEARROW | PQL query | [PQL CLEARROW write query](/docs/pql-guide/pql-write-clearrow) |
| Cluster | FeatureBase Community | A Cluster configuration of [FeatureBase nodes](#n) where data is evenly distributed and any node can respond to queries. Also defines how data is replicated and inter-node communication. |
| Concurrency | SQL/PQL Queries | Number of concurrent users running queries on data and how this may affect query latency |
| CONSTROW | PQL query | [PQL CONSTROW read query](/docs/pql-guide/pql-read-constrow) |
| COUNT | PQL query | [PQL COUNT read query](/docs/pql-guide/pql-read-count) |

## D

| Term | Context | Additional information |
|---|---|---|
| Database | FeatureBase database | Dedicated resources which contain tables and data. [Manage Cloud databases](/docs/cloud/cloud-databases/cloud-db-manage) |
| Data source | Source of data imported to FeatureBase | FeatureBase imports data from external data sources via HTTPS, Kafka, SQL or CSV ingest processing |
| Data types | Table columns | [Data types and constraints](/docs/sql-guide/data-types/data-types-home) |
| DELETE | PQL query | [PQL DELETE write query](/docs/pql-guide/pql-write-delete) |
| DIFFERENCE | PQL query | [PQL DIFFERENCE read query](/docs/pql-guide/pql-read-difference) |
| DISTINCT | PQL query | [PQL DISTINCT read query](/docs/pql-guide/pql-read-distinct) |

## E

| Term | Context | Additional information |
|---|---|---|
| EXTRACT | PQL query | [PQL EXTRACT read query](/docs/pql-guide/pql-read-extract) |

## F

| Term | Context | Additional information |
|---|---|---|
| Field | Table rows | Field data types to group rows into different categories:<br/>* [`bool`](/docs/sql-guide/data-types/data-type-bool)<br/>* [`int`](/docs/sql-guide/data-types/data-type-int)<br/>* [`set`](/docs/pql-guide/pql-write-set)<br/>* [`time`]()<br/>* [`timestamp`](/docs/sql-guide/data-types/data-type-timestamp)<br/>* [Mutex]()|
| Fields, ranked | Table rows | Rows kept in sorted order within the field. |
| Fragment | FeatureBase Community Row fields and database shards | A fragment typically corresponds to a file on disk which represents an intersection of:<br/>* field and shard, or<br/>* field, shard and `time` data type `time quantum` constraint |
| Freshness | Data import/ingest | How much time elapses from when a data point is "sensed" by the system, until that data point will affect the results of a query. |

## G

| Term | Context | Additional information |
|---|---|---|
| Group By | PQL Query | [PQL Group By Query](/docs/pql-guide/pql-read-groupby) |

## H

| Term | Context | Additional information |
|---|---|---|
|  |  |  |

## I

| Term | Context | Additional information |
|---|---|---|
| INCLUDESCOLUMN | PQL query | [PQL INCLUDESCOLUMN read query](/docs/pql-guide/pql-read-includescolumn) |
| INTERSECT | PQL query | [PQL INTERSECT read query](/docs/pql-guide/pql-read-intersect) |
| Index | FeatureBase tables | Denormalized top-level container roughly the same as an RDBMS table. |
| Ingest | Importing data to FeatureBase | [Manage community ingest](/docs/community/com-ingest/com-ingest-manage) |

## J

| Term | Context | Additional information |
|---|---|---|
|  |  |  |

## K

| Term | Context | Additional information |
|---|---|---|
|  |  |  |

## L

| Term | Context | Additional information |
|---|---|---|
| Latency | SQL/PQL Queries | How much time elapses between when a query is sent to a system and when the results return to the client. |


## M

| Term | Context | Additional information |
|---|---|---|
| MAX | PQL Read query | [PQL MAX Read query](/docs/pql-guide/pql-read-max) |
| MAX | SQL `int` constraint | [INT data type](/docs/sql-guide/data-types/data-type-int) |
| MAXSHARD<br/>`cluster.maxshard` parameter | FeatureBase Community Cluster flag | Zero-indexed shard allocation for current records, where `maxshard = 0` indicates 1 shard is allocated. |
| MIN | PQL Read query | [PQL MIN Read query](/docs/pql-guide/pql-read-min) |
| Min | SQL `int` constraint | [INT data type](/docs/sql-guide/data-types/data-type-int) |
| `./molecula-consumer-[csv | sql | kafka]` | Community ingest | [Manage community ingest](/docs/community/com-ingest/com-ingest-manage) |
| Mutex | String Data type | A FeatureBase field type similar to the Set type, in which only a single value can be set at any time. Conceptually similar to an enum type, but implemented on top of Set fields, with a performance cost from the single-value constraint. Not to be confused with the mutex synchronization primitive. |

## N

| Term | Context | Additional information |
|---|---|---|
| Node | FeatureBase Community Cluster | An individual running instance of FeatureBase server which belongs to a cluster. |
| Normalizing | The act of identifying the cardinality of your data in order to design the relationships between different tables. | [FeatureBase concepts](/docs/concepts/concepts-home) |
| NOT | PQL query | [PQL NOT read query](/docs/pql-guide/pql-read-not) |

## O

| Term | Context | Additional information |
|---|---|---|
| Options | PQL Options query | [PQL OPTIONS](/docs/pql-guide/pql-options) |
| Organization | FeatureBase Cloud | [FeatureBase Organization](/docs/cloud/cloud-org/cloud-org-manage) |

## P

| Term | Context | Additional information |
|---|---|---|
| PERCENTILE | PQL query | [PQL PERCENTILE read query](/docs/pql-guide/pql-read-percentile) |
| Pilosa | Former name of FeatureBase | [Pilosa + Molecula = FeatureBase blog post](https://www.featurebase.com/blog/pilosa-molecula-featurebase-a-story-of-evolution) |
| Pilosa Query Language (PQL) | Database queries | [PQL-Guide](/docs/pql-guide/pql-home) |
| Protobuf |  | Binary serialization format used for internal messages which can be used by clients as an alternative to JSON.  [Protobuf](https://developers.google.com/protocol-buffers/) |

## Q

| Term | Context | Additional information |
|---|---|---|
| Query (PQL) | Pilosa Query Language | [PQL Guide](/docs/pql-guide/pql-home) |
| Query (SQL) | Structured Query Language | [SQL Guide](/docs/sql-guide/sql-guide-home) |

## R

| Term | Context | Additional information |
|---|---|---|
| Record<br/>Row | Database table row | Equivalent to RDBMS table row. FeatureBase uses "Record" to avoid confusion |
| Replica<br/>`cluster.replicas` parameter | FeatureBase Community Clusters | Replica of shard within a cluster. `cluster.replicas` configuration parameter determines the number of shard replicas within a cluster where `replicas=1` indicates no copies have been made. |
| Roaring Bitmap | FeatureBase database | [roaringbitmap.org](https://roaringbitmap.org/){:target="_blank"} |
| Row |  | Rows are the fundamental vertical data axis within FeatureBase. Rows are namespaced by field so the same row ID in a different field refers to a different row. |
| Row `_id` |  |  |
| Row (Ranged) | PQL query | [PQL Row read query](/docs/pql-guide/pql-read-row) |
| Row (Timestamp) | PQL query | [PQL Row read query](/docs/pql-guide/pql-read-row) |
| Rows | PQL query | [PQL Rows read query](/docs/pql-guide/pql-read-rows) |

## S

| Term | Context | Additional information |
|---|---|---|
| SET | PQL query | [PQL SET write query](/docs/pql-guide/pql-write-set) |
| Shard | Roaring Bitmap format | [Roaring Bitmap Format](/docs/concepts/concept-roaring-bitmap-format) |
| Shard | FeatureBase Community Cluster | [FeatureBase Community cluster](/docs/community/com-cluster/com-cluster-manage) |
| ShardWidth<br/>`cluster.shardwidth` parameter | FeatureBase Community Cluster | [FeatureBase Community cluster](/docs/community/com-cluster/com-cluster-manage) |
| SORT | PQL query | [PQL SORT read query](/docs/pql-guide/pql-read-sort) |
| STORE | PQL query | [PQL STORE write query](/docs/pql-guide/pql-write-store) |
| SUM | PQL query | [PQL SUM read query](/docs/pql-guide/pql-read-sum) |

## T

| Term | Context | Additional information |
|---|---|---|
| Throughput | Data import/ingestion | Quantity of data that can be imported/ingested in a given time. May involve trade-off between Latency and Freshness |
| Time Quantum | SQL IDSET and STRINGSET constraint | [IDSET data type](/docs/sql-guide/data-types/data-type-idset)  <br/>[STRINGSET data type](/docs/sql-guide/data-types/data-type-stringset) |
| Timestamp | Data type | [Timestamp data type](/docs/sql-guide/data-types/data-type-timestamp) |
| TTL (Time To Live) |  IDSET and STRINGSET constraint | [IDSET data type](/docs/sql-guide/data-types/data-type-idset)  <br/>[STRINGSET data type](/docs/sql-guide/data-types/data-type-stringset) |
| TOML | FeatureBase Community configuration files | [Tom's Obvious Minimal Language (TOML)](https://github.com/toml-lang/toml) |
| TopK | PQL query | [PQL TOPK read query](/docs/pql-guide/pql-read-topk) |
| TopN | PQL query | [PQL TOPN read query](/docs/pql-guide/pql-read-topn) |

## U

| Term | Context | Additional information |
|---|---|---|
| UNION | PQL query | [PQL UNION read query](/docs/pql-guide/pql-read-union) |
| UNIONROWS | PQL query | [PQL UNIONROWS read query](/docs/pql-guide/pql-read-unionrows) |

## V

| Term | Context | Additional information |
|---|---|---|
| View | FeatureBase fields | Internally managed method to separate data layouts within a field. Not exposed by the API |
| View (Primary) | FeatureBase fields | Standard view that represents typical base data |
| View (Time-based) | FeatureBase fields | Automatically generated view for time quantum fields |

## W - X - Y - Z

| Term | Context | Additional information |
|---|---|---|
| XOR | PQL query | [PQL XOR read query](/docs/pql-guide/pql-read-xor) |
