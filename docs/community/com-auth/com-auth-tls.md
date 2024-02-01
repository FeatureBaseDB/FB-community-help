---
title: TLS authentication
layout: default
parent: Community authentication
grand_parent: Community
---

# How do I set up TLS authentication for FeatureBase Community?
{: .no_toc }

Secure your FeatureBase server with TLS authentication.

{% include page-toc.md %}

## Before you begin

* [Learn about TLS (Transport Layer Security)](https://en.wikipedia.org/wiki/Transport_Layer_Security){:target="_blank"}
{% include /com-install/com-install-before-begin.md %}
* [Generate a `secret-key`](/docs/community/com-auth/com-auth-key)
* [Add FeatureBase as an Azure AD application](/docs/community/com-auth/com-auth-azure-sso)
* [Set up FeatureBase Group permissions](/docs/community/com-auth/com-auth-group-permissions)

## FeatureBase configuration file location

Add authentication parameters to the `/featurebase/opt/featurebase.conf` TOML file.

{: .note}
Earlier versions of FeatureBase saved the `/featurebase.conf` file in the Operating System `/etc` folder.

## Authentication syntax

```
[auth]
  enable = true
  {client-id = "<SAML IdP value>"}
  {client-secret = "<SAML IdP value>"}
  {authorize-url = "<SAML IdP value>"}
  {token-url = "<SAML IdP value>"}
  {group-endpoint-url = "<SAML IdP value>"}
  {redirect-base-url = "<SAML IdP value>"}
  {logout-url = "<SAML IdP value>"}
  {scopes = <SAML IdP value>}
  {secret-key = "<featurebase-auth-key>"}
  {permissions = "/featurebase-directory/permissions.yaml"}
  [query-log-path = "/log/directory/"]
  [configured-ips = []]
```

### Keys

| Key | Description | Required | Additional information |
|---|---|---|---|
| `enable=true` | Activate IdP authentication for FeatureBase |  |  |
| `client-id` | SAML 2.0 Identity Provider (IdP) obtained from Azure AD Applications Overview | Yes | |
| `client-secret` | As for `client-id`.  | Yes | Obtain from the IdP |
| `authorize-url` | IdP obtained from Applications Overview > Endpoints. | Yes | Use `v2` links if there are two versions available. |
| `token-url` |  As for `authorize-url` | Yes |  |
| `group-endpoint-url` | SAML IdP API value | Yes | [SAML 2.0 IdP API documentation](https://learn.microsoft.com/en-us/azure/active-directory-b2c/saml-service-provider-options?pivots=b2c-user-flow){:target="_blank"} |
| `redirect-base-url` |  IdP URL that corresponds to your primary FeatureBase node. | Yes | Example: `https://featurebase-hostname-or-ip:10101` |
| `logout-url` | SAML IdP API value | Yes | [Single sign-out SAML protocol] documentation](https://learn.microsoft.com/en-us/azure/active-directory/develop/single-sign-out-saml-protocol){:target="_blank"} |
| `scopes` | SAML IdP API value | Yes | [SAML 2.0 scopes and permissions](https://learn.microsoft.com/en-us/azure/active-directory/develop/scopes-oidc){:target="_blank"} |
| `secret-key` | Secret key used to secure inter-node communication in a FeatureBase cluster. | Yes | [Generate a secret key](/docs/community/com-auth/com-auth-key) |
| `permissions` | Path for group permissions file that maps group IDs to index-level access. | Yes | [Add group permissions](/docs/community/com-auth/com-auth-group-permissions) |
| `query-log-path` | Set path for query audit log | Optional | <!--[Set up the query audit log](/docs/community/com-auth/com-config-log-audit-query)--> |
| `configured-ips` | Admin permissions are granted for any IP or subnet in this list.  If not included or not set, no IPs are allow-listed. | Optional | Domain names and `0.0.0.0/0` are not allowed. |

## Additional information

{% include /com-auth/com-config-group-tls-additional.md %}

## Examples

### Azure Active Directory configuration

```
[auth]
  enable = true
  {client-id = "<SAML IdP value>"}
  {client-secret = "<SAML IdP value>"}
  {authorize-url = "<SAML IdP value>"}
  {token-url = "<SAML IdP value>"}
  group-endpoint-url = "https://graph.microsoft.com/v1.0/me/transitiveMemberOf/"
  {redirect-base-url = "<SAML IdP value>"}
  logout-url = "https://login.microsoftonline.com/common/oauth2/v2.0/logout"
  scopes = ["https://graph.microsoft.com/.default", "offline_access"]
  {secret-key = "<AZURE-AD-SECRET-KEY"}
  {permissions = "/featurebase-directory/permissions.yaml"}
```

<!--
## Next step

* [Configure audit logs]

-->
