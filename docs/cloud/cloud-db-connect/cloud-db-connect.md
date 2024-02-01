---
title: Connect to cloud db
layout: default
parent: Cloud
has_children: true
nav_order: 3
has_toc: false
---

# How do I connect to my FeatureBase Cloud database?

There are several methods to connect to your database:

* via the web portal
* via REST API calls used in applications
* via fbsql, a command-line SQL tool you can install on a local Linux or MacOS machine

## Before you begin

* [Create a FeatureBase Cloud account](/docs/cloud/cloud-signup)

## Connect via the web portal

* [Learn how to sign-in via the Web portal](/docs/cloud/cloud-db-connect/cloud-login)

## Connect via REST API calls

The Cloud API allows two methods to authenticate with your FeatureBase Cloud database:

* [Cloud API security JWT access token](https://api-docs-featurebase-cloud.redoc.ly/latest#section/Security){:target="_blank"}
* [Cloud API key](/docs/cloud/cloud-authentication/cloud-auth-manage)

## Connect via fbsql command-line query editor

You can connect to your FeatureBase database and run SQL statements using the fbsql command line tool.

fbsql connections require a registered user account, or a Cloud API-Key

* [Learn more about fbsql](/docs/tools/fbsql/fbsql-home)
