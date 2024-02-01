---
title: Ingesting from Avro schema registry
layout: default
parent: Data modeling overview
grand_parent: Concepts
nav-order: 5
---

# Ingesting from Avro Schema Registry

How the Ingester indexes data in FeatureBase can be controlled to some extent via the schema registry. Avro schemas allow arbitrary properties to be associated with any item to implement features like [logical types](https://avro.apache.org/docs/current/spec.html#Logical+Types).

A "float" or "double" type field in an Avro schema will be ingested into FeatureBase as a decimal field. If the property "scale" is provided, and is an integer, the value will be multiplied by 10^scale before being ingested. FeatureBase also stores the scale internally, so decimal fields will scale their query parameters appropriately, and floating point numbers are accepted as query parameters. A type which uses the logical type "decimal" will also be ingested as a decimal provided that it is 8 bytes or less (64 bit).

A "boolean" type field (or a union of boolean and null), will be ingested according to the "pack-bools" setting on the ingester. By default, boolean fields are packed into two "set" fields in FeatureBase which has a few benefits. It reduces fragmentation internally in FeatureBase, and allows one to perform "TopN" queries on all boolean fields together. The reason there are two fields is to distinguish between true, false, and null. Each row in the "bools" field represents whether the boolean value is true. Each row in the "bools-exists" field represents whether or not the value is null. So, a set bit in the "bools" field always implies the corresponding set bit in the "bools-exists" field, but the lack of a set bit in the "bools" field needs to check "bools-exists" to determine if the value is null or false.

An "enum" type will be ingested into a FeatureBase mutex field by default. Unlike a set field, if a different value comes in for the same record, the existing value will automatically be cleared—that is, each record (FeatureBase column) can only have one value for a mutex field.

A "string" type will be ingested into a FeatureBase set field by default. One can choose to use a mutex field instead by adding the property '"mutex": true' to the schema for that field.

Currently, the ingester supports a limited subset of Avro types. The top level type must be a Record, and nested fields are not supported—meaning that fields must not be of type Record or Map. Unions are only supported if it is a union of a supported type and null. Arrays are supported as long as they contain strings, bytes, fixed or enum types.

Field names must be valid FeatureBase field names, so they must be all lower case, start with a letter, contain only letters, numbers, or dashes, and be 64 characters or less. We're hoping to lift these restrictions in an upcoming release.
