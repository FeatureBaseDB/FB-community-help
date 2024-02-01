---
title: Install python client
layout: default
parent: Python client library
grand_parent: Tools
nav_order: 1
---
# How do I install the FeatureBase Python client library?

{% include /python-lib/python-lib-classes-summary.md %}

## Before you begin

* [Learn about the FeatureBase Python client library](/docs/tools/python-client-library/python-client-library-home)
* Install the following if not already on the target system:
  * [Install python 3.7+](https://www.python.org/downloads/){:target="_blank"}
  * [Install make](https://www.gnu.org/software/make/){:target="_blank"}
  * [Git version control](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git){:target="_blank"}, OR
  * [Install pip](https://pip.pypa.io/en/stable/installation/){:target="_blank"}

## Step 1 - download the library

* Open a CLI on the target system
* Download using one of the following methods:

| Method | Command | Additional information |
|---|---|---|
| Git | `git clone git@github.com:FeatureBaseDB/python-featurebase.git` | [GitHub repository](https://github.com/FeatureBaseDB/python-featurebase){:target="_blank"} |
| Pip | `pip install featurebase` | [Pypi repository](https://pypi.org/project/featurebase/){:target="_blank"} |

## Step 2 - install the library

* CD to `python-featurebase`
* Run `make`

## Next step

{% include /python-lib/python-lib-connect-db-links.md %}
