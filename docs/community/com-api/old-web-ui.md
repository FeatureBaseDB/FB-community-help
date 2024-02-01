---
title: Web API
layout: default
parent: Community API
grand_parent: Community
---

# Web interface

FeatureBase may be built with a web UI embedded. If so, this is indicated at startup with a log line resembling the following:

`enabled Web UI (g290830e) at http://localhost:10101`

To access the UI, visit the address `:10101` in a web browser. For example when running a FeatureBase instance locally with default settings, visit [http://localhost:10101](http://localhost:10101).

When authentication is enabled, TLS must also be enabled. To access the UI, visit [http://localhost:10101](http://localhost:10101). The user will be prompted to login through the identity provider's website, and will be redirected to FeatureBase home page once authentication is complete. The information available in the web interface may be restricted, depending on the user's permissions.

Using the user interface you can check the global status of your FeatureBase cluster.

It contains information about the cluster nodes, data, and has an interface for querying the cluster with both [PQL](/docs/pql-guide/pql-home) and [SQL](/docs/sql-guide/sql-guide-home).

## Home

![introduction](/assets/images/ui-home.png)

### Cluster Health

![cluster health problem](/assets/images/ui-cluster-health-problem.png)

Cluster Health shows the global status of the cluster,
and it contains an expanded view for each node.

The cluster state display has five possible values:

- <Status color="#57a852" /> NORMAL: All nodes are working ok and all data is available.
- <Status color="#ffa427" /> DEGRADED: Some nodes are not reachable, but all data is still available.
- <Status color="#cd6048" /> STARTING: Some nodes are not reachable and the cluster is not ready to answer queries.
- <Status color="#48b5cd" /> RESIZING: Cluster is resizing. Most endpoints are unavailable until the resize completes.
- <Status color="#a9a9a9" /> OFFLINE: Cluster cannot be reached from the UI.

#### Node Health

![cluster health](/assets/images/ui-node-status.png)

Each node's individual state is indicated by the colored icon:
- <Status color="#57a852" /> NORMAL: Node is working ok and all data is available.
- <Status color="#a9a9a9" /> UNKNOWN: Node is not reachable.

#### Metrics

![metrics](/assets/images/ui-metrics.png)

Metrics provide useful information about nodes.

* [Learn about FeatureBase Metrics](/docs/community/com-monitoring/com-monitoring-home)

### Transactions

Here you can check and finish actual transactions.
Clicking `Force Finish` will close an open transaction.
<!-- COMMENTED OUT because there's no apparent link between transactions and metrics in this context
More info about them can be found [here](/docs/community/com-monitoring/com-monitoring-home).-->

![transaction](/assets/images/ui-transactions.png)

## Tables
![tables ui](/assets/images/ui-tables.png)

All Tables are shown here.
We can explore their fields and metadata,
like types, cache type and size,
and also if there are keys associated with a particular field.

![fields](/assets/images/ui-fields.png)
