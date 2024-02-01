---
title: Example PostgreSQL data source
layout: default
parent: fbsql loader examples
grand_parent: Tools
nav_order: 3
---

# Example PostgreSQL data source

{% include /fbsql/fbsql-loader-eg-source-summary.md %}

## Before you begin

* [Learn about PostgreSQL](https://www.postgresql.org/docs/){:target="_blank"}
* Create a PostgreSQL Database
* [Obtain your PostgreSQL connection string](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS){:target="_blank"}
* [Learn about TOML configuration settings](/docs/tools/fbsql/fbsql-loader-command)
* [Create a FeatureBase Cloud database](/docs/cloud/cloud-databases/cloud-db-manage)
* [Create target table](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-impala-postgres)

## Step 1 - Create data source

* Connect to your database
* Create the source table:

```sql
CREATE TABLE postgres_table (
  idkey int,
  intf int,
  stringf varchar(30),
  idf int,
  stringsetf varchar(30),
  idsetf varchar(30));
```

* Insert data to the source table:

```sql
INSERT INTO postgres_table VALUES
 (0, 0, 'a', 0, 'a', '3'),
 (1, 0, 'a', 0, 'c', '4'),
 (2, 0, 'a', 0, 'd', '5');
```

## Step 2 - Create TOML configuration file

* Open a terminal then run `nano example-config.toml`
* Add the following keys and values and substitute your PostgreSQL connection string as directed:

```toml
table = "loader-target"
query = "select idkey, intf, stringf, idf, stringsetf, idsetf from postgres_table;"
driver = "postgres"
connection-string = "postgres://<postgres-username>:<postgres-user-password>@localhost:5432/mydatabase?sslmode=disable"
batch-size = 1
```

{% include /fbsql/fbsql-loader-toml-fields-impala-postgres.md %}

* Save then exit nano.

## Next step

* [Import data from your data source](/docs/tools/fbsql-examples/fbsql-loader-eg-ingest )

## Further information
* [Learn about fbsql](/docs/tools/fbsql/fbsql-home)
* [Learn how to install fbsql](/docs/tools/fbsql/fbsql-install)
