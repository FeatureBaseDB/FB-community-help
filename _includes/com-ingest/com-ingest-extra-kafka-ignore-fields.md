### Ignore missing fields

All Kafka Avro fields are required.

However, you can ignore missing fields and leave existing values untouched with the following methods:

| Kafka ingest type | Method | Additional information |
|---|---|---|
| Kafka Avro | create a `union` with `null` data type |  |
| Kafka delete<br/>Kafka static | Add `allow-missing-fields` flag to ./molecula-consumer ingest command | * [Kafka Delete ingest](/docs/community/com-ingest/com-ingest-kafka-avro-delete)<br/>* [Kafka Static ingest](/docs/community/com-ingest/com-ingest-kafka-static-schema) |
