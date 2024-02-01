### CSV ingest tool flags for header-defined.csv

{: .note}
The required header is defined in the source file

```shell
./molecula-consumer-csv \
    --batch-size=10000 \
    --primary-key-fields=username \
    --index=users \
    --files=header-defined.csv
```
