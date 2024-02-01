---
title: Query cloud data
layout: default
parent: Cloud query
grand_parent: Cloud
nav_order: 1
has_toc: false
---

# How do I query data in FeatureBase Cloud?
{: .no_toc }

FeatureBase Cloud has a built-in query editor that supports queries written using SQL and native Pilosa Query Language.

{% include page-toc.md %}

## Before you begin

{% include /cloud-db/cloud-db-dependencies.md %}
* [Learn how to import data to FeatureBase](/docs/cloud/cloud-ingest/cloud-ingest-manage)
* [Learn how to query FeatureBase data](/docs/cloud/cloud-query/cloud-query-home)
* [FeatureBase SQL](/docs/sql-guide/sql-guide-home)
* [Pilosa Query Language](/docs/pql-guide/pql-home)

## How do I use the Cloud Query editor?

* Click **Query** then use the following features:

| Feature | Description | Additional information |
|---|---|---|
| Database picker | Choose a database containing your tables and data | [Create database](/docs/cloud/cloud-databases/cloud-db-manage) |
| Schema browser | View and search the tables and views in your database |  |
| Limit query results | Limit query results to 10, 100, 1000 or 10000 rows |  Defaults to 100 rows |
| Write queries | Query editor supports one or more queries and auto-suggests valid SQL and PQL |  |
| Select a query | Select a specific line to run, or insert the cursor to run from that point down |  |
| Run queries | Run queries with **Run** button, or via your keyboard:<br/>* **Ctrl**+**Enter**, or<br/>* **CMD** + **Enter** | **Network error** occurs if a query exceeds 4000 seconds before returning results. |
| Format results | Results columns can be sorted ascending or descending, filtered, hidden, shown and exported to CSV |  |
| View query history | View and search all queries run during the current session. | Query history is deleted when you logout or clear your browser cache |
