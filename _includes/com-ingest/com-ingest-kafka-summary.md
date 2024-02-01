FeatureBase has three import methods for Kafka data:

* Kafka consumer
* Kafka static consumer
* Kafka delete consumer

In all cases, the FeatureBase ingest tool:
* Streams and reads Avro-encoded records from an Apache Kafka topic over HTTPS
* Decodes the records
* Converts the records to FeatureBase Streaming Bitmap format
* Writes the converted records to the target database table
