In this example:

* The Kafka schema will encode the data to Kafka
* The messages include three Kafka messages:
  * `a_stringset` and `a_timestamp` fields that use the union between a field and null
  * The third message `{"null": null}` can be passed when there is missing data for a record.

This means the `./molecula-consumer-kafka` CLI command:
  * ignores null fields
  * requires field values for all other fields
