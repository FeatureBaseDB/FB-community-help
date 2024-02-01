---
title: SELECT FROM ndjson-target
layout: default
parent: SQL Examples
grand_parent: SQL guide
nav_exclude: true
---
# SELECT FROM ndjson-target

The following SELECT statements demonstrate

## Before you begin
* [SELECT examples](/docs/sql-guide/examples/sql-eg-home/#select-examples)
* [SELECT statement](/docs/sql-guide/statements/statement-select)
* [CREATE TABLE ndjson-target](/docs/sql-guide/examples/sql-eg-table/sql-eg-table-create-ndjson-target)
* [BULK INSERT from ndjson data source](/docs/sql-guide/examples/sql-eg-insert/sql-eg-insert-bulk-ndjson-target)

## SELECT with WHERE, LIKE, ORDER BY clauses

```sql
SELECT _id, actor_id, repo_url
  FROM ndjson-target
  WHERE repo_url LIKE '%suneg%'
  ORDER BY actor_id;

   _id     | actor_id | repo_url
-----------+--------- +----------------------------------------------
2489677800 | 1258383  | https://api.github.com/repos/suneg/dojo_rules
2489673246 | 1258383  | https://api.github.com/repos/suneg/dojo_rules
2489651106 | 1258383  | https://api.github.com/repos/suneg/dojo_rules
2489651097 | 1258383  | https://api.github.com/repos/suneg/dojo_rules
```

## Further information

* [SQL Guide examples](/docs/sql-guide/examples/sql-eg-home)
