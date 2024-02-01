---
title: Mutual TLS
layout: default
parent: Community authentication
grand_parent: Community
---

# How do I set up mutual TLS authentication?
{: .no_toc }

FeatureBase is configured with a PEM-encoded TLS keypair and supports Mutual TLS so client server nodes can:
* cryptographically verify each other
* establish an encrypted connection

FeatureBase clusters communicate using the memberlist go library.

Enable AES-256 encryption on your FeatureBase cluster by configuring a 32-bit shared key using the memberlist protocol.

{: .note}
Internal `etcd` cluster communication does not currently support TLS.

{% include page-toc.md %}

## Before you begin

* [Learn about TLS (Transport Layer Security)](https://en.wikipedia.org/wiki/Transport_Layer_Security){:target="_blank"}
* [Learn about AES (Advanced Encryption Standard)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard){:target="_blank"}
* [Learn about the Memberlist go library](https://pkg.go.dev/github.com/hashicorp/memberlist){:target="_blank"}
{% include /com-install/com-install-before-begin.md %}
* [Learn how to enable FeatureBase Community authentication](/docs/community/com-auth/com-auth-tls)

## Create a testing certificate

{: .important}
CERTSTRAP can be used for testing purposes but is **NOT** recommended for production environments.

<!--QUERY - What IS recommended for prod environments?? -->

### Step 1 - Create a root CA

* Open a CLI and enter the following command

```shell
    certstrap init --common-name "auth.mybusiness.com"
```

### Step 2 - Create and sign a keypair for FeatureBase:

<!-- QUERY -- is "mybusiness" required or is this a value the users can define?-->

* Run the following command:

```shell
    certstrap request-cert --common-name "featurebase.mybusiness.com"
    certstrap sign featurebase.mybusiness.com --CA auth.mybusiness.com
```

### Step 3 - create a Memberlist 32-bit key

Create a 32-bit key to encrypt Memberlist (gossip) communication:

```shell
    head -c 32 /dev/random > out/gossip.key
```

### Step 4 - verify files have been generated

Verify the following files have been created in the `/dev/random` directory:

* auth.mybusiness.com.crl
* auth.mybusiness.com.crt
* auth.mybusiness.com.key
* featurebase.mybusiness.com.crt
* featurebase.mybusiness.com.csr
* featurebase.mybusiness.com.key
* gossip.key

### Step 5 - Update FeatureBase bind configuration

Update the FeatureBase bind configuration to use the `https` scheme.


```toml
bind = "featurebase-hostname-or-ip:10101"
bind-grpc = "featurebase-hostname-or-ip:10101"
```

## Update FeatureBase configuration

The certificate and private keys can be added to FeatureBase configuration using environment variables, a configuration file or command line parameters.

### Add certificates using environment variables

<!--EXAMPLE GOES HERE-->

### Add certificates using a `toml` configuration file

```toml
    [tls]
      certificate = "/path/to/featurebase.mybusiness.com.crt"
      key = "/path/to/featurebase.mybusiness.com.key"
```
<!--
### Add certificates using command-line parameters

```
  EXAMPLE GOES HERE
```
-->
