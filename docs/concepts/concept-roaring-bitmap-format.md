---
title: Roaring Bitmap Format
layout: default
parent: Bitmap index overview
grand_parent: Concepts
nav_order: 3
---
# How does FeatureBase reduce storage overheads?
{: .no_toc }

{% include /concepts/concept-bitmap-storage-overhead-table.md %}

{% include page-toc.md %}

## Before you begin

* [Learn about Roaring Bitmaps](https://www.roaringbitmap.org/){:target="_blank"}
* [Learn about FeatureBase bitmaps](/docs/concepts/concept-bitmaps)
* [Learn about equality-encoded bitmaps](/docs/concepts/concept-bitmaps-equality-encoded)
* [Learn about bit-sliced bitmaps](/docs/concepts/concept-bitmaps-bit-slice)

## What kind of database is Roaring Bitmap Format?

At the highest level, RBF consists of two data files, saved to disk, also known as a **shard**.

![](/assets/images/concepts/concept-rbf-file-structure.png)

| Data file | Consisting of | Additional information |
|---|---|
| RBF | The RBF data file contains a sequential collection of Roaring Bitmap friendly 8kb page files | [RBF data file](#what-is-the-rbf-data-file) |
| Write Ahead Log (WAL) | Sequential snapshot of transactions batched into Roaring Bitmap containers of 2^16 integers (65536 bits) | When transactions finish, the checkpointing process:<br/>* updates each database page with changes from the WAL file<br/>* truncates the WAL file when updates are complete |

## What is the RBF data file?

Roaring Bitmap Format (RBF) is a collection of b-trees serialized to disk that contain a page hierarchy used to store:
* RBF metadata
* a b-tree structure that stores data in Roaring Bitmap containers.

### RBF metadata pages

The following page types contain RBF metadata:

| Page number | Page type | Description | Additional information |
|---|---|---|---|
| 0 | Meta | The Meta page keeps track of b-tree information including:<br/>* total pages<br/>* current position in the Write Ahead Log<br/>* Root record page number<br/>* Freelist page number | * [Freelist reference](/docs/concepts/concept-rbf-freelist-ref)<br/>* [Meta page example](#meta-page) |
| 1 | Root record | Stores a list of bitmaps<br/>* defined as combination of field and view<br/>* and root page number for that b-tree | [Root record example](#root-record) |

### B-tree structure and data pages

The following page types contain the b-tree structure and data:

![](/assets/images/concepts/concept-rbf-page-tree.png)

| Page type | Description | Additional information |
|---|---|---|
| Branch | Branch pages make up the general “tree” structure of the b-tree, and consists of pointers to branch and leaf nodes | Pointers to additional branch pages are created when an RBF database is expanded. |
| Leaf | Leaf pages contain one or Roaring Bitmap containers of data in a specified format. | [Leaf page additional](#leaf-page-additional) |
| Bitmap | A bitmap page contains 8KB (65536 bytes) of Roaring Bitmap container data and is referenced by a Leaf Bitmap page. | [Bitmap page additional](#bitmap-page-additional) |

## Additional information

### Benefits and features of RBF

RBF has the following benefits and features:
* full ACID (Atomicity, Consistency, Isolation, Durability) transaction support which allows incremental updates within the RBF file
* 8KB page files can accommodate the largest possible Roaring Bitmap container

### Leaf page additional

Leaf pages relate directly to Roaring Bitmap format which:
* splits bitmaps into containers that are 65,536 bits wide
* chooses one of three encoding types for the container based on which will give the best compression:

| Type | Data storage | Use case | Additional information |
|---|---|---|---|
| Array | A Leaf Array page contains cells which correspond to a Roaring Bitmap container | Sparse containers with few bits set | An array of 16-bit integers is kept to tell which of the 65,535 bits are set |
| Run Length Encoded (RLE) | A Leaf RLE page contains cells which correspond to a Roaring Bitmap container | Containers where most or all bits are set |
| Bitmap pointer | Uncompressed, always 8KB (65,536 bits) |  | The cell contains a reference to a separate RBF page because Roaring Bitmap containers are exactly 8KB |

#### Leaf/Roaring Bitmap Bitwise operations

Bitwise operations (AND, OR, XOR, DIFFERENCE, NOT, etc.) are defined on each possible pair of encodings which means:
* decode-operate-encode processes are not required
* all operations take place on the data in the format it's already in
* compression benefits double as performance benefits
* it takes fewer processor instructions to skip over sections of containers where no bits or all bits are set

### Bitmap page additional

Bitmaps are defined as a combination of field and view.

<!-- awaiting feedback on what these are
* Field=row
* View=
-->

{: .note}
Bitmap pages have no space for metadata so that is stored higher in the heirarchy

## Examples

### Meta page

```
Pgno: 0
Type: meta
PageN: 5
WALID: 8
Root Record Pgno: 1
Freelist Pgno: 2
```

### Root record page

```
Pgno: 1
Type: root record
Next: 0
Records: n=2
[0]: name="~_exists;standard<" pgno=3
[1]: name="~fld1;standard<" pgno=4
```

### Branch page

```
Pgno: 5
Type: branch
Cells: n=9
[0]: key=16 flags=0 pgno=47
[1]: key=32 flags=0 pgno=159
[2]: key=48 flags=0 pgno=80
[3]: key=64 flags=0 pgno=180
[4]: key=80 flags=0 pgno=48
[5]: key=96 flags=0 pgno=136
[6]: key=112 flags=0 pgno=49
[7]: key=128 flags=0 pgno=103
[8]: key=144 flags=0 pgno=181
```

### Leaf array page

```
Pgno: 23
Type: leaf
Cells: n=2
[0]: key=48 type=array values=[2 27 37 42 44]
[1]: key=51 type=array values=[1315 1316 1319]
```

### Leaf bitmap page

```
Pgno: 47
Type: leaf
Cells: n=1
[0]: key=16 type=bitmap-ptr pgno=217
```

## Further information

* [Learn about Roaring Bitmaps](https://roaringbitmap.org/about/)
* [Roaring specification](https://github.com/RoaringBitmap/RoaringFormatSpec){:target="_blank"}
* [ACID transactions](https://www.databricks.com/glossary/acid-transactions){:target="_blank"}
