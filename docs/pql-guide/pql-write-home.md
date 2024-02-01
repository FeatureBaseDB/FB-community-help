---
title: PQL Write
layout: default
parent: PQL guide
has_children: true
nav_order: 2
has_toc: false
---

# PQL Write Operations

- [Clear](/docs/pql-guide/pql-write-clear){:target="_blank"} sets a single specified bit to zero -- said another way, it removes a value from a field for a specified record.
- [ClearRow](/docs/pql-guide/pql-write-clearrow){:target="_blank"} sets all bits to zero in the specified row -- said another way, it removes a value from a field for all records in an index.
- [Delete](/docs/pql-guide/pql-write-delete){:target="_blank"} iterates over all fields and views in a set of provided columns, removing the columns -- i.e. removes an entire record or set of records from an index.
- [Set](/docs/pql-guide/pql-write-set){:target="_blank"} sets a single specified bit to one -- said another way, it gives a specified record a value in a field.
- [Store](/docs/pql-guide/pql-write-store){:target="_blank"} writes the results of the row call argument to the specified row.
