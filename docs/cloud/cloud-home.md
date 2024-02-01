---
title: Cloud
layout: default
has_children: true
nav_order: 3
has_toc: false
---

# Introduction to FeatureBase Cloud
{: .no_toc }

FeatureBase Cloud is fully managed on AWS infrastructure and makes it even easier to provision and operate in order to get value from your data faster.

{% include page-toc.md %}

## Summary of features

| Feature | Benefit | Additional information |
|---|---|---|
| Fully managed | No need to maintain your own infrastructure and calculate processor and memory requirements | [FeatureBase pricing](https://www.featurebase.com/pricing){:target="_blank"} |
| Automated backups | Full backups to S3 and EBS snapshotting are automated and occur daily for all databases |  |
| Usage-based metering and billing | GUI provides detailed intra-hour insights into your spend |  |
| Low-latency database | Database design won't be impacted by queries across billions of records or large ingest streams inserting and updating records | [Breaking the latency floor whitepaper](https://www.featurebase.com/blog/breaking-the-latency-floor-white-paper){:target="_blank"} |
| One-click GUI for DB creation and monitoring | Tools to create standard or custom databases, monitor and configure available at a single click | [Manage databases](/docs/cloud/cloud-databases/cloud-db-manage) |
| Simple user management | Create accounts directly in the GUI for users in your organization to collaborate on your data | [Manage users](/docs/cloud/cloud-users/cloud-users-manage) |
| HTTPS API | Programmatic access to all Cloud features over HTTPS | [FeatureBase Cloud API](https://api-docs-featurebase-cloud.redoc.ly/){:target="_blank"} |
| SQL-based data import | Import data using BULK INSERT statement from CSV, NDJSON , Parquet or ORC | [SQL BULK INSERT](/docs/sql-guide/statements/statement-insert-bulk) |

## Cloud trial

{% include /cloud/trial-account-limits.md %}

## Terms and conditions

Cloud users must agree to the FeatureBase terms of service to complete sign-up.

* [Learn about the Cloud terms of service](https://www.featurebase.com/cloud-terms){:target="_blank"}

## Troubleshooting

Refer to troubleshooting pages if you experience issues:

* [FeatureBase Cloud troubleshooting](/docs/cloud/cloud-troubleshooting/cloud-troubleshooting-home)

## Next step

* [Learn how to set up your FeatureBase Cloud account](/docs/cloud/cloud-signup)
