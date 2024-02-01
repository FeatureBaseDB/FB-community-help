---
title: MacOS SSD memory issues
layout: default
parent: Community troubleshooting
grand_parent: Community
---

# Issue - memory blocks not reclaimed on MacOS SSD drives

## Cause

MacOS SSDs using APFS file systems automatically perform `trim` operations on restart. Other file systems require intervention to reclaim unused blocks of data.

## Solution - enable Trim

* Open a CLI and run the following command:

```sh
trimforce enable
```
