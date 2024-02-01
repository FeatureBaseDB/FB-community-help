# HTMLproofer gemfile

This approach is suitable for PC and Docker.

## What is revealed in a broken link check

* Missing ALT tags -- ALT tags are important for accessibility purposes and should be fixed if possible.
* Broken external links -- Manually check these because the broken-link-checks don't deal with external links
* Email addresses -- Manually check because checker doesn't deal with them
* Broken internal links -- these **must** be fixed

## Before you begin

* [Build FeatureBase-docs locally](/help-on-help/local-build/README.md)

## Run htmlproofer on the command line

* Open a terminal and CD to the `/_site` directory
* Run this command:

```
exec htmlproofer
```
