---
title: Managing services
layout: default
parent: Community configuration
grand_parent: Community
---

# How do I manage the FeatureBase service?

You can start, stop and check the status of the `featurebase.service` using `systemctl` commands.

{: .important}
These instructions do not apply when [manually starting FeatureBase from the CLI](/docs/community/com-startup-connect)

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [Setup a featurebase `systemd` service](/docs/community/com-config/com-config-service-fb-setup)
* Obtain `sudo` credentials for the system

## Manage FeatureBase service

| Description | Command |
|---|---|
| Verify FeatureBase service status | `sudo systemctl status featurebase` |
| Start FeatureBase services | `sudo systemctl start featurebase` |
| Stop FeatureBase services | `sudo systemctl stop featurebase` |
| Restart FeatureBase services | `sudo systemctl restart featurebase` |
| Run featureBase automatically after a reboot | `sudo systemctl enable featurebase.service` |
