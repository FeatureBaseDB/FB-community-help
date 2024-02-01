---
title: Python client examples
layout: default
parent: Python client library
grand_parent: Tools
nav_order: 5
---

# FeatureBase Python client examples

These examples demonstrate how FeatureBase Python client classes work in practice.

## Before you begin

* [Install FeatureBase Python client library](/docs/tools/python-client-library/python-client-install)
* [Learn how to connect to FeatureBase Cloud](/docs/tools/python-client-library/python-client-connect-cloud)
* [Learn how to connect to FeatureBase Community](/docs/tools/python-client-library/python-client-connect-community)
* [Learn how to run SQL queries against your database](/docs/tools/python-client-library/python-client-query)

{: .note}
* Add or remove `#` characters to disable or enable the connection classes

## Example one - SQL queries

This example contains SQL queries to:
* create a table
* insert data
* query the table

Results are output using the Python `PRINT()` function

```py
# import the library
import featurebase

# FeatureBase Cloud client
print("Connecting to FeatureBase Cloud...")
client = featurebase.client(
#hostport = "https://query.featurebase.com/v2/",
database = "<cloud-database-id>",  # Replace with your own database id
apikey = "<cloud-api-key>")    # Replace with your API key

# FeatureBase Community client
#print ("Connecting to FeatureBase Community...")
#client = featurebase.client(
#hostport = "localhost:10101")

# DROP demo table
print ("Dropping table if it exists")
result=client.query(sql="DROP TABLE python-demo") # Remove `_c` prefix to run against Community

# CREATE demo table
print ("Single CREATE TABLE python-demo statement")
result=client.query(sql="CREATE TABLE python-demo(_id ID, intcol INT, stringcol STRING, idsetcol IDSET)")

# Run SQL statements in sequence and stop on error
print ("Array of INSERT INTO python-demo statements")
sqllist=[]
sqllist.append("INSERT INTO python-demo (_id, intcol, stringcol, idsetcol) VALUES (2,234,'row2, stringcolumn',[500,600,700,800])")
sqllist.append("INSERT INTO python-demo (_id, intcol, stringcol, idsetcol) VALUES (3,345,'row3, stringcolumn',[900,1000,1100,1200])")
# run statements then stop on error
results = client.querybatch(sqllist, stoponerror=True)
if result.ok:
  print("Rows affected:",result.rows_affected,"Execution time:",result.execution_time,"ms")
  print(result.schema)
else:
  print(result.error)

# SELECT FROM python-demo
print("SELECT statement on python-demo")
result=client.query(sql="SELECT _id,SETCONTAINS(idsetcol,700) FROM python-demo")
if result.ok:
  print(result.data)
  print("Execution time:",result.execution_time,"ms")
else:
  print(result.error)
```

## Example two - Python application

This example is a Python application that:
* creates a target table in the database of choice
* randomly generates data
* inserts that data into the target table using the BULK INSERT statement

```py
import string
import random
import featurebase
import time

# FeatureBase Cloud client
print("Connecting to FeatureBase Cloud...")
client = featurebase.client(
#hostport = "https://query.featurebase.com/v2/",
database = "<cloud-database-id>",  # Replace with your own database id
apikey = "<cloud-api-key>")    # Replace with your API key

# FeatureBase Community client
#print ("Connecting to FeatureBase Community...")
#client = featurebase.client(
#hostport = "localhost:10101")

# Generate random data
def get_random_string(length: int):
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str

# Build BULK INSERT SQL statement for later execution
def upload_data_bulk(key_from: int, key_to: int):
    # build bulk insert sql
    insertClause="BULK INSERT INTO demo_upload(_id, keycol, val1, val2) MAP (0 ID, 1 INT, 2 STRING, 3 STRING) FROM x"
    withClause=" WITH INPUT 'INLINE' FORMAT 'CSV' BATCHSIZE " + str((key_to-key_from)+1)
    records=""
    for i in range(key_from, key_to):
        val1 = get_random_string(3)
        val2 = get_random_string(12)
        if records!="":
            records+='\n'
        records+='%i, %i, "%s", "%s"'%(i, i, val1, val2)
    bulkInsertSql=insertClause + "'" + records + "'" + withClause
    stime=time.time()
    result=client.query(sql=bulkInsertSql)
    etime=time.time()
    if result.ok:
        print("inserted " + str(result.rows_affected) + " rows in " + str(etime+1-stime) + " seconds.")
    else:
        print(result.error)
    return result.ok

# create a demo table and load million rows
def run(batchSize: int):
    # create demo table
    result=client.query(sql="CREATE TABLE demo_upload(_id ID, keycol INT, val1 STRING, val2 STRING)")
    if not result.ok:
        print(result.error)
    # insert batchSize rows per insert for 1000 times
    n=int(1000000/batchSize)
    l=1
    h=batchSize
    for i in range(1, n):
        if not upload_data_bulk(l, h):   # running BULK INSERT statement
            break
        l=h+1
        h+=batchSize
        if h>1000000:
            h=1000000

run(10000)
```

## Further information

* [FeatureBase SQL guide](/docs/sql-guide/sql-guide-home)
  * [CREATE TABLE statement](/docs/sql-guide/statements/statement-table-create)
  * [INSERT statement](/docs/sql-guide/statements/statement-insert)
  * [BULK INSERT statement](/docs/sql-guide/statements/statement-insert-bulk)
  * [SELECT statement](/docs/sql-guide/statements/statement-select)
