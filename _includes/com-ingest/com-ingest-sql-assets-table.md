### Assets table

```sql
CREATE TABLE `assets` (
    `asset_tag` char(4) NOT NULL DEFAULT '',
    `weight` int(8) DEFAULT 0,
    `warehouse` char(10),
    PRIMARY KEY (`asset_tag`)
);
```

Table: `assets`

| asset_tag | weight | warehouse |
|-----------|--------|-----------|
| ABCD      |     16 | US-EAST   |
| EFGH      |      9 | US-WEST   |
| IJKL      |     47 | US-WEST   |
| MNOP      |     30 | US-EAST   |
