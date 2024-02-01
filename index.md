---
title: FeatureBase help
layout: home
has_children: false
nav_order: 1
has_toc: false
---

# Welcome to FeatureBase help
{: .no_toc }

FeatureBase Help contains high level overviews of software functionality, plus procedural documentation for FeatureBase Cloud and the self-managed Community edition.

{% include page-toc.md %}

## What is FeatureBase?

FeatureBase is a feature-oriented database platform that powers real-time analytics and machine learning applications by executing low-latency, high-throughput, and highly concurrent workloads. Similar to the evolution of data formats from row-oriented to columnar, FeatureBase further evolves columnar into a feature-oriented format that makes each distinct data value individually addressable (accessible, readable, writable and retrievable).

FeatureBase is similar to a columnar store, but breaks each column into each of its unique values so that they can be represented as a single bit. This data representation is excellent for a variety of analytical workloads.

Our novel approach minimizes I/O on queries by allowing the database engine to read and write exactly the data it needs and intelligently compress that data in memory. The result is a step-function improvement in analytical workloads.

## Before you begin

* [Learn more about FeatureBase](https://www.featurebase.com/){:target="_blank"}

## Comparing Cloud and Community editions

These tables provided a side-by-side comparison of Cloud and Community functionality.

## Infrastructure

| Feature | Cloud | Community |
|---|---|---|
| Deployment | [Cloud deployment](/docs/cloud/cloud-signup) | [Community installation](/docs/community/com-home) |
| Regional Deployment | No | Yes |  |
| Automated Scale Up/Down|  No | No |   |
| Automated Scale In/Out |  No | No |   |

## Data Ingestion

| Feature | Cloud | Community |
|---|---|---|
| Streaming (HTTPS)  | Yes | Yes |
| Kafka (Pull-based) | Client-side kafka consumption & push | [Kafka ingestion](/docs/community/com-ingest/com-ingest-manage/#kafka-import-method) |
| Database (Pull-based) | Client-side SQL consumption & push | [SQL ingestion](/docs/community/com-ingest/com-ingest-manage/#sql-import-method) |
| CSV/Bulk Ingest  | Yes | [CSV ingestion](docs/community/com-ingest/com-ingest-manage/#csv-import-method) |

## Data Consumption

| Feature | Cloud | Community | Additional information |
|---|---|---|---|
| Query UI  | [Query cloud tables](/docs/cloud/cloud-query/cloud-query-home) | [Query community tables](/docs/community/com-query/com-query-home) |  |
| FeatureBase SQL - HTTPS | Yes | Yes | Any language/tool (Python, Go, etc) that can read over HTTPS  |
| FeatureBase PQL - HTTPS |  Yes | Yes | Any language/tool (Python, Go, etc) that can read over HTTPS  |
| gRPC Endpoint | No | [Community gRPC endpoint](/docs/community/com-api/old-grpc-api) |   |
| Pilosa Query Language (PQL) Query Builder | No | Yes | [Learn about PQL](/docs/pql-guide/pql-home) |
| Python Client | [Python client library](/docs/tools/python-client-library/python-client-library-home/) | [Python client library](/docs/tools/python-client-library/python-client-library-home/) | |
| Grafana Plug-In | No | [Community grafana connector](/docs/community/com-query/old-grafana-connector) |  |
| Postgres Lookup Database Option | No | Yes |   |

## Operations

| Feature | Cloud | Community |
|---|---|---|
| Backup and Restore | Yes | [Community backup and restore](/docs/community/com-backup/com-config-backup) |
| Data Replication | Yes | Yes |
| Metrics & Monitoring | [Cloud metrics](/docs/cloud/cloud-databases/cloud-db-details/) | [Community metrics & monitoring](/docs/community/com-monitoring/com-monitoring-home) |
| Editable FeatureBase Config File | No | Yes |

## Security

| Feature | Cloud | Community | Additional information |
|---|---|---|---|
| Encryption In Flight | Yes | Yes |  |
| Encryption at Rest | Yes | Yes |   |
| Authentication + Authorization (OAuth) | Yes | [Community authentication](/docs/community/com-auth/com-auth-manage) |  |
| Role-Based Access Control (Basic) | [Cloud user roles](/docs/cloud/cloud-users/cloud-ref-user-roles) | Yes |   |
| User Management | [Cloud user management](/docs/cloud/cloud-users/cloud-users-manage) | Yes |  |
| Audit Logging | Yes | Yes |   |

## How do I set up FeatureBase Cloud?

Follow these instructions which will guide you through the setup process:

* [Set up your FeatureBase cloud account](/docs/cloud/cloud-home)

## How do I install FeatureBase Community?

Follow these instructions to learn about system requirements and how to install FeatureBase on your operating system.

* [Install FeatureBase Community locally](/docs/community/com-home)
