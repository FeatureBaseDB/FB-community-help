---
title: Integer precision loss error
layout: default
parent: Cloud troubleshooting
grand_parent: Cloud
nav_order: 3
---

# Issue - Data Modeling MIN/MAX Integer Precision Loss

Specifying the MIN and MAX constraint for `int` is limited to `-2^53` and `2^53 -1`, which is less than FeatureBase can actually handle (`-2^63` and `2^63 -1`) respectively

## Cause

This error can be caused when specifying integers for the MIN and MAX constraints that are outside of the range between `-2^53` and `2^53 -1`  Precision loss due to JavaScript and Go integer limitations at scale.

## Solution

Specify int as the column name with no constraints to apply default values internally.

## Further information

* [INT Data Type](/docs/sql-guide/data-types/data-type-int)

* {% include contact-support.md %} to discuss upgrading your account.
