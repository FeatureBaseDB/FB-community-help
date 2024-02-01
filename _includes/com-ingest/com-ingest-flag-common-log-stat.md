## Logging & statistics flags

| Flag | Data type | Description | Default | Required |
|---|---|---|---|---|
| `--log-path` | string | Log file to write to. | Empty means stderr. |  |
| `--pprof` | string | host:port on which to listen for [pprof `go` package]( https://github.com/google/pprof) | "localhost:6062" | |
| `--stats` | string | host:port on which to host metrics | "localhost:9093" |  |
| `--track-progress` |  | Periodically print status updates on how many records have been sourced. |  |  |
| `--verbose` |  | Enable verbose logging. |  |  |
| `--write-csv` | string | Write ingested data to the named CSV file. |  |  |
