### Ignore missing fields

All Kafka Avro fields are required.

However, you can ignore missing fields and leave existing values untouched by:
* creating a `union` with `null` data type in the Kafka Avro JSON config file
* adding the `allow-missing-fields` flag to the `./molecula-consumer-kafka` CLI command
