---
title: SQL ingester reference
layout: default
parent: Import data
grand_parent: Community
nav_order: 5
---

# SQL ingest tool reference
{: .no_toc}

The SQL ingester tool selects data from a MSSQL, MySQL or Postgres database table.

{: .important}
Source column names are used to specify column names for each record.

{% include page-toc.md %}

## Before you begin

* [Learn how to manage ingestion](/docs/community/com-ingest/com-ingest-manage)
* [Prepare the SQL](/docs/community/com-ingest/com-ingest-source-sql)

## Syntax

```
molecula-consumer-sql        \
  <source-and-target-flags>  \
  <sql-flags>                \
  <id-flags>                 \
  <batch-flags>              \
  <error-flags>              \
  <log-stat-flags>           \
  <testing-flags>            \
  <auth-token-flags>         \
  <tls-authentication-flags> \
```

{% include /com-ingest/com-ingest-flag-source-target.md %}

{% include /com-ingest/com-ingest-flag-sql.md %}

{% include /com-ingest/com-ingest-flag-common-id.md %}

{% include /com-ingest/com-ingest-flag-common-batch.md %}

{% include /com-ingest/com-ingest-flag-common-error.md %}

{% include /com-ingest/com-ingest-flag-common-log-stat.md %}

{% include /com-ingest/com-ingest-flag-common-testing.md %}

{% include /com-ingest/com-ingest-flag-auth-token.md %}

{% include /community/com-flag-common-tls.md %}

## Additional information

{% include /com-ingest/com-ingest-extra-batch-size.md %}

{% include /com-ingest/com-ingest-extra-concurrency.md %}

{% include /com-ingest/com-ingest-flag-sql-connect-string.md%}

{% include /com-ingest/com-ingest-extra-missing-val.md %}

{% include /com-config/com-config-extra-quoting-values.md%}

{% include /com-ingest/com-ingest-extra-path-selection.md %}

{% include /com-ingest/com-ingest-extra-config-datatype.md %}

## Examples

{% include /com-ingest/com-ingest-flag-sql-server.md %}

{% include /com-ingest/com-ingest-flags-sql-assets-table.md %}

{% include /com-ingest/com-ingest-flags-sql-join-assets-events.md %}

## Further information

* [Example SQL and ingest tool flags](/docs/community/com-ingest/com-ingest-example-sql)
