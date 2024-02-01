### Events table

```sql
CREATE TABLE `events` (
    `pk` char(10) NOT NULL DEFAULT '',
    `asset_tag` char(4) NOT NULL DEFAULT '',
    `fan_time` date NOT NULL,
    `fan_vol` char(10),
    PRIMARY KEY (`pk`)
);
```

Table: `events`

| pk     | asset_tag | fan_time   | fan_vol |
|--------|-----------|------------|---------|
| aus-14 | ABCD      | 2021-06-21 | 90%     |
| aus-15 | EFGH      | 2021-06-19 | 10%     |
| aus-16 | ABCD      | 2021-06-20 | 60%     |
| den-11 | IJKL      | 2021-06-19 | 70%     |
| den-12 | MNOP      | 2021-06-20 | 90%     |
| nyc-78 | MNOP      | 2021-06-21 | 80%     |
| den-13 | MNOP      | 2021-06-21 | 80%     |
| nyc-79 | ABCD      | 2021-06-21 | 30%     |
