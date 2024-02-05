---
title: Example fbsql loader ingest
layout: default
parent: fbsql loader examples
grand_parent: Tools
nav_order: 4
---

# Example fbsql `loader` command

This example demonstrates how to run the `loader` command:
* with a TOML configuration file setup with data source and target key/values
* to import data from a specified data source to an existing target table

## Before you begin

{% include /fbsql/fbsql-before-begin.md%}
* [Create a FeatureBase Community database](/docs/community/com-db/com-db-manage)
* [fbsql loader syntax](https://docs.featurebase.com/docs/tools/fbsql/fbsql-loader-command)
* [FBSQL loader examples](/docs/tools/fbsql-examples/fbsql-loader-eg-home)

## Step 1 - connect to your database

* Open a terminal then substitute your connection details in either of the following commands:

{% include /fbsql/fbsql-eg-cloud-connect-api-user.md %}

## Step 2 - run `loader` command


Substitute your data source type where specified in the following fbsql command:

```
loader-<data-source-type> example-config.toml
```

Where `<data-source-type>` is:
* impala
* kafka
* postgres
