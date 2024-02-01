FeatureBase Community may exceed open file limits because:
* the database may be split into a large number of files
* these files may be open simultaneously.

## Possible cause

Maximum file limits may be set incorrectly:

* in `featurebase.conf`
* for the current session
* for persistent sessions
