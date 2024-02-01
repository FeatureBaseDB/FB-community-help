## SQL ingest flags

| flag | data type | Description | Default | Required |
|---|---|---|---|---|
| `--driver` | string | key used for finding go sql database driver | postgres |  |  |
| `--connection-string` | string | sql endpoint credentials | postgres://user:password@localhost:5432/defaultindex?sslmode=disable |  |  |
| `--row-expr` | string | sql + type description on input |  |  |
| `--sting-array-separator` |  | Used to delineate values in string array | `,` |  |
