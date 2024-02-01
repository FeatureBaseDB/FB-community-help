---
title: Community cluster configuration
layout: default
parent: Community
has_children: true
nav_order: 12
---
# How do I manage a FeatureBase Community cluster?

A FeatureBase Cluster is a distributed system that is maintained by `etcd` which runs on each node.

The system requires at least three nodes to maintain data consistency and fault tolerances. <!--from https://stackoverflowteams.com/c/molecula/questions/179-->

<!-- From glossary

Shard
Records are sharded on a preset width. Shards are operated on in parallel and are evenly distributed across the cluster via a consistent hash.

ShardWidth
This is the number of records in a shard. ShardWidth defaults to 2^20 or about one million. It can be modified, but only at compile time, and before ingesting any data.
-->

{% include page-toc.md %}

## Before you begin
{% include /com-install/com-install-before-begin.md %}

## How do I determine resources for my cluster?

* [Learn how to determine resources for FeatureBase databases](/docs/concepts/old-size-featurebase-database)

## How do I setup a cluster?

* [Learn how to setup a FeatureBase cluster](/docs/community/com-cluster/com-cluster-setup)

## How do I migrate a cluster?

{% include /com-cluster/com-cluster-migrate-summary.md %}

* [Learn about the process of resizing a FeatureBase cluster](/docs/community/com-cluster/com-cluster-migrate)

## How do I safely change the `partition-to-node-assignment` parameter?

* [Safely change cluster partition-to-node-assignment](/docs/community/com-cluster/com-cluster-change-partition-node)

## How do I setup cluster metrics?

Cluster metrics are a subset of FeatureBase metrics.

* [Learn about FeatureBase metrics](/docs/community/com-monitoring/com-monitoring-metrics-fb#cluster-metrics)
* [Learn how to setup FeatureBase metrics](/docs/community/com-monitoring/com-monitoring-metrics-runtime-enable)
