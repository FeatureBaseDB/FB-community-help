---
title: Max-map-count
layout: default
parent: Community configuration
grand_parent: Community
---

# `max-map-count` reference
{: .no_toc }

Linux systems limit memory maps for processes and users.

The `max-map-count` parameter in the `/featurebase.conf` TOML configuration file allows you to set a maximum limit on active memory maps.

This parameter is disabled by default.

`max-map-count` should be set to a minimum 10% lower than the system default.

{: .note}
The actual number of active memory maps can be slightly higher than defined.

{% include page-toc.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}

## Step 1 - Query memory limits

| Operating System | Query memory limit |
|---|---|
| Linux | * `cat /proc/sys/vm/max_map_count`, OR<br/>* `/sbin/sysctl vm.max_map_count` |
| MacOS | [Open MacOS Activity Monitor](https://support.apple.com/en-au/guide/activity-monitor/actmntr1001/mac){:target="_blank"} |

## Step 2 - Alter the FeatureBase max-map-count parameter

Set the `max-map-count` parameter to a minimum 10% less than the max-

* Open a CLI then CD to `*/featurebase/opt`
* Edit `featurebase.conf`.
* Alter the `max-map-count` parameter as required
* Save `featurebase.conf`
* Restart FeatureBase.
