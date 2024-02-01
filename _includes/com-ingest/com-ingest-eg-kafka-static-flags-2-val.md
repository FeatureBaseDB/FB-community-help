```shell
./molecula-consumer-kafka-static \
    --kafka-hosts "localhost:9092" \
    --index kafka-test \
    --batch-size 10000 \
    --topics test-topic \
    --max-msgs 10000 \
    --auto-generate \
    --external-generate \
    --header kafka-static-header-1.json
```
