## CSV ingest flags

| Flag | Data type | Description | Default | Required |
|---|---|---|---|---|
| `--files` | string | List of files, URLs, or directories to ingest | `[]` | Yes |
| `--header` | string | Defined as  `{source_column_name}[__data_type[_constraint-value...]],...` | `[]` | If `data_type`, `constraint-value` not defined in data file. |
| `--ignore-header` |  | Ignore header in file and use `--header` flag to define column names and data types |  | When using `--header` flag |
