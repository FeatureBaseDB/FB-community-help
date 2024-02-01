---
title: Linux memory limits
layout: default
parent: Community troubleshooting
grand_parent: Community
---

# Issue - Linux memory limits

{% include /com-issues/com-issue-memory-process-summary.md %}

## Solutions

### Alter the FeatureBase max-map-count

* [Alter max-map-count parameter](/docs/community/com-config/com-config-max-map-count)

### Alter memory limits for current session

{% include /com-issues/com-issue-ulimit-summary.md%}

* Open a CLI then run the following command with an appropriate value:

```
ulimit -m <value>
```

* Verify the change:

```
ulimit -m
```

### Increase memory-mapped regions for the current session

Refer to the following StackOverflow question to increase max_map_count on different Linux systems:

* [Stackoverflow max_map_count](https://stackoverflow.com/questions/42889241/how-to-increase-vm-max-map-count#50371108){:target="_blank"}

## Set maximum threads per process

* [Learn how change max threads per process](https://www.baeldung.com/linux/max-threads-per-process){:target="_blank"}

## Further information

* [Learn how to use `ulimit` to change the open file limit](https://linuxconfig.org/limit-user-environment-with-ulimit-linux-command){:target="_blank"}
* [Learn about Linux max_map_count](https://access.redhat.com/solutions/99913){:target="_blank"}
