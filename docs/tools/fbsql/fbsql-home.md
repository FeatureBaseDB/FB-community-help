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

* [Learn How To Install or upgrade fbsql](https://docs.featurebase.com/docs/tools/fbsql/fbsql-install){:target="_blank"}

## How do I open and quit the fbsql interface?

| Task | Actions |
|---|---|
| Open fbsql interface | * Open a CLI<br/>* Enter `fbsql` |
| Quit the fbsql interface | `\q` or `\quit` at the `=#` prompt |

## How do I connect to my FeatureBase Community database?

* [Connect to a FeatureBase community database](/docs/tools/fbsql/fbsql-connect-com-db)

## How do I run SQL queries?

Run SQL queries in the fbsql interface or using text files:

* [Learn how to run SQL on fbsql](https://docs.featurebase.com/docs/tools/fbsql/fbsql-running-sql){:target="_blank"}

## How do I format SQL query output?

{% include /fbsql/fbsql-query-formatting-summary.md %}

* [fbsql query result reference](https://docs.featurebase.com/docs/tools/fbsql/fbsql-query-output-format){:target="_blank"}

## How do I change other output settings?

{% include /fbsql/fbsql-output-flags-summary.md %}

* [fbsql output reference](https://docs.featurebase.com/docs/tools/fbsql/fbsql-config-output){:target="_blank"}

## How do I import data using fbsql?

* [fbsql loader TOML configuration](https://docs.featurebase.com/docs/tools/fbsql/fbsql-loader-toml-config){:target="_blank"}
* [fbsql loader command](https://docs.featurebase.com/docs/tools/fbsql/fbsql-loader-command){:target="_blank"}

## Further information

* [SQL Guide](https://docs.featurebase.comhttps://docs.featurebase.com/docs/sql-guidesql-guide-home){:target="_blank"}
