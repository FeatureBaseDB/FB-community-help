---
title: Startup & connect
layout: default
parent: Community
nav_order: 4
---

# How do I startup and connect to FeatureBase Community?

These instructions explain how to run FeatureBase Community after you’ve installed on the target system.

{: .note}
You can also [Setup a systemd service for FeatureBase Community](/docs/community/com-config/com-config-service-fb-setup)

{% include /page-toc.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}

{: .note}
The FeatureBase Community UI does not currently support Apple Safari. Install Mozilla Firefox or Google Chrome on your system instead.

## Start the FeatureBase Community server

* Open a terminal and CD to `*/featurebase/opt`.
* Run the following command:

```
./featurebase server
```


## Confirm FeatureBase server is running

* Run this command to verify FeatureBase is running on the system.

```
curl localhost:10101
```

## How do I connect to FeatureBase community?

FeatureBase Community is available by default at:

```
http://localhost:10101/
```


## Troubleshooting

* [Issue: FeatureBase Community won't startup on Mac](/docs/community/com-troubleshooting/com-issue-mac-startup)

## Further information

* [Learn how to setup FeatureBase server as a Linux service](/docs/community/com-config/com-config-service-fb)
