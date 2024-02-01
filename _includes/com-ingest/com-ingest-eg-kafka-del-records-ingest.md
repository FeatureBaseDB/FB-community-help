### Kafka delete records ingest definition

```
./molecula-consumer-kafka-delete \
    --topics delete_topic \
    --kafka-bootstrap-server localhost:9092 \
    --schema-registry-url localhost:8081 \
    --featurebase-hosts localhost:10101 \
    --featurebase-grpc-hosts localhost:20101 \
    --index an_index
```
