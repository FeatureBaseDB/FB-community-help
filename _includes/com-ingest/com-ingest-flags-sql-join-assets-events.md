### Join Assets and Events tables into a single FeatureBase index

The `SELECT` statement queries the MySQL `events` table to:
* return `event` data along with `weight` of relative `asset_tag`
* create `locale` field based on the first three characters from the `events.pk` field
* join `assets.asset_tag` and `events.asset_tag`.

The ingester then:
* converts the records to Roaring Bitmap format
* imports the records to the `events_plus_weight` FeatureBase index.

```shell
molecula-consumer-sql \
    --driver mysql \
    --connection-string 'username:password@(127.0.0.1:3306)/dbname' \
    --featurebase-hosts localhost:10101 \
    --batch-size 10000 \
    --index=events_plus_weight \
    --primary-key-fields 'pk' \
    --row-expr 'SELECT events.pk as pk__String, events.asset_tag as asset_tag__String, assets.weight as weight__Int, SUBSTRING(events.pk, 1, 3) as locale__String FROM events INNER JOIN assets on assets.asset_tag = events.asset_tag'
```
