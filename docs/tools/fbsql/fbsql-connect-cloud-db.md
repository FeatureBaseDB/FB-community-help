---
title: Connect to cloud db
layout: default
parent: fbsql CLI SQL tool
grand_parent: Tools
nav_order: 3
---

# How do I connect to a FeatureBase cloud database with fbsql?

Connect to a FeatureBase cloud database when you startup fbsql.

## Before you begin

* [Create a database](/docs/cloud/cloud-databases/cloud-db-manage)
{% include /fbsql/fbsql-before-begin.md%}
{% include /fbsql/fb-db-create.md %}
{% include /fbsql/fbsql-help-quit.md %}

## Syntax

```sh
(<cli-flag-prefix>)
  (
    --host="<hostname>" \ -(p|-port)=<port> \
    (
    --api-key="<cloud-public-key>" |
    (--email="user-email" \ --password="<user-pass>") |
    --config=<filename.toml>
    )
  )
  [
    -[d|-dbname]="<cloud-database-name>" |
    -[f|-file] <filename> |
    <load-from-datasource>
  ]
```

{% include /fbsql/fbsql-prefix-cli-flags.md %}

## Database connection flags

| Argument | Description | Default | Additional information |
|---|---|---|---|
| `--host="<hostname>"` | Specifies remote host name IP address or URL of the machine on which FeatureBase is running | `localhost` | |
| `-p`<br>`--port` | Specify TCP port on which FeatureBase is listening for connections. |  |  |
| `--api-key="<public-key>"` | API public key flag that can be used to authenticate with your cloud organization |  | [Obtain Cloud API key](#obtain-cloud-api-key-additional) |
| `--email="user@example.com" \ --password="a1b2c3d4e5f6"` | User email and password credentials for FeatureBase application |  | [Create Cloud users](/docs/cloud/cloud-users/cloud-users-manage) |
{% include /fbsql/fbsql-config-filename-arg.md %}
<!-- Waiting for confirmation on these
--client-id string      Cognito Client ID for FeatureBase Cloud access. (default "6i2gs7mu215ab23cnvmshdoq6t")
--region string         Cloud region for FeatureBase Cloud access (e.g. us-east-2). (default "us-east-2")
| `--org-id` | Specified the Organization ID to use. Organizations are a concept used in FeatureBase Cloud, and in that case they are determined automatically based on user authorization. They are exposed here in case on-prem installations want to mimic that functionality. | |
-->

## Optional arguments

### Connect to available database

{% include /fbsql/fbsql-db-connect-same.md %}

| Argument | Description | Additional information |
|---|---|---|
|`-[d|-dbname]="<cloud-database-name>"` | Connect to available Cloud database | [Create a Cloud database](/docs/cloud/cloud-databases/cloud-db-manage) |

### Load SQL from a source file

{% include /fbsql/fbsql-load-sql-file-arg.md %}

### Load data from data source

* [Learn how to use fbsql to load data from an external data source](/docs/tools/fbsql/fbsql-loader-toml-config)

## Additional information

### Obtain Cloud API key

There are several ways to create an API key for your FeatureBase Cloud account:

* [Create Cloud API key via API](https://api-docs-featurebase-cloud.redoc.ly/latest#operation/postKey)
* [Create a Cloud API key](/docs/cloud/cloud-authentication/cloud-auth-manage)

{% include /fbsql/fbsql-toml-connection-file-extra.md %}

{% include /fbsql/fbsql-status-table.md %}

## Examples

{% include /fbsql/fbsql-eg-cloud-connect-api-user.md %}

### Connect with API key in file

Source file: `cloud-api-connect.toml`
```toml
host = "https://query.featurebase.com"
api-key="asdf-f345-sg-hjyjk-345323"
```
Connection string:
```sh
fbsql --config=cloud-user-connect.toml
```

### Connect with user credentials in file

Source file: `cloud-user-connect.toml`
```toml
host = "https://query.featurebase.com"
email     = 'user@example.com'
password  = 'a1b2c3d4e5f6'
```
Connection string:
```sh
fbsql --config=cloud-user-connect.toml
```

## Next step

* [Specify a database to run SQL against](/docs/tools/fbsql/fbsql-running-sql)
