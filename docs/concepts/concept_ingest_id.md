---
title: Unique identifier
layout: default
parent: Data modeling overview
grand_parent: Concepts
nav_order: 1
---

# Conceptualising the unique identifier

When ingesting into FeatureBase, each record must be associated with a key.

<!--only applies to community cli ingest-->

Ingesters support four ways to do this, three suitable for production workloads:

- `primary-key-fields`,
- `id-field`,
- `external-generate`, to use the FeatureBase ID allocator, optionally including `offset-mode`,
- `auto-generate`, suitable for testing.

## Identifying the best ID field

The `id-field` option should be considered when there is an existing field in the data which uniquely identifies each record and consists of contiguous positive integers. For example, the auto-incremented ID field from a relational database is usually perfect for this.

In most other cases, the `primary-key-fields` option should be used. This uses one or more fields, converted to strings, then concatenated (using `|` as the delimiter), to create unique record IDs. When only a single field is used for this, it will *not* be indexed as a field in FeatureBase. When multiple source fields are used, each individual field will be indexed in FeatureBase, in addition to being used for the record ID.

As an example, consider a data set of students across multiple schools, perhaps with a different CSV file for each school:

| school   | studentID | UUID     |   age | grade | ... |
| ---      |       --- | ---      |   --- |   --- | --- |
| (string) |     (int) | (string) | (int) | (int) |     |
| Anderson |         0 | 63a8     |    14 |     9 |     |
| Anderson |         1 | 98e9     |    16 |    11 |     |
| Anderson |         2 | 9ccb     |    16 |    11 |     |
| Anderson |         3 | 7325     |    15 |    10 |     |
| Bowie    |         0 | 6ed3     |    17 |    12 |     |
| Bowie    |         1 | 62a5     |    16 |    11 |     |
| Bowie    |         2 | bd6c     |    15 |    10 |     |
| Bowie    |         3 | 5651     |    16 |    10 |     |

The studentID column, unique within a single school, serves as an identifier. When ingesting a single file corresponding to a single school, an ingest option like `--id-field=studentID` might work well. This will result in an index with `studentID` as FeatureBase record IDs, and every *other* column potentially represented as a FeatureBase field, including `school`, `UUID`, `age`, and `grade`.

To ingest multiple files without conflicting IDs, a different approach is required. When an appropriate identifier like a UUID is available, that can be used directly, with an option like `--primary-key-fields=UUID`. This will result in an index with `UUID` as FeatureBase record keys, so the index depends on key translation to convert UUID string values to integer record IDs. Every other column would potentially be represented as a FeatureBase field, including `school`, `studentID`, `age`, and `grade`.

Sometimes, an appropriate unique identifier is not directly available, or perhaps a data set is designed to use a composite key as a unique identifier. For example, if the students data set did not include a UUID column. In this case, multiple values can be combined to produce a composite identifier that is unique. One option that would work well here is the pair (school, studentID), which would be specified as `--primary-key-fields=school,studentID`. This would result in an index with this composite key as FeatureBase record keys. The key for the first row in the data set would be "Anderson|0". Again, this index would depend on key translation. This index, in contrast to the previous, could include *every* column as a FeatureBase field, including both `school` and `studentID` as separate fields.

The `auto-generate` option can create auto-incrementing integer IDs, when generating test data, or when ingesting from a CSV source, for example. This option is suitable for quick testing purposes, but does not support using multiple ingest processes or stopping and restarting ingest.

Finally, setting `external-generate` in addition to `auto-generate` uses FeatureBase's ID generation feature. Additionally, `offset-mode` can be set for use with Kafka.
