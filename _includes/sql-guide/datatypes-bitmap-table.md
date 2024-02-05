| User data | FeatureBase data type | Bitmap type |
|---|---|---|
| Boolean | [Bool](https://docs.featurebase.com/docs/sql-guide/data/-types/data-type-bool) | [Equality-encoded bitmaps](/docs/concepts/concept-bitmaps-equality-encoded) |
| Floating point | [Decimal](https://docs.featurebase.com/docs/sql-guide/data/-types/data-type-decimal) | [Bit-sliced](/docs/concepts/concept-bitmaps-bit-slice) |
| Unsigned integer | [ID](https://docs.featurebase.com/docs/sql-guide/data/-types/data-type-id) | [Equality-encoded bitmaps](/docs/concepts/concept-bitmaps-equality-encoded) |
| Signed Integer | [Integer](https://docs.featurebase.com/docs/sql-guide/data/-types/data-type-int) | [Bit-sliced](/docs/concepts/concept-bitmaps-bit-slice) |
| Alphanumeric | [String](https://docs.featurebase.com/docs/sql-guide/data/-types/data-type-string) | [Equality-encoded bitmaps](/docs/concepts/concept-bitmaps-equality-encoded) |
| Date and time | [Timestamp](https://docs.featurebase.com/docs/sql-guide/data/-types/data-type-timestamp) | [Bit-sliced](/docs/concepts/concept-bitmaps-bit-slice) |
| Low cardinality | [Set](https://docs.featurebase.com/docs/sql-guide/data/-types/data-types-home#low-cardinality-data-types) | [Equality-encoded bitmaps](/docs/concepts/concept-bitmaps-equality-encoded) |
| Low cardinality keyed to date/time values | [SetQ](https://docs.featurebase.com/docs/sql-guide/data/-types/data-types-home#low-cardinality-data-types) | [Equality-encoded bitmaps](/docs/concepts/concept-bitmaps-equality-encoded) |
