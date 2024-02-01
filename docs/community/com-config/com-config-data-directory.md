---
title: Data Directory
layout: default
parent: Community configuration
grand_parent: Community
---

# FeatureBase Data Directory reference

{: .important}
This information is provided as a reference and should not be relied upon for day-to-day operations.

## Before you begin

{% include /com-install/com-install-before-begin.md %}
* Install `tree` on the target system

## Display the data directory

{: .note}
`.pilosa` is a reference to the original name of the FeatureBase software.

* Open a CLI then run the following command:

```
tree -d -L 3 .pilosa/
```

## Data Directory structure

```
.pilosa/
├── disco
│   └── member
│       ├── snap
│       └── wal
└── indexes
    ├── fb_views
    │   ├── _keys
    │   ├── backends
    │   ├── dataframes
    │   └── fields
    ├── products
    │   ├── backends
    │   ├── dataframes
    │   └── fields
    ├── repository
    │   ├── backends
    │   ├── dataframes
    │   └── fields
    └── users
        ├── _keys
        ├── backends
        ├── dataframes
        └── fields
```

## File descriptions

These files are found in the `.pilosa` root.

| File | Description | Additional |
|---|---|---|
| `startup.log` | Log of FeatureBase version and startup |  |
| `idalloc.db` | Stores tracking information for any indexes that are using the ID auto-generation functionality provided in some ingesters. | [Ingesting data](/docs/community/com-ingest/com-ingest-manage) |

## `disco` directory

| Directory | Description | Additional information |
|---|---|---|
| `disco` | Stores etcd data |  |

## `indexes` directory

`indexes` is the main data directory containing a subdirectory for each FeatureBase table

| Directory | Description | Additional information |
|---|---|---|
| `fb_views` | FeatureBase system table | [System tables](/docs/sql-guide/system-tables/system-tables-home) |
| `<tablename>/_keys` |  A `_keys` directory is created for any index that uses a `string` key and contains a translation file for each partition the FeatureBase node is responsible for |  |
| `<tablename>/dataframes`| `Dataframe` is an alternative data format used for general purpose calculation |  |
| `<tablename>/fields` | Metadata and key translation (if present) for each field in the table |  |
| `<tablename>/backends` | Bitmap data for the table |  |

## Further information

* [Learn more about FeatureBase Clusters](/docs/community/com-cluster/com-cluster-manage)
* [Learn about Dataframe ingestion](/docs/community/com-ingest/old-ingest-dataframe)
