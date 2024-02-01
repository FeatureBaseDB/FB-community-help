### Kafka SSL keys

| Flag | Data type | Description | Default | Required | Additional |
|---|---|---|---|---|---|
| `--kafka-enable-ssl-certificate-verification`  |  | (enable.ssl.certificate.verification) |  |  |  |
|  `--kafka-group-instance-id` | `string` | The (group.instance.id) kafka consumer configuration |  |  |  |
| `--kafka-max-poll-interval` | `string` | The (max.poll.interval.ms) kafka consumer configuration. The max time the Kafka consumer can go without polling the broker.  |  |  | Kafka consumer exits after this timeout. |
| `--kafka-sasl-mechanism` | `string` | SASL mechanism to use for authentication.(sasl.mechanism) |  |  |  |
| `--kafka-sasl-password` | `string` | SASL authentication password (sasl.password) |  |  |  |
| `--kafka-sasl-username` | `string` | SASL authentication username (sasl.username) |  |  |  |
| `--kafka-security-protocol` | `string` | Protocol used to communicate with brokers (security.protocol) |  |  |  |
| `--kafka-session-timeout` | `string` | The (session.timeout.ms) kafka consumer configuration. |  |  | The max time the Kafka consumer can go without sending a heartbeat to the broker |
| `--kafka-socket-keepalive-enable` | `string` | The (socket.keepalive.enable) kafka consumer configuration |  |  |  |
| `--kafka-socket-timeout-ms` | `int` | (socket.timeout.ms) |  |  |  |
| `--kafka-ssl-ca-location` | `string` | File or directory path to CA certificate(s) |  |  | Used for verifying the broker's key (ssl.ca.location) |
| `--kafka-ssl-certificate-location` | `string` | Path to client's public key (PEM) |  |  | Used for authentication(ssl.certificate.location) |
| `--kafka-ssl-endpoint-identification-algorithm` | `string` | The endpoint identification algorithm used by clients to validate server host name (ssl.endpoint.identification.algorithm) |  |  |  |
| `--kafka-ssl-key-location` | `string` | Path to client's private key (PEM) |  |  | Used for authentication(ssl.key.location) |
| `--kafka-ssl-key-password`| `string` | Private key passphrase |  |  | fUsed with ssl.key.location and set_ssl_cert()(ssl.key.password) |
