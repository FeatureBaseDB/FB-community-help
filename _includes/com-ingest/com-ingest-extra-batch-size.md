### `batch` additional

There is no default `batch-size` because memory usage per record varies between workloads.

During ingestion processing, there is a fixed overhead:
* from setting up an ingester transaction
* for each row

Setting large `batch-size` values will:
* average-out the overheads
* proportionally increase memory usage
* improve performance (in general terms)

For example:

| Workload includes | Batch size | Typical memory usage (MB) |
|---|---|---|
| High number of sparse keys | 20,000 | 100+ |
| High-frequency keys | 1,000,000+ |  |
