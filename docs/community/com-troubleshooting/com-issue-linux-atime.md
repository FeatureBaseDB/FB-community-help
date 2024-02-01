---
title: Linux atime issues
layout: default
parent: Community troubleshooting
grand_parent: Community
---

# Issue - FeatureBase atime issue on Linux

{% include /com-issues/com-issue-atime-summary.md %}

* Open a CLI then create a new bash script:

```
  #!/bin/bash

  DATA_DIR="/opt/molecula/featurebase"

  PARTITION=$(df $DATA_DIR | awk 'NR==2 { print $1; exit }')

  MOUNT_POINT=$(df $DATA_DIR | awk 'NR==2 { print $6; exit }')

  MOUNT_OPTIONS=$(findmnt --source $PARTITION --output=options | sed -n '2p')

  if [[ "$MOUNT_OPTIONS" == *noatime* ]]; then
      echo "noatime is already enabled!"
  elif [[ $(lsblk $PARTITION -n --output=FSTYPE) == "xfs" && "$MOUNT_OPTIONS" == *relatime* ]]; then
      echo "reltime is enabled, mount with noatime to improve performance; to mount with noatime:"
      echo "    mount -o remount,noatime $PARTITION $MOUNT_POINT"
  else
      echo "noatime should be enabled on the mount point for the data directory; to mount with noatime:"
      echo "    mount -o remount,noatime $PARTITION $MOUNT_POINT"
  fi
```

* Run the script.
