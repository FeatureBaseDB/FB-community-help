---
title: Equality-encoded bitmaps
layout: default
parent: Bitmap index overview
grand_parent: Concepts
nav_order: 1
---

# How does FeatureBase encode non-integer values?
{: .no_toc }

FeatureBase uses **equality encoding** to create a Boolean relationship between a value and its unique identifier.

{% include page-toc.md %}

## Before you begin

* [Learn how FeatureBase differs to traditional databases](/docs/concepts/concepts-home)
* [Learn about FeatureBase bitmaps](/docs/concepts/concept-bitmaps)

## What data types are equality-encoded?

Each value of user data mapped to the following data types are converted to equality-encoded bitmaps:

| User data        | FeatureBase data type                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| Boolean          | [BOOL](/docs/sql-guide/data-types/data-type-bool)                                       |
| Unsigned integer | [ID](/docs/sql-guide/data-types/data-type-id)                                           |
| Alphanumeric     | [String](/docs/sql-guide/data-types/data-type-string)                                   |
| Low cardinality  | [SET, SETQ](/docs/sql-guide/data-types/data-types-home/#low-cardinality-data-types) |

## How does equality encoding work?

FeatureBase equality encoding:
* uses the actual value as a column name, saved to disk
* represents the relationship between unique identifier and column in boolean terms:
  * `1` indicates the relationship exists
  * `0` indicates it does not.

## How does FeatureBase equality encode data?

{% include /concepts/concept-bitmap-source-data-table.md %}

The `historical_name` data can be equality-encoded as follows:

```
| ID  | Pilosa | Molecula | FeatureBase |
| --- | ------ | -------- | ----------- |
| 1   | 1      | 0        | 0           |
```

```
| ID  | Pilosa | Molecula | FeatureBase |
| --- | ------ | -------- | ----------- |
| 2   | 0      | 1        | 0           |
```

```
| ID  | Pilosa | Molecula | FeatureBase |
| --- | ------ | -------- | ----------- |
| 3   | 0      | 0        | 1           |
```

## Equality encoding integer values

Equality encoding integer values is less effective because Boolean relationships are harder to represent.

### Equality encoding specific values

Using the `downloads` column as unique identifier, the data can be encoded as follows:

```
| id-downloads | Pilosa | Molecula | FeatureBase |
| ------------ | ------ | -------- | ----------- |
| 10000        | 1      | 0        | 0           |
```

```
| id-downloads | Pilosa | Molecula | FeatureBase |
| ------------ | ------ | -------- | ----------- |
| 18524        | 0      | 1        | 0           |
```
```
| id-downloads | Pilosa | Molecula | FeatureBase |
| ------------ | ------ | -------- | ----------- |
| 50000        | 0      | 0        | 1           |
```

### Encoding integer values as a range

Values can be encoded as a range which reduces the number of bitmaps and create/delete operations.

```
| id-download-range | Pilosa | Molecula | FeatureBase |
| ----------------- | ------ | -------- | ----------- |
| 0-25000           | 1      | 1        | 0           |
| 25001-50000       | 0      | 0        | 1           |
```

### Issues equality encoding integer values

The following issues occur with equality encoding integers.

| Method | Issue |
|---|---|
| Encode values | Two operations are required to update the values which incurs a processing overhead:<br/>* Create a new bitmap with updated values<br/>* Delete the original bitmap |
| Range encoding | Specific values are lost  |

FeatureBase avoids these issues by bit-slicing integer values.

* [Learn about bit-slice bitmaps](/docs/concepts/concept-bitmaps-bit-slice)

## Bitmap storage overheads

{% include /concepts/concept-bitmap-storage-overhead-table.md %}

* [Learn about Roaring Bitmap Format](/docs/concepts/concept-roaring-bitmap-format)
* [Learn about bitmap compression with Roaring Bitmap Format](/docs/concepts/concept-roaring-bitmap-format)
