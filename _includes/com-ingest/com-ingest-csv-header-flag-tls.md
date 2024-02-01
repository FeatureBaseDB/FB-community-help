### Connect securely over TLS and define header flags

Use this method to:

* ignore CSV headers and define them at the command line
* define FeatureBase server `tls` certificates to securely connect to a remote server.

```shell
./molecula-consumer-csv \
    --featurebase-hosts=https://localhost:10101
    --tls.certificate=featurebase.local.crt \
    --tls.key=featurebase.local.key \
    --tls.skip-verify \
    --batch-size=10000 \
    --auto-generate \
    --header=asset_tag__String,fan_time__RecordTime_2006-01-02,fan_val__String_F_YMD \
    --ignore-header
    --index=csv-ingest-tls \
    --files=header-defined.csv,header-undefined.csv \
```
