---
title: MacOS file limits
layout: default
parent: Community troubleshooting
grand_parent: Community
---

# Issue - MacOS file limits

{% include /com-issues/com-issue-open-file-limit-summary.md %}

{: .note}
>Open file limit changes are affected by the following on MacOS:
* `ulimit` does not behave predictably because limits change between releases.

## Solutions

### Alter FeatureBase max-file-limit

* [Alter max-file-limit](/docs/community/com-config/com-config-max-file-count)

### Increase open file limit for current session

* Open a CLI then run the following command:

```
launchctl limit maxfiles 262144 262144
```

### Persistent change to open file limit

* [Issue - persistent file limits on MacOS](/docs/community/com-troubleshooting/com-issue-persistent-mac-file-limits)

### Adjust kernel parameter files

You may also need to adjust the following kernel parameter files:
* `kern.maxfiles`
* `kern.maxfilesperproc`

[Learn how to adjust Kernel Parameters](https://developer.apple.com/library/archive/documentation/System/Conceptual/ManPages_iPhoneOS/man3/sysctl.3.html){:target="_blank"}

## Further information

* [Adjust file limits MacOS](https://gist.github.com/tombigel/d503800a282fcadbee14b537735d202c){:target="_blank"}
* [Learn how to troubleshoot MacOS "too many open files" error](https://www.macobserver.com/tips/deep-dive/evade-macos-many-open-files-error-pushing-limits/){:target="_blank"}
* [Learn how to change file limits on MacOS](https://wilsonmar.github.io/maximum-limits/){:target="_blank"}
