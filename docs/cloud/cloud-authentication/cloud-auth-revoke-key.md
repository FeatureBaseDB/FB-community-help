---
title: Revoke Key
layout: default
parent: Manage API Keys
grand_parent: Cloud
nav_order: 5
---

# How do I revoke an API key in FeatureBase Cloud?
{: .no_toc }

You may need to revoke an API key if:
* you've lost the SECRET or ID values
* you're rotating API keys for security purposes

{% include page-toc.md %}

## Before you begin

{% include /cloud/cloud-before-begin.md %}
* [Learn how to manage API keys](/docs/cloud/cloud-authentication/cloud-auth-manage)
* [Learn how to create an API key](/docs/cloud/cloud-authentication/cloud-auth-create-key/)

## Warnings

Any API calls using a revoked key will:
* complete if already in progress
* be rejected by FeatureBase Cloud if not already started.

## Revoke an API key

{% include /cloud-auth/cloud-auth-menu.md %}
* Click <span class="material-icons md-18">more_vert</span> on the API key > **Revoke**
* Click **Revoke This Key** in the confirmation dialog.

## Further information

* [Update key API reference](https://api-docs-featurebase-cloud.redoc.ly/latest#operation/putUserKey)
