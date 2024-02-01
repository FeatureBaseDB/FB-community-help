---
title: fbsql CLI SQL tool
layout: default
parent: Tools
has_children: true
nav_order: 1
has_toc: false
---

# How do I run SQL queries from the command-line?

The fbsql Command Line Interface tool for Linux and MacOS systems supports:
* API-key and user authenticated connections to FeatureBase databases
* SQL statements input via text files or the fbsql interface
* meta-commands to control output and task scripting and automation

## Before you begin

* [Learn about "docopt" notation standards used in this guide](http://docopt.org/){:target="_blank"}
{% include /fbsql/fb-db-create.md %}

## How do I install or upgrade fbsql?

* [Learn How To Install or upgrade fbsql](/docs/tools/fbsql/fbsql-install)

## How do I open and quit the fbsql interface?

| Task | Actions |
|---|---|
| Open fbsql interface | * Open a CLI<br/>* Enter `fbsql` |
| Quit the fbsql interface | `\q` or `\quit` at the `=#` prompt |

## How do I connect to a FeatureBase database?

* [Connect to a FeatureBase cloud database](/docs/tools/fbsql/fbsql-connect-cloud-db)
* [Connect to a FeatureBase community database](/docs/tools/fbsql/fbsql-connect-com-db)

## How do I run SQL queries?

Run SQL queries in the fbsql interface or using text files:

* [Learn how to run SQL on fbsql](/docs/tools/fbsql/fbsql-running-sql)

## How do I format SQL query output?

{% include /fbsql/fbsql-query-formatting-summary.md %}

* [fbsql query result reference](/docs/tools/fbsql/fbsql-query-output-format)

## How do I change other output settings?

{% include /fbsql/fbsql-output-flags-summary.md %}

* [fbsql output reference](/docs/tools/fbsql/fbsql-config-output)

## How do I import data using fbsql?

* [fbsql loader TOML configuration](/docs/tools/fbsql/fbsql-loader-toml-config)
* [fbsql loader command](/docs/tools/fbsql/fbsql-loader-command)

## Further information

* [SQL Guide](/docs/sql-guide/sql-guide-home)
