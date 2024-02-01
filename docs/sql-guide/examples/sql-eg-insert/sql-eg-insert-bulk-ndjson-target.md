---
title: BULK INSERT JSON example
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# BULK INSERT example using NDJSON formatted data source

Insert data into a FeatureBase table from a new line delimited JSON data source on a remote file system.

## Before you begin
* [BULK INSERT examples](/docs/sql-guide/examples/sql-eg-home/#bulk-insert-examples)
* [Learn about the New Line Delimited JSON (NDJSON) format](https://en.wikipedia.org/wiki/JSON_streaming){:target="_blank"}
* [BULK INSERT statement](/docs/sql-guide/statements/statement-insert-bulk)
* [CREATE TABLE ndjson-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-ndjson-target)

{% include /tips/tip-show-table-for-structure.md %}

## BULK INSERT statement

```sql
BULK INSERT
  INTO ndjson-target (
    _id,
    type,
    actor_id,
    actor_login,
    actor_url,
    repo_id,
    repo_name,
    repo_url,
    payload_ref,
    payload_ref_type,
    payload_master_branch,
    payload_description,
    payload_pusher_type,
    public,
    created_at
)
  MAP (
    '$.id' ID,
    '$.type' STRING,
    '$.actor.id' ID,
    '$.actor.login' STRING,
    '$.actor.url' STRING,
    '$.repo.id' ID,
    '$.repo.name' STRING,
    '$.repo.url' STRING,
    '$.payload.ref' STRING,
    '$.payload.ref_type' STRING,
    '$.payload.master_branch' STRING,
    '$.payload.description' STRING,
    '$.payload.pusher_type' STRING,
    '$.public' BOOL,
    '$.created_at' TIMESTAMP
  )
  TRANSFORM(
    @0,
    @1,
    @2,
    @3,
    @4,
    @5,
    @6,
    @7,
    @8,
    @9,
    @10,
    @11,
    @12,
    CAST(@13 as BOOL),
    @14
  )
  FROM
    'https://featurebase-public-data.s3.us-east-2.amazonaws.com/github-2015-data.json'
  WITH
    BATCHSIZE 10000
    FORMAT 'NDJSON'
    INPUT 'URL'
    ALLOW_MISSING_VALUES;
```

## Arguments

| Argument | Description | Additional information |
|---|---|---|
| `BULK INSERT INTO` | Insert data to the `ndjson-target` table `<column-list>` which is required by the `MAP` clause |  |
| `MAP`clause | String expression mapping source data to target `<column-list>` |
| `TRANSFORM` clause | Transform each value from data source to `<column-list>` and converts source `public` column to `BOOL` value using `CAST` function | [CAST function](https://www.w3schools.com/sql/func_sqlserver_cast.asp){:target="_blank"} |
| `FROM` clause | URL to ndjson data source |
| `WITH` clause | States the number of rows to batch, data source `FORMAT`, the method of `INPUT` and the statement will `ALLOW_MISSING_VALUES` from the data source |

## Next step

* [SELECT FROM ndjson-target](/docs/sql-guide/examples/sql-eg-select/sql-eg-select-from-ndjson-target)
