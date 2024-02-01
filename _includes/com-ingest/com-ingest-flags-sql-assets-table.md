### SQL ingest flags to import from assets table

`SELECT` queries the MySQL table, then the ingester:
* converts the records to Roaring Bitmap format
* imports the records to the `asset_list` FeatureBase index.

```shell
molecula-consumer-sql \
    --driver mysql \
    --connection-string 'username:password@(127.0.0.1:3306)/dbname' \
    --featurebase-hosts localhost:10101 \
    --batch-size 10000 \
    --index=asset_list \
    --primary-key-fields 'asset_tag' \
    --row-expr 'SELECT asset_tag as asset_tag__String, weight as weight__Int, warehouse as warehouse__String FROM assets'
```
