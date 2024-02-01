---
title: Setup Datadog monitoring
layout: default
parent: Community monitoring
grand_parent: Community
nav_order: 5
---

# How do I setup Datadog monitorning?

You can configure FeatureBase Community to output Prometheus metrics which can be read by Datadog.

{: .note}
[Learn how to setup Datadog to read EC2 Cloudwatch metrics](https://docs.datadoghq.com/integrations/amazon_web_services/?tab=roledelegation#installation){:target="\_blank"} for FeatureBase systems installed on AWS EC2.

## Before you begin

* [Learn about FeatureBase monitoring](/docs/community/com-monitoring/com-monitoring-home)

## Step 1 - Enable FeatureBase Prometheus metrics

* Open a CLI then CD to `*/featurebase/opt`.
* Edit `/featurebase.conf` and add the following details:

{% include /com-monitoring/com-monitoring-metrics-prometheus.md %}

## Step 2 - Install Datadog agent

| Task | New Datadog account | Existing Datadog account |
|---|---|---|
| Install Datadog agent | [Create Datadog account then install agent](https://us5.datadoghq.com/signup){:target="_blank"} | [Install Datadog Agent](https://docs.datadoghq.com/getting_started/agent/){:target="_blank"} |
| Obtain Datadog API key | API key automatically added to installed agent files | [Create a new API key](https://docs.datadoghq.com/account_management/api-app-keys/#add-an-api-key-or-client-token) |

## Step 3 - Add Prometheus metrics to the agent config files

* CD to `/etc/datadog-agent/`
* Verify there is a `datadog.yaml.example` file as backup
* Edit `datadog.yaml` then add the following parameters:

```
api_key: <datadog-api-key>

site: datadoghq.com

tags:
   - owner:<name-of-user>
   - project:<user-specified-name>

logs_enabled: true

process_config:
  process_collection:
    enabled: true

network_config:
  enabled: true
```

* Delete all other parameters then save the file.

## Step 4 - Edit datadog-agent config file

* CD to `/etc/datadog-agent/conf.d/openmetrics.d/`
* Copy `conf.yaml.example`

```
cp conf.yaml.exmple conf.yaml
```

* Edit `conf.yaml` then add the following parameters:

```
init_config:

instances:

   # update the host and port as necessary
   - prometheus_url: http://localhost:10101/metrics
     namespace: "featurebase"
     metrics:
       - "*"

   # you can grab consumer metrics by adding an entry here
   # here is an example (given the default port for consumer metrics is 9093)
   # - prometheus_url: http://localhost:9093
   #   namespace: "consumer"
   #   metrics:
   #     - "*"
```

* Delete all other parameters then save.

## Step 5 - restart and verify Datadog agent is working

* Restart the agent with this command:

```
sudo systemctl restart datadog-agent
```

* Verify the agent is running:

```
sudo systemctl status datadog-agent
```

* Verify Prometheus metrics are being read:

```
sudo -u dd-agent datadog-agent status
```

## Example output

```
Running Checks
==============

...

openmetrics (2.0.0)
-------------------
    Instance ID: openmetrics:featurebase:2d670110d7af553d [OK]
    Configuration Source: file:/etc/datadog-agent/conf.d/openmetrics.d/conf.yaml
    Total Runs: 1
    Metric Samples: Last Run: 1,302, Total: 1,302
    Events: Last Run: 0, Total: 0
    Service Checks: Last Run: 1, Total: 1
    Average Execution Time : 145ms
    Last Execution Date : 2022-04-27 00:14:25 UTC (1651018465000)
    Last Successful Execution Date : 2022-04-27 00:14:25 UTC (1651018465000)
```

## Further information

* [Learn which system level metrics will be exposed](https://docs.datadoghq.com/integrations/system/){:target="_blank"}
