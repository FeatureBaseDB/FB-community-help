---
title: Max-file-count
layout: default
parent: Community configuration
grand_parent: Community
---

# `max-file-count` reference
{: .no_toc }

Unix systems limit the number of simultaneously open files for a given process or user

The `max-file-count` parameter in `featurebase.conf` allows you to set a soft limit on files FeatureBase opens during operations.

When past this limit, FeatureBase will only keep files open for as long as required to write updates.

{% include page-toc.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}

## Alter max-file-count parameter

* Open a CLI then CD to `*/featurebase/opt`
* Edit `featurebase.conf`
* Alter the `max-file-count` parameter as required.
* Save the file
* Restart FeatureBase.
