---
title: Mutex ingest slow
layout: default
parent: Community troubleshooting
grand_parent: Community
---

# Issue - ingest process becomes slow when ingesting mutex fields

## Cause

The ingestion process must detect if existing values should be cleared when ingesting mutex fields with unique values on FeatureBase Clusters.

This introduces an increased complexity of `O(n^2)` because each ingested row must be compared against each row in the field.
