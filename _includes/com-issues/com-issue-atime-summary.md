## Cause

`atime` updates can significantly reduce FeatureBase performance due to frequent access.

## Solution

Use `noatime` on the FeatureBase data directory mount point.
