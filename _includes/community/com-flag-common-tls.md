## TLS authentication flags

| Flag | Data type | Description | Default |Required |
|---|---|---|---|---|
| `--tls.ca-certificate` | string | Path to CA certificate file on the target FeatureBase instance, or literal PEM data. |  | Yes |
| `--tls.certificate` | string | Path to certificate file on the target FeatureBase instance, or literal PEM data. |  | Yes |
| `--tls.enable-client-verification` |  | Enable verification of client certificates. |  | Yes |
| `--tls.key` | string | Path to certificate key file on the target FeatureBase instance, or literal PEM data. |  | Yes |
| `--tls.skip-verify` |  | Disables verification of server certificates. | Use for self-signed certificates. |  | Optional |
