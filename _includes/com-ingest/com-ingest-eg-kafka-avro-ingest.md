### Kafka Avro ingest script

```
./molecula-consumer-kafka \
    --index target_index \
    --featurebase-hosts localhost:10101 \
    --kafka-hosts localhost:9092 \
    --schema-registry-url http://localhost:8081 \
    --topics source_topic \
    --external-generate \
    --auto-generate \
```
