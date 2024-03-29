---
title: Install on Linux
layout: default
parent: Getting started
nav_order: 1
---

# How do I install FeatureBase Community on Linux?

Install FeatureBase Community in a Linux environment such as Ubuntu.

{% include /page-toc.md %}

## Before you begin

* [Learn about FeatureBase Community](index)
* [Learn how to install FeatureBase Community](/docs/community/com-getstart/com-getstart-home)

## Step 1 - Establish the correct release to install

* Open [FeatureBase releases on GitHub](https://github.com/FeatureBaseDB/FeatureBase/releases){:target="_blank"}
* Make note of the:
  * version (e.g., 3.32.0)
  * kernel = `linux`
  * processor (arm or amd)

{% include /com-install/com-install-release-download.md%}

{% include /com-install/com-install-release-untar-download.md%}

{% include /com-install/com-install-setup-install-dir.md %}

## Next step

You can choose to:
* [Startup and connect to FeatureBase using the CLI](/docs/community/com-getstart/com-startup-connect)
* [Setup a `systemd` service to automatically Run FeatureBase](/docs/community/com-getstart/com-config-service-fb-setup)
