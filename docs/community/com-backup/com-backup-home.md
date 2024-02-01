---
title: Community backup and restore
layout: default
parent: Community
has_children: true
nav_order: 11
has_toc: false
---

# How do I backup and Restore FeatureBase Community Databases?
{: .no_toc }

FeatureBase Community databases can be backed-up and restored for a number of reasons, including the following:

* General backup and restore of a FeatureBase database
* Resizing a FeatureBase cluster
* Making changes to your `featurebase.conf` settings, including the cluster `partition-to-node-assignment` parameter.

{% include page-toc.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [Import data to FeatureBase Community](/docs/community/com-ingest/com-ingest-manage)

## How do I backup a FeatureBase database?

* [Backup Featurebase](/docs/community/com-backup/com-config-backup)

## How do I verify backups?

Use the following checklist to verify backups function correctly.

| Task | Description |
|---|---|
| Backup source | [Backup a FeatureBase cluster](/docs/community/com-backup/com-config-backup) |
| Set up test environment | Backup testing can be performed using a single local node provided the system has sufficient memory and disk space. |
| Restore source backup to test environment | [Restore a FeatureBase cluster](/docs/community/com-backup/com-config-restore) |
| Test target | Run queries and verify results are as expected |

## How do I restore a FeatureBase database?

* [Restore a FeatureBase cluster](/docs/community/com-backup/com-config-restore)

## How do I migrate a FeatureBase cluster?

{% include /com-cluster/com-cluster-migrate-summary.md %}

* [Learn about the process of migrating a FeatureBase cluster](/docs/community/com-cluster/com-cluster-migrate)
