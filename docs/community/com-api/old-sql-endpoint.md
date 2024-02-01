---
title: SQL Queries over HTTP endpoint
layout: default
parent: Community API
grand_parent: Community
nav_order: 1
---

FeatureBase Community users can run SQL Queries over the HTTP SQL CLI.

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* [Enable the SQL CLI for FeatureBase Community](/docs/community/com-config/com-config-sql-cli-enable)

## Endpoint syntax

`POST /sql`

## Description

The sql query text is passed in the body of the request, with a `Content-Type` of `text/plain`.

## Example

``` request
curl -XPOST localhost:10101/sql -d 'select 1'
```

## Result

``` response
{
  "schema": {
    "fields": [
      {
        "name": "",
        "type": "INT"
      }
    ]
  },
  "data": [
    [
      1
    ]
  ],
  "exec_time": 16412581
}
```

## Errors

If an error occurs during query execution, the request will still succeed, even though the body may contain an error.

### Example

``` request
curl -XPOST localhost:10101/sql -d 'select foo'
```

### Result

``` response
{
  "error": "[1:8] column 'foo' not found"
}
```

## Further information

* [FeatureBase SQL guide](/docs/sql-guide/sql-guide-home)
