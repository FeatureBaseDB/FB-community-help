---
title: Community monitoring
layout: default
parent: Community
has_children: true
nav_order: 13
has_toc: false
---

# How do I setup metrics and monitoring for FeatureBase Community?
{: .no_toc }

{% include /com-monitoring/com-monitoring-summary.md %}

{% include page-toc.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}

## Naming conventions for metrics

| Convention | Description | Additional information |
|---|---|---|
| Colon character `:` | Reserved for Prometheus recording rules | [Learn about Prometheus recording rules](https://prometheus.io/docs/practices/rules/){:target="_blank"} |
| Format | `[namespaceprefix]_[metric_description]_[units]` | [Naming format example](#naming-format) |
| Text case | Use `snake_case` |  |
| Valid metric names | Regular expressions `[a-zA-Z_:][a-zA-Z0-9_:]*` |  |

## Metrics

| Metrics | Additional information |
|---|---|
| FeatureBase metrics | [FeatureBase metrics reference](/docs/community/com-monitoring/com-monitoring-metrics-fb) |
| Ingester metrics | [Ingest metrics](/docs/community/com-monitoring/com-monitoring-metrics-ingest) |
| Runtime metrics | [Runtime metrics reference](/docs/community/com-monitoring/com-monitoring-metrics-runtime) |
| Transaction metrics | [Transaction metrics reference](/docs/community/com-monitoring/com-monitoring-metrics-transaction) |

## Tracing

FeatureBase supports the [OpenTracing](https://opentracing.io/) standard.

Any system that supports this standard can be setup to store and visualise trace data.

## Enable metrics

* [Enable runtime metrics for external monitoring](/docs/community/com-monitoring/com-monitoring-metrics-runtime-enable)
* [Setup Datadog monitoring](/docs/community/com-monitoring/com-monitoring-datadog)

## Setup error logging

* [Setup error logging](/docs/community/com-monitoring/com-monitoring-log-setup)

## Query HTTP endpoints

* [Query FeatureBase HTTP endpoints](/docs/community/com-monitoring/com-monitoring-endpoints)

## Examples

## Naming format

A metric name `ingester_csv_deleter_rows_added_total` is derived from the following information:

* Namespace `ingester_csv`
* metric name `deleter_rows_added`
* "unit" `total`, indicating a counter.

## Further information

* [Prometheus best practices on naming conventions](https://prometheus.io/docs/practices/naming/)
* [Robust Perception blog post on naming conventions](https://www.robustperception.io/on-the-naming-of-things)
