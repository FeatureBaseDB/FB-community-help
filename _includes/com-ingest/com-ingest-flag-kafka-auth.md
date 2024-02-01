## Kafka authentication flags

`kafka-tls` flags authenticate with the Kafka instance and can be used with `tls` flags that authenticate with the FeatureBase server.

| Flag | Data type | Description | Default | Required |
|---|---|---|---|---|
| `--kafka-tls.ca-certificate` | `string` | Path to CA certificate file, or literal PEM data. |  |  |
| `--kafka-tls.certificate` | `string` | Path to certificate file, or literal PEM data. |  |  |
| `--kafka-tls.enable-client-verification` | `string` | Enable verification of client certificates. |  |  |
| `--kafka-tls.key` | `string` | Path to certificate key file, or literal PEM data. |  |  |
| `--kafka-tls.skip-verify` |  | Disables verification of server certificates. |  |  |
