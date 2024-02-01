# Page order

## Before you begin

* [Learn about nesting pages beneath a parent](/help-on-help/style-guide/content-nav-nesting-folder.md)

## Page order

The page order is governed by:

* the alphabetical name of the file, OR
* explicit `nav_order` to manually order pages as required

## Examples

## Folder structure file names

In general terms, you can just use the filename for reference content such as SQL. For example:

```
functions
├── function-ascii.md
├── function-char.md
└── function-len.md
```

## Explicitly stated nav order

Set an explicit nav_order for pages you want to place in a specific order
```
---
title: Page-title-in-nav
layout: default
parent: Parent-page
nav_order: 1
---
```
