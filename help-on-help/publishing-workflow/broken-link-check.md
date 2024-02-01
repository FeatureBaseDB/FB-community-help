# Checking for broken links

It's important to check for broken links **before** committing changes and creating a Pull Request.

There are two methods:

* All systems -- dead_link_seeker.py
* PC/Linux/Docker -- htmlproofer

## Before you begin

* [Build FeatureBase-docs locally](/help-on-help/local-build/README.md)

## What is revealed in a broken link check

* Missing ALT tags -- ALT tags are important for accessibility purposes and should be fixed if possible.
* Broken external links -- Manually check these because the broken-link-checks don't deal with external links
* Email addresses -- Manually check because checker doesn't deal with them
* Broken internal links -- these **must** be fixed

## Python approach

Suitable for Any operating system and requires Python to be installed

* [Python broken link check for Mac or other OS](/help-on-help/publishing-workflow/broken-link-check-python.md)

## HTMLproofer Gem approach

* [HTMLproofer gem for PC or Docker](/help-on-help/publishing-workflow/broken-link-check-htmlproofer.md)










## Broken link checker

* html-proofer has been added to `Gemfile`
* load for the first time on a repository by running `bundle` at the command line.

Then run the broken link checker using the batch file:

```
bash check-links.sh
```

NOTE: It's important to fix internal links. External links will be reported as broken, but these need to be tested manually.

* html-proofer added to `Gemfile`
