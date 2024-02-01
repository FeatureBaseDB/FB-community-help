### Ingest data from SQL server database

`SELECT` queries the SQL-Server table then the ingester:
* converts the data to Roaring Bitmap format
* imports the records to the `my_data` FeatureBase index.

```shell
molecula-consumer-sql \
	--connection-string 'server=sqldb.myserver.com;userid=mysqlusername;password=secret;database=mydbname' \
	--featurebase-hosts 10.0.0.1:10101 \
	--batch-size 1000000 \
	--driver=mssql \
	--index=my_data \
	--id-field=id \
	--row-expr 'SELECT tableID as id__ID, zipcode as zipcode__String limit 10'
```
