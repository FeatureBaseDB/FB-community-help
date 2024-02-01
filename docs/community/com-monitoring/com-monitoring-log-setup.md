---
title: Setup logging
layout: default
parent: Community monitoring
grand_parent: Community
nav_order: 1
---

# How do I setup error logs?

FeatureBase is configured to output error logs to `/var/lib/featurebase/` by default.

FeatureBase components re-open the log file on receipt of the HUP signal.

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [Install and configure Linux logrotate](https://linux.die.net/man/8/logrotate){:target="_blank"} if not already installed
* Setup CRON to run `logrotate` daily if not already setup

## Create a FeatureBase logrotate configuration file

This configuration will clear FeatureBase logs daily.

You can also create logrotate configuration files using these steps and substituting other FeatureBase log names.

* CD to `/etc/logrotate.d`
* Create a new logrotate script

```
sudo nano featurebase
```

* Add the following to the file:

```text
/var/log/molecula/featurebase.log {
    missingok
    notifempty
    rotate 7
    daily
    compress
    postrotate
        pkill -HUP featurebase
        # kill -HUP $(cat /path/to/pidfile) if using a PID file.
    endscript
}
```

* Write the file then exit.

## Further information

* [Learn about linux logrotate](https://linuxconfig.org/logrotate){:target="_blank"}
* [Learn about Linux SIGHUP](https://en.wikipedia.org/wiki/SIGHUP){:target="_blank"}
