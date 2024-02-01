---
title: Cloud status site
layout: default
parent: Cloud troubleshooting
grand_parent: Cloud
nav_order: 1
---
# How do I check for FeatureBase Cloud outages?

{: .no_toc }

If you are experiencing any issues connecting to FeatureBase Cloud's UI or APIs, please check the status at [https://status.featurebase.com](https://status.featurebase.com){:target="_blank"}

{% include page-toc.md %}

## API availability

API availability reports the aggregate status of all APIs under the api.featurebase.com domain. An outage here means that one or more of the endpoints are not working as required and users may face issues when calling them

## Web App availability

Web App availability reports the status of FeatureBase Cloud's UI at [https://cloud.featurebase.com/](https://cloud.featurebase.com/). An outage here means that users may not be able to sign in to the UI or may face irregular behavior within the UI.

## Query API availability

Query API availability reports the status of FeatureBase Cloud's query service under the query.featurebase.com domain. An outage here means that users may experience issues when trying to issue queries to their databases through this service and within the UI.

## Version API availability

{: .note}
APIs under the analytics.featurebase.com domain are used only for internal purposes

Version API availability reports the status of all APIs under the analytics.featurebase.com domain. An outage here likely will not affect user interactions but should be monitored if persistent issues arrive when calling APIs or interacting in the UI.

## Further information
* [HTTP API Docs](https://api-docs-featurebase-cloud.redoc.ly/latest/)
* {% include contact-support.md %} to discuss upgrading your account.
