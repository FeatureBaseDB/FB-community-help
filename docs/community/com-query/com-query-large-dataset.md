---
title: Evaluate FeatureBase Community
layout: default
parent: Query databases
nav_order: 2
---

# Evaluate FeatureBase Community with a billion row database

You can load a billion records to FeatureBase using these instructions

## Before you begin

* [Learn about FeatureBase Community](index)
* [Install and startup FeatureBase Community](/docs/community/com-getstart/com-getstart-home)

First, download the demo dataset from S3 using by clicking [this link](https://se-public-datasets.s3.us-east-2.amazonaws.com/cseg0_backup.tar.gz)

<!---
Do we want to mention that this data can be used in 15 minutes with the cloud product here?
-->

>**Please note that this file is large (~14GB) and contains over 1B records. Make sure that you have sufficient local storage. On average, it takes about 30 minutes to download, but actual download time may depend on your connection speed.**


>**To use your own data** - check out our documentation for creating new sources [here](/docs/community/com-ingest/com-ingest-manage)

Next, in a new terminal window, make a directory for the data:
```
mkdir ~/Cseg0_backup
```

And unzip it into the directory:
```
tar -zxvf ~/Downloads/cseg0_backup.tar.gz -C ~/Cseg0_backup
```

Now, restore the data into FeatureBase:
```
featurebase restore --host localhost:10101 -s ~/Cseg0_backup/
```

Once it's completed successfully, you'll see this message:

```
... INFO:  http: Server closed
```

<!---
"Try FeatureBase Cloud at app.molecula.cloud" will need to change that is in the current UI

Note: This doesn't work in safari as of 9/7/2022
-->

Now, you can run queries in the [FeatureBase web application](http://localhost:10101/)

>**Note:** If the link above doesn't work for you:
>1. Try using Google Chrome
>2. Paste `localhost:10101` into your browser

You can monitor health of the FeatureBase cluster and other activity on the homepage.
![Cluster Health](https://user-images.githubusercontent.com/97700520/170797631-d80cebff-ddb1-4ee3-a56b-e8b6e94d453b.png)


## Data Exploration of Customer Segmentation Feature Table

It’s always a good idea to understand what the dataset you’re working with contains before you get started. To do this, click on the ‘Tables’ section in the application to display the names of the tables in your database.

![Figure 1  Tables](https://user-images.githubusercontent.com/97700520/170796333-d1dec693-83c0-4070-a5f6-d5d4fff409e4.png)


Click on a table to show its contents. FeatureBase can ingest and represent a wide range of field types. One that may not be familiar is the **SET** field. **SET** fields are multi-valued and allow FeatureBase to collapse traditional data models, like the star schema, by efficiently storing multiple values for a single field.

![Figure 2  Customer segmentation (cseg) table](https://user-images.githubusercontent.com/97700520/170796463-04f080ec-3e50-413e-824f-00c619f014fc.png)

To understand the shape of the data contained in the customer dataset that was preloaded into this environment. First, navigate to the Query page by clicking “Query” on the left navigation bar. 

Let’s start by running a simple SQL statement to extract 10 records to explore.

```sql
SELECT * FROM cseg LIMIT 10;
```

Viewing this tabular output we can see each record contains several fields (attributes) and data types. Scroll left and right in the application to explore the full list of fields. For example, **names** and **cities** are captured in **STRING** fields. Income is captured in an **INT** field that will allow for range queries. You can also see that “education” is a SET field with multiple values in a single field.

![Figure 3  Select 10 items from table](https://user-images.githubusercontent.com/97700520/170796596-130f1cd8-9ad2-4080-a75a-19d14fcebe61.png)

Next, let’s check the full scale of this dataset by using another familiar SQL statement, the **COUNT**.

```sql
SELECT COUNT(*) FROM cseg;
```

This query will return the **COUNT** of records in the entire table and demonstrates we are working with a dataset of 1 billion records. Each record in the cseg table has 16 attributes.

![Figure 4  Select count from table](https://user-images.githubusercontent.com/97700520/170796676-19a466fb-5e1b-4d03-b5ad-a8e80fd3e2ff.png)

### Performing Large Aggregations

Aggregation workflows often require the ability to **SUM** large amounts of individual **INT** elements. This could be transaction amounts such as dollars (decimals), whole integers (counts, bandwidth), or any variation requiring a **SUM** across many records. In this example, we will **SUM** the income field across all 1 billion records.

```sql
SELECT SUM(income) FROM cseg;
```

![Figure 5  Select sum income from table](https://user-images.githubusercontent.com/97700520/170796734-8ac2e3d4-4674-494a-84e2-6d8f9439f345.png)

It is unlikely to need to SUM in this manner across all records. It is much more common to introduce complex conditions to SUM a segment of records that meets specified criteria.

Here we introduce comparative and logical operators including **GREATER THAN**, **AND**, and **OR**. 

```sql
SELECT SUM(income)
FROM cseg
WHERE income > 5000 AND age = 45 AND (skills='Ms Office' OR skills='Excel');
```

As you can see, the latency is in the sub-second time frame even when using complex searching criteria through 1 billion records.

![Figure 6 Complex SUM](https://user-images.githubusercontent.com/97700520/172648422-2d20bd75-1805-4f99-822d-6825e90075d1.png)


>**NOTE:** When aggregating over a SET field, values for a record will be included in multiple groups if not excluded in the query. For example, when SUM(income) is used with a GROUP BY of “education”, income for a record with both ‘Bachelor’s degree’ and ‘High school diploma or GED’ will be included in both groups.

>**NOTE:** It is common for a single person to have multiple values for a field that may seem contradictory or redundant, like “education”. This may be due to differences in status over time as data are collected and aggregated. A person may be categorized as having “education” status of “Some college” and later be categorized as having a “Bachelor’s degree”. When those two data sources are matched up, the person may have multiple values associated with them.

Additionally, aggregations may include the AVERAGE argument.

```sql
SELECT AVG(income) FROM cseg;
```
![Figure 7 average income](https://user-images.githubusercontent.com/97700520/170796927-e7fc7f66-258d-49d2-a47f-a192d237ea9d.png)

>Note that we don’t currently support full SQL, but are working toward expanding SQL functionality. For example, the AVERAGE function is not currently supported in GROUP BY queries and will be added soon.

>**If you have issues with your queries, please contact a [FeatureBase Representative](mailto:se@featurebase.com). FeatureBase has a native language, called PQL, and we can help you translate your SQL queries to get the desired results.**

### INNER JOINs at Scale

FeatureBase can merge at ingest and eliminate preprocessing in cases where performant **INNER JOIN**s are required. Data from two separate tables or sources can be merged into a single normalized table by matching on a unique key in each dataset. Since FeatureBase can execute queries very quickly, workflows requiring **INNER JOIN**s can be simplified with FeatureBase by merging disparate datasets at ingest. In the following example, we are combining many of the queries in this guide and adding the **INNER JOIN**. 

The **INNER JOIN** is facilitating a **COUNT** of records, or people, are “available for hire” as indicated by  that have a string field true for “available_for_hire” located in the skills table, and have the string field true for “Teaching”. In other words, we would like to count the number of people who are teachers and also available for hire. The latency on this type of **INNER JOIN** at the billion records scale is still sub-second allowing for several interesting data models.

```sql
SELECT count(*) AS count
FROM cseg AS t1
INNER JOIN skills AS t2 ON t1._id = t2.id
WHERE t2.bools = 'available_for_hire' and t1.hobbies = 'Teaching';
```

>**NOTE:** Included in the demo dataset is a table known as skills, please use the discovery queries to take a look at it!

![Figure 8  Inner Join Query](https://user-images.githubusercontent.com/97700520/170796998-7ce559da-58db-44c5-aa9b-a1a8c0b47c2b.png)



### TopK - A FeatureBase Superpower

Ranking queries are notorious for being computationally intensive - aka slow. Some solutions will use statistics to speed up a ranking query by approximating the true results, but that’s not always a desirable option. In addition to SQL, FeatureBase has a native language called [PQL](/docs/pql-guide/pql-home). In PQL, [```TopK```](/docs/pql-guide/pql-read-topk) queries can be run to return exact results in milliseconds. 

This query returns the top five hobbies across all customers from the cseg table, sifting through a billion records.

```
[cseg]TopK(hobbies, k=5);
```
![Figure 9  Top K Query](https://user-images.githubusercontent.com/97700520/170797209-70c365ab-82f6-4930-828f-4ceade77dcdd.png)


More complex, the next query returns the top ten hobbies among females who also like scuba diving from the cseg table in milliseconds. Even when adding complex filtering, the **TopK** queries can be run for exact results at scale without impacting query latency.

```
[cseg]TopK(hobbies, k=10, filter=Intersect(Row(sex=Female),Row(hobbies='Scuba Diving')));
```

![Figure 10 Top K Query with Filtering](https://user-images.githubusercontent.com/97700520/170797384-ea5b9573-3e2d-43ac-ab21-47c323f02418.png)

### Grouping with Complex Conditions and Aggregating

Another query commonly seen in aggregation-related use cases is the ```GROUP BY```. For example, let’s group by the hobbies counting only those with ultimate ```COUNT``` above 200,000,000. We'll execute this query in [PQL](/docs/pql-guide/pql-home).

```
[cseg]GroupBy(
Rows(hobbies),
sort="count desc",
having=CONDITION(count > 200000000)
);
```
![Figure 11. GROUP BY Query](/assets/images/quick-start-guide/enterprise/ent_cseg_groupby_having.png)


Another useful facet of ```GROUP BY``` is the ability to add an aggregate argument and utilize the low-latency aggregation in another capacity. We'll execute this query in SQL.

```sql
SELECT education, SUM(income)
FROM cseg
WHERE age=18
GROUP BY education;
```

![Figure 12  Group by Query Filtered](https://user-images.githubusercontent.com/97700520/170797146-1ccdd6b5-82e6-4f5a-b8c2-f6b47d3e5897.png)


>**NOTE:** At this point, we encourage you to mix and match segmentation criteria to experience low-latency queries even as complex conditions are added. You can use the Query Builder to help construct queries in PQL.

![Query builder](https://user-images.githubusercontent.com/97700520/170797492-89ace99d-6de5-4a6f-ba14-275f53462fb2.png)



## What’s Next?

We hope that this hands-on experience has further demonstrated the power of FeatureBase to power real-time analytics workflows at scale. While this example focused on a customer segmentation use case, the same type of workflows are often used in anomaly detection or business process optimization use cases and continues to perform as workloads grow to trillions of records. Additionally, FeatureBase excels at combining streaming and historical data in real-time, allowing you to analyze data as soon at is available in FeatureBase with no need for time-consuming preprocessing or preaggregation. From here, partner with your FeatureBase representative to better understand how FeatureBase will work for your organization’s specific needs.

## Queries

### Data Exploration 

```sql
SELECT * FROM cseg LIMIT 10;
```

```sql
SELECT COUNT(*) FROM cseg;
```

### Complex Segmentation 

```sql
SELECT count(*) FROM cseg WHERE age = 45 AND income>50000 AND (skills='Ms Office' OR skills='Excel');
```

### Aggregations

```sql
SELECT SUM(income) FROM cseg;
```

```sql
SELECT SUM(income) FROM cseg where income > 5000;
```

```sql
SELECT AVG(income) FROM cseg;
```

### JOINS

```sql
SELECT count(*) AS count
FROM cseg AS t1
INNER JOIN skills AS t2 ON t1._id = t2.id
WHERE t2.bools = 'available_for_hire' AND t1.hobbies = 'Teaching';
```

### Grouping with Complex Conditions

```
[cseg]GroupBy(
Rows(hobbies),
sort="count desc",
having=CONDITION(count > 200000000)
);
```

### Top K 

```
[cseg]TopK(hobbies, k=5);
```

```
[cseg]TopK(hobbies, k=10, filter=Intersect(Row(sex=Female),Row(hobbies='Scuba Diving')));
```
