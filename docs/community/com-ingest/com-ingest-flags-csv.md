---
title: CSV ingester reference
layout: default
parent: Import data
grand_parent: Community
nav_order: 2
---

# CSV ingest flags reference
{: .no_toc}

Once your CSV file(s) are constructed, they can be ingested by FeatureBase using the `./molecula-consumer-csv` ingester.

{% include page-toc.md %}

## Before you begin

* [Learn how to manage ingestion](/docs/community/com-ingest/com-ingest-manage)
* [Prepare the CSV file](/docs/community/com-ingest/com-ingest-source-csv)

## Syntax

```
molecula-consumer-csv         \
  <common-flags>              \
  <csv-flags>                 \
  <id-flags>                  \
  <error-flags>               \
  <log-stat-flags>            \
  <testing-flags>             \
  <auth-token-flags>          \
  <tls-authentication-flags>  \
```

{% include /com-ingest/com-ingest-flag-source-target.md %}

{% include /com-ingest/com-ingest-flag-csv.md %}

{% include /com-ingest/com-ingest-flag-common-id.md %}

{% include /com-ingest/com-ingest-flag-common-error.md %}

{% include /com-ingest/com-ingest-flag-common-log-stat.md %}

{% include /com-ingest/com-ingest-flag-common-testing.md %}

{% include /com-ingest/com-ingest-flag-auth-token.md %}

{% include /community/com-flag-common-tls.md %}

{% include /com-ingest/com-ingest-flag-extra-auth.md %}

## Additional information

{% include /com-ingest/com-ingest-extra-batch-size.md %}

{% include /com-ingest/com-ingest-extra-concurrency.md %}

{% include /com-ingest/com-ingest-flag-extra-env-var.md %}

{% include /com-ingest/com-ingest-extra-missing-val.md %}

{% include /com-config/com-config-extra-quoting-values.md%}

{% include /com-ingest/com-ingest-extra-path-selection.md %}

{% include /com-ingest/com-ingest-extra-config-datatype.md %}

## Examples

{% include /com-ingest/com-ingest-csv-header-datafile.md %}

{% include /com-ingest/com-ingest-csv-header-flag-tls.md %}

## Further information

* [Example CSV files and ingest tool flags](/docs/community/com-ingest/com-ingest-example-csv)
