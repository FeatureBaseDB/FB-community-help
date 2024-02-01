# Mac -- dead_link_seeker.py

The `/dead_link_seeker.py` script can be run from any machine and requires Python and dependencies to be installed.

## What is revealed in a broken link check

* Missing ALT tags -- ALT tags are important for accessibility purposes and should be fixed if possible.
* Broken external links -- Manually check these because the broken-link-checks don't deal with external links
* Email addresses -- Manually check because checker doesn't deal with them
* Broken internal links -- these **must** be fixed

TIP: Add false positives to the `dead_link_seeker.py` `false_postitive` list at the end of the file.

## Before you begin

* [Build FeatureBase-docs locally](https://github.com/FeatureBaseDB/featurebase-docs/tree/docs-195-help-on-help/help-on-help/local-build)
* [Install Python](https://www.python.org/downloads/)
* Install `urllib`, `collections` and `HTMLParser` packages

## Run dead_link_seeker.py

```python
python dead_link_seeker.py {address} [v]
```

Arguments:

| Argument | Description | Example |
|---|---|---|
| address | local or remote address | http://127.0.0.1:4000/<br/>http://docs.featurebase.com/ |
| v | verbose mode |
