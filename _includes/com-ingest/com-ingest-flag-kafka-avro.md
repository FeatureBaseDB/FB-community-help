## Kafka Avro Schema Management flags

These flags apply to the `./molecula-consumer-kafka` and `./molecula-consumer-kafka-delete` CLI commands.

| Flag | Data type | Description | Default | Required | Additional |
|---|---|---|---|---|---|
| `--schema-registry-password` | `string` | Authentication secret provided by Confluent for schema registry |  | For secured schema registries | [Confluent Registry security overview](https://docs.confluent.io/platform/current/schema-registry/security/index.html){:target="_blank"} |
|  `-g`<br/>`--schema-registry-url` | `string` | Location of Confluent Schema Registry. | "http://localhost:8081" |  | Use `https://` when using TLS flags |
|  `--schema-registry-username` | `string` | Authentication key provided by Confluent for schema registry |  | For secured schema registries | [Confluent Registry security overview](https://docs.confluent.io/platform/current/schema-registry/security/index.html){:target="_blank"} |
