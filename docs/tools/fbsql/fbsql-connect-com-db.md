---
title: Connect to community db
layout: default
parent: fbsql CLI SQL tool
grand_parent: Tools
nav_order: 4
---

# How do I connect to a FeatureBase Community database with fbsql?

Connect to a FeatureBase Community database with fbsql.

## Before you begin

{% include /fbsql/fbsql-before-begin.md%}
{% include /fbsql/fb-db-create.md %}
{% include /fbsql/fbsql-help-quit.md %}

## Syntax

```sh
(<cli-prefix>)
  (
    (--host="<community-hostname" / -[p|-port]=<port> ) |
    --config=<filename.toml>
  )
  [
    -[f|-file] <filename> |
    <load-from-datasource>
  ]
```

{% include /fbsql/fbsql-prefix-cli-flags.md %}

## Database connection flags

{: .note}
fbsql automatically connects to a local instance of FeatureBase Community

| Argument | Description | Requires | Default | Additional information |
|---|---|---|---|
| `--host="<hostname>"` | Specifies remote host name IP address or URL of the machine on which FeatureBase is running. Defaults to `localhost`. | port specification | `localhost` |  |
| `-p`<br>`--port` | Specify TCP port or local Unix-domain socket file extension on which FeatureBase is listening for connections. | Host specification. Defaults to `10101` | [Set port in featurebase.conf configuration](/docs/community/com-config/com-config-flags) |
{% include /fbsql/fbsql-config-filename-arg.md %}

## Optional arguments

### Load SQL from a source file

{% include /fbsql/fbsql-load-sql-file-arg.md %}

### Load data from data source

* [Learn how to use fbsql to load data from an external data source](/docs/tools/fbsql/fbsql-loader-toml-config)

## Additional information

{% include /fbsql/fbsql-toml-connection-file-extra.md %}

{% include /fbsql/fbsql-status-table.md %}

## Examples

### Connect to FeatureBase community database

```sh
fbsql --host="localhost" \ --port="10101"
```

### Connect with host/port in file

Source file `local.toml`
```toml
host = "localhost"
port = "10101"
```
Connection string:
```sh
fbsql --config=local.toml
```

## Next step

* [Specify a database to run SQL against](/docs/tools/fbsql/fbsql-running-sql)
