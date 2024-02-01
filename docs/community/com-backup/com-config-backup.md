---
title: Backup FeatureBase
layout: default
parent: Community backup and restore
grand_parent: Community

---

# How do I backup my FeatureBase Community installation?

You can create FeatureBase backups on the CLI using the `featurebase backup` or `featurebase backuptar` commands and suitable flags.

## What's included in the backup?

A featurebase backup includes:
* schema
* key translation data
* indexes
* Allocated IDs
* Unaltered records

## What's excluded from the backups

* External lookup database (backup separately)
* IDs committed by the auto ID feature before the backup starts
* Node configurations
* Other FeatureBase components

## Before you begin

{% include /com-install/com-install-before-begin.md %}
<!--* [Learn how to set up authentication for FeatureBase Community](/docs/community/com-config/com-config-authentication)-->
* Obtain Administrator permissions to the FeatureBase cluster

{: .important}
Stop any jobs that create, alter or delete records before running a backup. Only existing, unaltered records are guaranteed to be backed-up.

## What's the difference between backup and backuptar?

### backup

The `backup` command should be used when you are prioritizing backup speed and want to write the backup to local disk. This command allows for the parallelization of copying rbf files, so it can complete faster than `backuptar`. Additionally, this command will check if there is space on the server for the backup before it runs. The output of this command are all of the uncompressed directories and files.

### backuptar

The `backuptar` command copies the rbf files in an append fashion and streams them to output one at a time. This means it cannot be parallelized, but it can be helpful if you'd like pipe this stream into other commands, such as writing the backup to another location other than local disk. This command will generally take longer than `backup` as it backs up up each file sequentially. The output of this command is a file in a compressed tar format.

## Syntax

```sh
featurebase [backup|backuptar]
  {--host
    [ {https://hostname:port --auth-token <token> <tls_flags>}
      | hostname:port
    ]
  [--no-sync]
  {[-o|--output] /backup-directory/path/}
```

## Arguments

### Backup flags

| Argument | Description | Required? | Additional information |
|---|---|---|---|
| `-no-sync` | Backup runs without the operating system moving data to persistent storage. | Optional | [Override storage synchronization](#override-storage-synchronization) |
| `-o` or `-output` | Backup output directory. Add file name with `backuptar` | Yes |  |
| `/backup-directory/path/` | Backup directory which will be created if it does not exist. Add file name with `backuptar` | Yes | Backup process will fail if directory not empty |

### Common Backup/Restore flags

{% include /com-backup/com-config-flags-backup-restore-common.md %}

### TLS authentication flags

{% include /com-backup/com-config-flags-backup-restore-tls.md %}

## Additional information

{% include /com-config/com-config-primary-host-extra.md %}

### Override storage synchronization

* By default, `featurebase backup` will wait for all backup files to be committed to persistent storage before terminating.
* `no-sync` overrides this setting

{: .warning}
Use of `no-sync` risks loss of backup date should the backup system lose power.

## Examples

{: .warning}
`featurebase backup` overwrites any files in the destination folder. `tar` the backup folder then move the file to a new location **before** performing a backup.

### Increased backup speed

Increase backup speed by setting the concurrency value and turning off sync.

```
featurebase backup
  --concurrency 2
  --host featurebase-hostname-or-ip:10101
  -o /path/to/backup/
  --no-sync
```

### Host tar backup with gzip

```
featurebase backuptar
  --host featurebase-hostname-or-ip:10101
  --output - | gzip > backup.tar.gz
```

### Authenticated backup

```
featurebase backup
  --host https://featurebase-hostname-or-ip:10101
  -o /backups/featurebase-backups
  --auth-token <token>
```

### Backup with TLS

```
featurebase backup
  --host featurebase-hostname-or-ip:10101
  -o /path/to/backup/
  --tls.ca-certificate ca.crt
  --tls.certificate client.crt
  --tls.key client.key
```

### No sync backup with manual backup to remote folder

```sh
featurebase backup --host featurebase-hostname-or-ip:10101 -o /path/to/backup/ --no-sync
```
