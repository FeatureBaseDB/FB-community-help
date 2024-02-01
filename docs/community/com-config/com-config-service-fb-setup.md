---
title: Setup FeatureBase service
layout: default
parent: Community
nav_order: 4
---

# How do I setup a FeatureBase `systemd` service?
{: .no_toc }

Setup FeatureBase Community to run as a `systemd` service.

{: .note}
You can also [startup FeatureBase from the CLI](/docs/community/com-startup-connect)

{% include /page-toc.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [Create a user to run the service](https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command/){:target="_blank"}
* Obtain `sudo` privileges

{: .important}
`systemd` services are created in `/etc/systemd/system`

## `systemd` parameters for featurebase.service

Save these settings as `featurebase.service`

```
[Unit]
    Description="<human-readable-description>"

[Service]
    RestartSec=<integer>
    Restart=on-failure
    User=<featurebase-user>
    ExecStart=/usr/local/bin/featurebase/opt/featurebase server

[Install]
    WantedBy=multi-user.target
```

## Parameters

| Parameter | Description | Default |
|---|---|
| `Description` | Human readable service description | |
| `RestartSec=<integer>` | Seconds after FeatureBase will restart | `RestartSec=30` |
| `Restart=onfailure` | FeatureBase will automatically restart on failure |  |
| `User=<featurebase-user>` | The service will run under this user |  |
| `Execstart=` | Path to startup files | `/usr/local/bin/featurebase/opt/featurebase server` |
| `WantedBy=multi-user.target` |   | [multi-user-target description](https://www.baeldung.com/linux/systemd-target-multi-user#the-multi-user-target){:target="_blank"} |

## Additional information

* You must run `sudo systemctl daemon-reload` to refresh `systemd` after `featurebase.service` is saved.

## Next step

* [Learn how to manage the featurebase service](/docs/community/com-config/com-config-service-fb-manage)

## Further information

* [Learn about `systemd` and related services](https://linuxhandbook.com/create-systemd-services/){:target="_blank"}
