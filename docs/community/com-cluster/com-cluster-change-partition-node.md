---
title: Safely change parameters
layout: default
parent: Community cluster configuration
grand_parent: Community
nav_order: 4
---

# How do I safely change cluster parameters?

{% include /com-cluster/com-cluster-partition-node-extra.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [Create a FeatureBase Cluster](/docs/community/com-cluster/com-cluster-setup)

## Change `partition-to-node-assignment` on a cluster

Follow this process to safely change the cluster parameter without losing your data.

| Task | Additional information |
|---|---|
| Take a backup of the cluster | [Backup FeatureBase](/docs/community/com-backup/com-config-backup) |
| Create a new empty cluster | [Create a FeatureBase Cluster](/docs/community/com-cluster/com-cluster-setup) |
| Change `partition-to-node-assignment` in the new cluster `featurebase.conf` TOML configuration files |  |
| Restore your backup to the new cluster | [Restore FeatureBase](/docs/community/com-backup/com-config-restore) |
