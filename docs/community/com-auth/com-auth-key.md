---
title: FeatureBase keygen
layout: default
parent: Community authentication
grand_parent: Community
---

# How do I generate a secret key for FeatureBase authentication?

Generate a `secret-key` used when setting up TLS authentication

* [Learn more about TLS authentication](/docs/community/com-auth/com-auth-tls)

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* cd to `*/featurebase/opt`

## Syntax

```
./featurebase keygen --[flags]
```

## Flags

| Flag | Description | Additional information |
|---|---|---|
| `h` or `help` | FeatureBase keygen help |
| `l` or `length` | Integer value for the length of the key | Defaults to 32 |

## Generate a key

* Run the `./featurebase keygen` command
* Copy the secret key for use in TLS authentication.

## Next step

* [Set up TLS authentication](/docs/community/com-auth/com-auth-tls)
