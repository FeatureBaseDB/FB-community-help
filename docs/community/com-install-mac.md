---
title: Install on MacOS
layout: default
parent: Community
has_children: false
nav_order: 2
---

# How do I install FeatureBase Community on macOS?

Follow these instructions to install FeatureBase on a macOS environment.

{% include /page-toc.md %}

## Before you begin

* Learn about [FeatureBase Community](/docs/community/com-home)
{% include /common/common-install-before-begin.md %}

## Step 1 - Establish the correct release to install

* Open [FeatureBase releases on GitHub](https://github.com/FeatureBaseDB/FeatureBase/releases){:target="_blank"}
* Make note of the:
  * version (e.g., 3.32.0)
  * kernel = `darwin`
  * processor (arm or amd)

{% include /com-install/com-install-release-download.md%}

{% include /com-install/com-install-release-untar-download.md%}

{% include /com-install/com-install-setup-install-dir.md %}

## Authorize FeatureBase with macOS Gatekeeper system

{% include /com-install/com-issue-mac-gatekeeper-source.md %}

## Next step

* [Startup and connect to FeatureBase](/docs/community/com-startup-connect)
