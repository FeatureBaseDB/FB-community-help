# Local build with a Virtual Machine

The repository has been tested on Ubuntu and Linux Mint but will most likely work on other Linux variants.

NOTE: The Virtual Machine will support **one** Ruby/Jekyll setup. You **will** experience Gem conflicts if you attempt to install a second Jekyll system

## Before you begin

The VM requires:
* Minimum 16GB memory
* Network connection
* Git setup as above
* SSH keys setup as above
* Read/Write access to featurebase-docs

## Install Ruby, Bundler and Jekyll

Minimum versions are found in `gemfile` and `gemfile.lock`

TIP: In my experience you can use the [standard jekyll setup instructions for your OS](https://jekyllrb.com/docs/installation/#requirements)

## Installing dependencies for the first time

Run bundler on the command line to install dependencies

```

uername@virtualmachine
$ bundle

```

## Serving the site

This method allows you to make changes to site files and view changes.

NOTE: Changes to `_config.yml` requires a restart.

Run this command:

```
bundle exec jekyll serve
```

## Further information

* [Check for broken links](https://github.com/FeatureBaseDB/featurebase-docs/blob/main/help-on-help/broken-link-check.md)
