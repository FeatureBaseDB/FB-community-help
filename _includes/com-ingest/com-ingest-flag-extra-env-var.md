### Using environment variables to set flags

All command line flags can be set via environment variables by:

* removing leading dashes
* adding `CONSUMER_` as prefix
* writing the flag in UPPER CASE
* converting dashes or dots to underscores

For example:

| Original flag | Equivalent for use with environment variables |
|---|---|
| `--tls.ca-certificate` | `CONSUMER_TLS_CA_CERTIFICATE` |
