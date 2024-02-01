---
title: CREATE TABLE for impala and postgres import
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# CREATE TABLE loader-target

{% include /fbsql/fbsql-loader-eg-target-summary.md %}

## Syntax

```sql
CREATE TABLE loader-target (
    _id id,
    intf int,
    stringf string,
    idf id,
    stringsetf stringset,
    idsetf idset);
```

## Next step

Create one of the following:
* [Apache Impala data source and TOML configuration file](/docs/tools/fbsql-examples/fbsql-loader-eg-impala-source), OR
* [PostgreSQL data source and TOML configuration file](/docs/tools/fbsql-examples/fbsql-loader-eg-postgres-source)
