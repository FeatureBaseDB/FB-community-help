---
title: Delete table
layout: default
parent: Manage tables
grand_parent: Cloud
nav_order: 6
---

# How do I delete a table in FeatureBase Cloud?
{: .no_toc }

There are a number of reasons why you may choose to drop a table, including:
* incorrect configuration
* incorrect name
* database deletion
* data deletion

{% include page-toc.md %}

## Warnings

* Tables cannot be recovered once deleted
* Deleting tables will affect data-sources and running queries

## Before you begin

{% include /cloud/cloud-before-begin.md %}
* [Create a database](/docs/cloud/cloud-databases/cloud-db-create-custom)
* [Create a table](/docs/cloud/cloud-tables/cloud-table-create)
* Click **Databases** > database name > **Tables** to view tables.

## Delete the selected table

* Click <span class="material-icons md-18">more_vert</span> > **Drop table**
* Enter "DELETE" in the confirmation dialog.
* Click **Drop table**.

## Further information

* [Delete table API reference](https://api-docs-featurebase-cloud.redoc.ly/latest#operation/deletetable){:target="_blank"}
