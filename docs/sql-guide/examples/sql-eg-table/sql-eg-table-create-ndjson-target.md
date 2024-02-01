---
title: CREATE TABLE ndjson-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---

# CREATE TABLE ndjson-target

The table `ndjson-target` is the destination for a `BULK INSERT` statement, and includes:
* a numeric unique identifier
* BOOL, ID, STRING and TIMESTAMP data types
* `IF NOT EXISTS` and `WITH COMMENT` table options

## Before you begin
* [CREATE TABLE examples](/docs/sql-guide/examples/sql-eg-home/#create-table-examples)
* [CREATE TABLE statement](/docs/sql-guide/statements/statement-table-create)
* [BOOL data type](/docs/sql-guide/data-types/data-type-bool)
* [ID data type](/docs/sql-guide/data-types/data-type-id)
* [INT data type](/docs/sql-guide/data-types/data-type-int)
* [STRING data type](/docs/sql-guide/data-types/data-type-string)
* [TIMESTAMP data type](/docs/sql-guide/data-types/data-type-timestamp)

## CREATE TABLE statement

```sql
CREATE TABLE
  IF NOT EXISTS
  ndjson-target (
    _id ID,
    type STRING,
    actor_id ID,
    actor_login STRING,
    actor_url STRING,
    repo_id ID,
    repo_name STRING,
    repo_url STRING,
    payload_ref STRING,
    payload_ref_type STRING,
    payload_master_branch STRING,
    payload_description STRING,
    payload_pusher_type STRING,
    public BOOL,
   created_at TIMESTAMP
  )
   WITH COMMENT 'this table intended for ndjson data';
```

## Next step

* [BULK INSERT INTO ndjson-target from URL](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-ndjson-target)
