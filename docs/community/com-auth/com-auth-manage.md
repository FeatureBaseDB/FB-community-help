---
title: Community authentication
layout: default
parent: Community
has_children: true
nav_order: 10
has_toc: false
---

# How do I secure FeatureBase Community?
{: .no_toc }

FeatureBase supports authentication and authorization with OAuth2.0 via a configurable identity provider (IdP).

Azure Active Directory is supported via SAML 2.0

{% include page-toc.md %}

## How does the authentication process work?

Once setup, FeatureBase Community authentication works as follows:

1. A user logs into FeatureBase and is then directed to the configured IdP login page.
2. When the user logs in successfully, The IdP sends a JWT token to FeatureBase to retrieve the IdP groups the user belongs to from the configured endpoint.
3. Upon retrieving the authenticated user groups, FeatureBase passes the JWT to the user account as the `molecula-chip` cookie which is used to authorize the user in subsequent requests.

## Before you begin

{% include /com-install/com-install-before-begin.md %}

## Step 1 - Generate keys and tokens

* [Generate a FeatureBase SSH key](/docs/community/com-auth/com-auth-key)
* [Generate FeatureBase login auth and refresh tokens](/docs/community/com-auth/com-auth-token)

## Step 2 - Set up Identity Provider (IdP)

* [Set up Azure AD for Single-Sign-On with FeatureBase](/docs/community/com-auth/com-auth-azure-sso)

## Step 3 - Set up FeatureBase permissions

* [Set up FeatureBase group permissions](/docs/community/com-auth/com-auth-group-permissions)

## Step 4 - Set up TLS authentication

* [Set up TLS authentication](/docs/community/com-auth/com-auth-tls)
* [Set up Mutual TLS](/docs/community/com-auth/com-auth-tls-mutual)

<!--
## Step 5 - Set up audit logs

* [Set up authentication audit logs]()

-->
