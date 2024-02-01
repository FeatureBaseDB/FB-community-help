---
title: Connect to Cloud
layout: default
parent: Python client library
grand_parent: Tools
nav_order: 2
---

# How do I use FeatureBase Python classes to connect to Cloud?

Use the following client classes to connect to FeatureBase Cloud.

## Before you begin

* [Install FeatureBase Python client library](/docs/tools/python-client-library/python-client-install)
* [Learn how to create a Cloud database](/docs/cloud/cloud-databases/cloud-db-manage)
* [Learn how to obtain the database ID](/docs/cloud/cloud-databases/cloud-db-details)
* [Learn how to create a Cloud API key](/docs/cloud/cloud-authentication/cloud-auth-create-key)

## Syntax

```py
# Import required libraries
import featurebase

# Connect to FeatureBase cloud
client = featurebase.client(
  hostport = "query.featurebase.com/v2",
  database = "<database-id>",
  apikey = "<api-key-secret>",
  timeout = "<int-value>")
```

## Required libraries

{: .important}
`import featurebase` is required. Add other libraries as necessary.

## Connect to FeatureBase Cloud

| Keywords | Description | Required | Additional information |
|---|---|---|---|
| `client = featurebase.client` | Defines featurebase.client and optional flags | Yes |  |
| `hostport = "query.featurebase.com/v2"` | Default Cloud query endpoint, found in Database details page | Yes |  |
| database | FeatureBase Cloud database ID found in Database details page | Yes | [Obtain database ID from Database details](/docs/cloud/cloud-databases/cloud-db-details) |
| apikey | Cloud API key secret key | Yes | [Create a Cloud API key](/docs/cloud/cloud-authentication/cloud-auth-create-key) |
| timeout | Integer value that represents number of seconds before connection timeout | Optional |  |

## Next step

* [Learn how to query the connected database](/docs/tools/python-client-library/python-client-query)

## Further information

* [Learn how to connect to FeatureBase Community with the Python client](/docs/tools/python-client-library/python-client-connect-community)
