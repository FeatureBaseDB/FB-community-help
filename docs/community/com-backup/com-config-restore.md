---
title: Restore FeatureBase
layout: default
parent: Community backup and restore
grand_parent: Community
---

# How do I restore from a backup?

The `featurebase restore` and `featurebase restoretar` commands are used to restore a backup to a new FeatureBase cluster of any size.

{: .warning}
Restoring should **only** be executed against an empty cluster. Data loss and/or instability **will** occur if this is attempted on a live cluster with data.

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [Backup FeatureBase Community](/docs/community/com-backup/com-config-backup)
* Obtain Administrator permissions to the destination FeatureBase cluster

## What's the difference between restore and restoretar?

### restore

The `restore` command should be used when your source is a directory (an uncompressed backup outputted from the `backup` command) and is located on local disk. This command allows for parallelization of restoring rbf files, so it can complete faster than `restoretar`. 

### restoretar

The `restoretar` command should be used when your source is a tar file (an tar compressed backup outputted from the `backuptar` command). This command can accept a streamed input if the source is not on local disk. This command will generally take longer than `restore` as it restores each file sequentially. 

## Syntax

```
featurebase [restore|restoretar]
  {--host
    [ {https://hostname:port --auth-token <token> <tls_flags>}
      | hostname:port
    ]
  {[-s|-source] /directory/path/}
```

## Restore flags

| Argument | Description | Required? |
|---|---|---|
| `-s` or `-source` | Source directory or backup file. | Yes |
| `/directory/path/` | Directory containing backup or `.tar` backup file | Yes |

## Common Backup/Restore flags

{% include /com-backup/com-config-flags-backup-restore-common.md %}

## TLS authentication flags

{% include /com-backup/com-config-flags-backup-restore-tls.md %}

## Additional information

{% include /com-config/com-config-primary-host-extra.md %}

### Concurrency

The exact number of optimal restore operations varies depending on network/disk speeds, and should be determined experimentally when doing a test-restore.

{: .warning}
High `concurrency` values may exhaust system resources and impact applications using the cluster.

| Use case | Set concurrency |
|---|---|
| N destination nodes | `concurrency = N` | <!--In most scenarios, one per node is a reasonable conservative selection.-->
| Production cluster | Low or default of 1 |
| New cluster with no data | Not applicable |

## Examples

### Use concurrency to increase restoration speed

```
featurebase restore
  --concurrency 8
  --host featurebase-hostname-or-ip:10101
  -s /path/to/backup/
```

### Use tar restore

```
featurebase restoretar
  --host featurebase-hostname-or-ip:10101
  -s /path/to/backup/backup.tar
```

### Restore with TLS flags

```
featurebase restore
  --host featurebase-hostname-or-ip:10101
  -s /path/to/backup/
  --tls.ca-certificate ca.crt
  --tls.certificate client.crt
  --tls.key client.key
```
