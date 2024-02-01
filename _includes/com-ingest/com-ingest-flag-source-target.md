## Common flags

| Flag | Data type | Description | Default | Required | Additional |
|---|---|---|---|---|---|
| `--batch-size` | int | Number of records to read before indexing them as a batch. Recommended: 1,048,576 | 1 |  | A larger value indicates better throughput and more memory usage. |
| `--concurrency` | int | Number of concurrent sources and indexing routines to launch. | 1 | When ingesting multiple CSV files | Does not support SQL ingestion or `--auto-generate` |
| `--featurebase-hosts` | string | Supply FeatureBase default bind points using comma separated list of host:port pairs. | `[localhost:10101]` |  |  |
| `--index` | string | Name of target FeatureBase index. |   | Yes |
| `--string-array-separator` | string | character used to delineate values in `string` array | `,` |  |  |
| `--use-shard-transactional-endpoint` |  | Use alternate import endpoint that ingests data for all fields in a shard in a single atomic request. |  | Recommended. | Flag has negative performance impact and better consistency |
