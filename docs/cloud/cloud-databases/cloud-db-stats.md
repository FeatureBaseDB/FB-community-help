---
title: Cloud query and ingestion stats
layout: default
parent: Manage databases
grand_parent: Cloud
nav_order: 12
---

# Where do I find query and ingestion statistics?
{: .no_toc }

FeatureBase provides SQL query statistics and an ingestion graph on the Home page.

{% include page-toc.md %}

## Before you begin
{: .no_toc }

* [Learn about Cloud databases](/docs/cloud/cloud-databases/cloud-db-manage)
* [Create a FeatureBase database](/docs/cloud/cloud-databases/cloud-db-create-custom)
* Click **Home**

{: .note}
You can also obtain query statistics by querying the [fb_exec_requests system table](/docs/sql-guide/system-tables/system-tables-home)

## Query statistics

The following query statistics are available:

| Statistic | Description | Additional information |
|---|---|---|
| Average query response time | The average time a query takes to execute on your database | Values based on query execution times in `fb_exec_requests system table` | [fb_exec_requests system table](/docs/sql-guide/system-tables/system-tables-home/#fb_exec_requests) |
| Queries per second | A graph of queries processed each second on the database, updated every 15 seconds | Graph is reset on page refresh |

## Data ingestion graph

| Metric | Description | Additional information |
|---|---|
| Ingested records per second | A graph of records ingested by the database, updated every 15 seconds | Graph reset on page refresh |
