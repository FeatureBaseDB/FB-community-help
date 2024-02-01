---
title: Migrate to a new cluster
layout: default
parent: Community cluster configuration
grand_parent: Community
nav_order: 3
---
# How do I migrate data to a new FeatureBase cluster?

{% include /com-cluster/com-cluster-migrate-summary.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [Learn how to setup a FeatureBase cluster](/docs/community/com-cluster/com-cluster-setup)
* [Learn how to estimate database resources](/docs/concepts/old-size-featurebase-database)

## Warnings

To avoid data loss, shut down:
* all nodes on the cluster to prevent write processes being interrupted
* all ingest processes on the cluster.

{: .warning}
Do not attempt to stall FeatureBase ingest consumers by creating an exclusive transaction.

## Cluster migration tasks

| Task | Description |
|---|---|
| Audit all processes currently running | e.g., ingest processes running on individual nodes |
| Stop all nodes | [Manage FeatureBase services](/docs/community/com-config/com-config-service-fb-manage) |
| Backup the source data | [Backup the FeatureBase Cluster](/docs/community/com-backup/com-config-backup) |
| Create target cluster | [Create a cluster](/docs/community/com-cluster/com-cluster-setup) |
| Restore backups to target | [Restore a FeatureBase cluster](/docs/community/com-backup/com-config-restore) |
| Test target | Run test queries and verify results are as expected |
| Redirect traffic to target | Redirect query and ingest processes to the new cluster |
| Start all processes on target | Start the nodes, ingester and any other processes discovered in the audit |
| Clean up source | Backup the original cluster then tear it down |
