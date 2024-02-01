---
title: Connect to Community
layout: default
parent: Python client library
grand_parent: Tools
nav_order: 3
---

# How do I use FeatureBase Python classes to connect to Community?

Use the following client classes to connect to FeatureBase Community.

## Before you begin

* [Install FeatureBase Python client library](/docs/tools/python-client-library/python-client-install)
* [Start FeatureBase Community](/docs/community/com-startup-connect)

## Syntax

```py
# Import required libraries
import featurebase

# Connect to FeatureBase Community
client = featurebase.client(
  hostport = "<host:port>",
  database = "<database-id>",
  cafile = "<certificate-file-path>",
  capath = "<certificate-folder>",
  origin = "<cross-origin-resource-sharing>",
  timeout = "<int-value>")
```

## Required libraries

{: .important}
`import featurebase` is required. Add other libraries as necessary.

## Connect to FeatureBase Community

{: .note}
Key-values are defined in `featurebase/opt/featurebase.conf`

| Keywords | Description | Required | Additional information |
|---|---|---|---|
| `client = featurebase.client` | Defines featurebase.client and optional flags | Yes | Use `featurebase.client()` to connect to Community instance on same host |
| hostport | Hostname and port for your FeatureBase instance | Optional | Defaults to `localhost:10101` |
| cafile | Fully qualified CA certificate file path | Optional |  |
| capath | Fully qualified CA certificate folder | Optional |  |
| origin | CORS (Cross Origin Resource Sharing) value  | Optional |  |

## Next step

* [Learn how to query the connected database](/docs/tools/python-client-library/python-client-query)

## Further information

* [Learn how to connect to FeatureBase Cloud with the Python client](/docs/tools/python-client-library/python-client-connect-cloud)
