---
title: fbsql loader command
layout: default
parent: fbsql CLI SQL tool
grand_parent: Tools
nav_order: 13
---

# fbsql loader command

The `loader` command:
* supports Apache Impala, Apache Kafka and PostgreSQL data sources,
* reads from a specified TOML configuration file containing key/values for the data source and target table
* uses that information to ingest data from the data source
* then copies to the target table

## Before you begin

{% include /fbsql/fbsql-before-begin.md%}
* [fbsql loader TOML configuration file settings](/docs/tools/fbsql/fbsql-loader-toml-config)

## Syntax

```sh
(fbsql <featurebase-connection> --| \! )loader-(impala | kafka | postgres) <file-name>.toml
```

## Arguments

| Argument | Description | Required | Additional information |
|---|---|---|---|
| `fbsql <featurebase-connection>` | Run fbsql with a connection to a FeatureBase database | When run from CLI | * [fbsql connect to FeatureBase Cloud](/docs/tools/fbsql/fbsql-connect-cloud-db)<br/>* [fbsql connect to FeatureBase Community](/docs/tools/fbsql/fbsql-connect-com-db) |
| `\!` | Run `loader` from fbsql interface | Existing FeatureBase database connection |  |
| `loader-(impala | kafka | postgres)` | Choose a data source for the loader to read from | Yes | Requires `--` prefix when run from CLI |
| `<file-name>.toml` | TOML configuration file containing key/values for data source and target table. | Yes | [TOML configuration file for fbsql loader](/docs/tools/fbsql/fbsql-loader-toml-config) |

## Further information

* [fbsql loader examples](/docs/tools/fbsql-examples/fbsql-loader-eg-home)
