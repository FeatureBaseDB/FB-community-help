---
title: Linux file limits
layout: default
parent: Community troubleshooting
grand_parent: Community
---

# Issue - Linux file limits

{% include /com-issues/com-issue-open-file-limit-summary.md %}

{: .note}
FeatureBase recommends a minimum of 256K for open file limits on Linux systems.

## Solutions

### Alter the FeatureBase max-file-count limit

* [Alter max-file-count](/docs/community/com-config/com-config-max-file-count)

### Alter `ulimit` for current session

{% include /com-issues/com-issue-ulimit-summary.md%}

* Open a CLI then run this command with an appropriate value:

```
ulimit -n <value>
```

* Verify the change:

```
ulimit -n
```

### Set a persistent open file limit value

There are four ways to change the open file limit so it persists after reboot.

* Open a CLI then edit one or all the following files:

| Edit | Parameter to set |
|---|---|
| `/etc/security/limits.conf` | `nofile` |
| `/etc/security/limits.d/<username>.conf` | `nofile` |
| `/etc/susctl.conf` | `fs.file-max` and/or `vm.max_map_count` |
| `/etc/sysctl.d/*.conf` | `fs.file-max` |

* Restart your session for the change to take effect.

## Further information

* [Learn about limits.conf](https://www.geeksforgeeks.org/limits-conf-file-to-limit-users-process-in-linux-with-examples/){:target="_blank"}
* [Learn how to troubleshoot Linux "too many open files" error](https://www.baeldung.com/linux/error-too-many-open-files){:target="_blank"}
* [Learn how to use `ulimit` to change the open file limit](https://linuxconfig.org/limit-user-environment-with-ulimit-linux-command){:target="_blank"}
* [Learn how to use `prlimit` to change the open file limit](https://www.baeldung.com/linux/prlimit){:target="_blank"}
