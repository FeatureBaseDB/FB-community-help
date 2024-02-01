---
title: Install or upgrade fbsql
layout: default
parent: fbsql CLI SQL tool
grand_parent: Tools
nav_order: 2
---
# How do I install or upgrade the fbsql CLI?

fbsql is provided as a tool for anyone who downloads the FeatureBase source code from GitHub.

The application will run natively on any Linux or MacOS operating system. For Windows machines, the system can be installed and run on a Linux virtual machine.

## Before you begin

* [Learn about fbsql](/docs/tools/fbsql/fbsql-home)
{% include /common/common-install-before-begin.md %}
* [Install make](https://www.gnu.org/software/make/){:target="_blank"}
* [Install go](https://go.dev/doc/install){:target="_blank"}
* Delete earlier installations at the CLI with `rm -rf fbsql`

## Step 1 - Create installation directory

* Open a CLI on your computer.
* Run `mkdir fbsql`.

## Step 2 - clone the repository and install fbsql

* CD to `fbsql` then clone the FeatureBase code repository:

```
git clone git@github.com:molecula/featurebase.git
```
* CD to `featurebase` then run the installation command:

```shell
make install-fbsql
```

## Further information

* [Learn how to connect to a Cloud database with fbsql](/docs/tools/fbsql/fbsql-connect-cloud-db)
* [Learn how to connect to a Community database with fbsql](/docs/tools/fbsql/fbsql-connect-com-db)
* [Learn how to run SQL commands with fbsql](/docs/tools/fbsql/fbsql-running-sql)
