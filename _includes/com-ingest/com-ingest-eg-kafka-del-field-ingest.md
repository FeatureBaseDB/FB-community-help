### Kafka delete field ingester configuration

```
./molecula-consumer-kafka-delete \
    --primary-key-fields "pk0,pk1" \
    --topics delete_topic \
    --kafka-bootstrap-server localhost:9092 \
    --schema-registry-url localhost:8081 \
    --featurebase-hosts localhost:10101 \
    --featurebase-grpc-hosts localhost:20101 \
    --index an_index
```
