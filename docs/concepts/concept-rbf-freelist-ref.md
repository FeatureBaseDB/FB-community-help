---
title: RBF page allocation
layout: default
parent: Bitmap index overview
grand_parent: Concepts
nav_order: 4
---

# Reference: RBF page allocation

The Roaring Bitmap Format Freelist page is an internal bitmap used to track deallocated pages.

## Before you begin

* [Learn about Roaring Bitmap Format pages](/docs/concepts/concept-roaring-bitmap-format)

## How are pages deallocated?

An RBF page is available for deallocation when:
* delete actions remove all elements from a page
* a bitmap is deleted

RBF deallocates pages to reduce disk space at the end of a transaction in three steps:
1. Deallocate free pages from the end of the data file
2. Adds deallocated pages to the Freelist
3. Shrinks the Meta page `pageN` field to remove the deallocated pages

{: .note}
RBF cannot deallocate pages that are in use.

## How are pages reallocated?

RBF allocates a new page on disk:
* when a new bitmap is created
* if an existing page fills up and needs to be split in two

Page reallocation works on the following logic:

| Page available in Freelist | Page not available |
|---|---|
| Reallocate the lowest numbered page first | * Extend the Freelist data file<br/>* Add a new page<br/>* Increment the Meta page `pageN` field by 1 |
