Importing data to FeatureBase involves the **ingestion** of source data.

**Ingestion** is a multi-step process that involves:
* reading data from a supplied data source
* converting data according to its defined data type into base-2 bitmaps or base-2 bit-sliced bitmaps
* appliying Roaring Bitmap compression to the results
* copying the data to a destination table
