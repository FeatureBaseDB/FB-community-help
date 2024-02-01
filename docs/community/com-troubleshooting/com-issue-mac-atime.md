---
title: MacOS atime issues
layout: default
parent: Community troubleshooting
grand_parent: Community
---

# Issue - FeatureBase atime issue on MacOS

{% include /com-issues/com-issue-atime-summary.md %}

* Open a CLI then create a new bash script:

```
  #!/bin/bash

  DATA_DIR="/opt/molecula/featurebase"

  PARTITION=$(df $DATA_DIR | awk 'NR==2 { print $1; exit }')

  MOUNT_POINT=$(df $DATA_DIR | awk 'NR==2 { print $9; exit }')

  MOUNT_OPTIONS=$(mount | grep -w $PARTITION)

  if [[ "$MOUNT_OPTIONS" == *noatime* ]]; then
      echo "noatime is already enabled"
  else
      echo "noatime should be enabled for the best performance; to mount with noatime:"
      echo "    mount -vuwo noatime $MOUNT_POINT"
  fi
```

* Run the script.
