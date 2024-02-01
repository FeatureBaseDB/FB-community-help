```shell
./molecula-consumer-kafka-static \
    --kafka-hosts "localhost:9092" \
    --index kafka-test \
    --batch-size=10000 \
    --topics test-topic \
    --auto-generate \
    --allow-missing-fields \
    --header kafka-static-header-2.json
```
