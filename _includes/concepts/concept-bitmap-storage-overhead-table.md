Encoding data as base-2 equality-encoded or bit-slice bitmaps makes queries faster but incurs storage overheads because the number of bitmaps scale:
* with the number of values, and
* the cardinality of those values

For example, the average storage overheads for a 10,000 value dataset will be as follows:

| Database | Dataset saved as | Average storage overhead (KB) |
|---|---|---|
| RDBMS | Row and column based structure | 20480 - 30720 |
| FeatureBase | * equality-encoded bitmaps<br/>* Bit-slice bitmaps | 1280000 |

FeatureBase overcomes this issue by compressing all bitmap data using **Roaring Bitmap Format**, based on Roaring Bitmaps.
