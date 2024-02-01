---
title: Linux SSD memory issues
layout: default
parent: Community troubleshooting
grand_parent: Community
---

# Issue - memory blocks not reclaimed on Linux SSD drives

## Cause

Solid State Drives (SSDs) may not properly reclaim unused memory blocks.

## Solution - enable TRIM on SSDs

Create a bash script with the following settings to enable `trim` for SSDs

```
  #!/bin/bash

  DATA_DIR="/opt/molecula/featurebase"

  PARTITION=$(df $DATA_DIR | awk '{print $1}' | sed -n '2p')

  MOUNT_OPTIONS=$(findmnt --source $PARTITION --output=options | sed -n '2p')

  if [[ $(lsblk $PARTITION -n -o ROTA) == "1" ]]; then
      echo "The partition is on a rotational drive, TRIM not supported"
  elif [[ $(lsblk $PARTITION -n -o DISC-GRAN == "0B") ]]; then
      echo "DISC granularity 0, TRIM not supported"
  elif [[ $(systemctl is-enabled fstrim.timer) == "enabled" ]]; then
      echo "fstrim is already enabled!"
  else
      echo "fstrim must be enabled; to enable:"
      echo "    sudo systemctl enable fstrim.timer"
  fi

  if [[ "$MOUNT_OPTIONS" == *discard* ]]; then
      echo "Continuous TRIM(discard) is not recommended, switch to periodic TRIM(fstrim)"
  fi
```

## Further information

* [Learn how to enable trim on Linux SSDs](https://opensource.com/article/17/1/solid-state-drives-linux-enabling-trim-ssds){:target="_blank"}
