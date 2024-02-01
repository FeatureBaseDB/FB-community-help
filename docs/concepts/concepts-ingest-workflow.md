---
title: Ingest workflow
layout: default
parent: Data modeling overview
grand_parent: Concepts
nav_order: 4
---

# Conceptualising the Ingest workflow


The FeatureBase Ingest Development Kit is a system for efficiently loading large amounts of data into a FeatureBase cluster.
It provides services which convert other data formats to FeatureBase's Roaring data format and load it into FeatureBase.

The ingester has three steps:
1. Collect records from a data source.
2. Translate records into FeatureBase's Roaring Bitmap format.
3. Copy the converted data into FeatureBase.

## 1. Collect records from a data source.

This process operates in large "batches" of records.
The entirety of a single batch is copied into FeatureBase at the same time.
Large batches mean that the per-batch overhead is less significant.
A batch is created once a specified number of records have been pulled.

{: .note}
When using the Kafka ingester, a smaller batch will be created if Kafka stops supplying records for at least a second.

<!--
In FeatureBase `v2.2` and newer, the ingester has a `--track-progress` CLI option which periodically logs the number of records which have been pulled from a source, as well as the lifetime average record sourcing rate.-->

### 2. Translate records into FeatureBase's Roaring Bitmap format.

During the first step, the records are accumulated in a mostly uncompressed format. In order to compress them, the ingester needs to acquire "Key IDs" for all keyed rows and columns. In the case of a string field, there is one ID for each string value which can be present in the field. For a string-keyed index, there is one ID for each row. If the specified row/column did not previously exist, FeatureBase will generate an ID in this step.

The process of obtaining these Key IDs is referred to as translation in the ingester's logs:

```text
2020/07/20 14:14:47 translating batch of 10 took: 10.1172ms
```

Once all of the IDs have been mapped, the ingester converts the batch into roughly the format that FeatureBase will store it in.

### 3. Copy the converted data into FeatureBase.

The ingester acquires a transaction in order to ensure that no other application accesses an incompletely written index, and then copies all of the data into FeatureBase. This step is typically bottlenecked either by the network or the storage device backing the FeatureBase cluster.

The process of copying this data into FeatureBase is referred to as "flushing" in the ingester's logs, and typically takes a very small amount of time.

For example:

```text
2020/07/20 14:14:47 flushing batch of 10 to fragments took 84.2µs
```
