## Error handling flags

| flag | data type | Description | Default | Required |
|---|---|---|---|---|
| `--allow-decimal-out-of-range` |  | Allow ingest to continue when it encounters out of range decimals in `Decimal` Fields. | false |  |
| `--allow-int-out-of-range` |  | Allow ingest to continue when it encounters out of range integers in `Int` Fields. | false |  |
| `--allow-timestamp-out-of-range` |  | Allow ingest to continue when it encounters out of range timestamps in `Timestamp` Fields. | false |  |
| `--batch-max-staleness` | duration | Maximum length of time the oldest record in a batch can exist before the batch is flushed. This may result in timeouts while waiting for the source |  |
| `--commit-timeout` | duration | A `commit` is a process of informing the data source the current batch of records is ingested. `--commit-timeout` is the maximum time before the commit process is cancelled. May not function for CSV ingest process.
|  |  |
| `--skip-bad-rows` | int | Fail the ingest process if `n` rows are not processed. |  |  |
