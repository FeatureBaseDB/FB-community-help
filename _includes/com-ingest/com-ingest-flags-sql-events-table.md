### SQL ingest tool change data type

`SELECT` queries the MySQL table, then the ingester:
* converts the data to Roaring Bitmap format
* alters `fan_vol` data type from `string` to `int`
* imports the records to the `event_list` FeatureBase index.

```shell
molecula-consumer-sql \
    --driver mysql \
    --connection-string 'username:password@(127.0.0.1:3306)/dbname' \
    --featurebase-hosts localhost:10101 \
    --batch-size 10000 \
    --index=event_list \
    --primary-key-fields 'pk' \
    --row-expr 'SELECT pk as pk__String, asset_tag as asset_tag__String, fan_time as `fan_time__Timestamp_s_2006-01-02`, SUBSTRING(fan_vol, 1, CHAR_LENGTH(fan_vol)-1) as fan_vol__Int FROM events'
```
