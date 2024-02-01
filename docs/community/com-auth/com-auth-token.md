---
title: TLS user auth tokens
layout: default
parent: Community authentication
grand_parent: Community
---

# How do I obtain authorization tokens?
{: .no_toc }

An `auth-token` and `refresh-token` is a valid JSON Web Token provided by FeatureBase after the user is authenticated.

These tokens are used to authenticate your user when TLS authentication is enabled, and with the following features:

* HTTPS API
* gRPC API
* Backup FeatureBase
* Restore FeatureBase from backup
* Grafana connector authentication

{: .warning}
**NEVER** share your `auth-token` or `refresh-token`. These identify and authenticate you with FeatureBase and can be misused.

{% include page-toc.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [Learn how to enable TLS authentication](/docs/community/com-auth/com-auth-tls)
* Set up a password manager or other safe storage for your tokens
* cd to `*/featurebase/opt`

## Syntax

```
featurebase auth-token
  [
    [--h | --help]
    [--host string `hostname`]
    [<tls-authentication-flags>]
  ]
```

## Flags

| Flag | Data type | Description | Default | Required | Additional information |
| `h` or `help` |  | Auth token help |  | Optional |  |
| `host string` |  | HTTPS host string `featurebase-host:port` |  | Yes | Default: `https://localhost:10101` |

{% include /community/com-flag-common-tls.md%}

<!--
## Obtain tokens from the lattice UI

[EXPERT INFORMATION NEEDED HERE:
* QUERY > What's the "lattice UI"? Is it this -- https://www.anduril.com/lattice/
* QUERY > Is this something users install [with FeatureBase| on top of FeatureBase | something else?] and if YES... do we have any setup instructions?

* Login to the lattice UI
* Right click the interface > Inspect
* Click Application
* Click Cookies > `molecula-chip` > to obtain your `auth-token`.
* Click `refresh-molecula-chip` to obtain your `refresh-token`.

-->
## Further information

* [Use tokens to Backup an authenticated FeatureBase cluster](/docs/community/com-backup/com-config-backup)
* [Use an `auth-token` to restore from an authenticated backup](/docs/community/com-backup/com-config-restore)

<!--
* [Use tokens to authenticate HTTPS API commands]
* [Use tokens to authenticate gRPC API commands]
* [Use tokens to authenticate the Grafana connector]
-->
