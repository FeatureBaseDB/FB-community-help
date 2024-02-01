### Kafka Avro ingest script for `quantum` data
```
./molecula-consumer-kafka \
    --index target_index \
    --featurebase-hosts localhost:10101 \
    --kafka-hosts localhost:9092 \
    --schema-registry-url http://localhost:8081 \
    --topic source_topic \
    --primary-key-fields pk
```
