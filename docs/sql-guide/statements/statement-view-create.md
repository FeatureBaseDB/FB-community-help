---
title: CREATE VIEW
layout: default
parent: Statements
grand_parent: SQL guide
nav_order: 11
---

## CREATE VIEW statement

Creates a FeatureBase view. The view already exists and `IF NOT EXISTS` is not specified the statement will not be successful.

## BNF diagrams

![expr](/assets/images/sql-guide/create_view_stmt.svg)

## Syntax

```
CREATE VIEW view_name
  [IF NOT EXISTS]
  AS
  select_statement;
```

## Arguments

| Argument | Description | Required? | Additional information |
|---|---|---|
| `view_name` | Valid view name | Yes | [Naming standards](#naming-standards)
| `IF NOT EXISTS` | Optional argument that stops statement execution if a view of the same name already exists | No |  |
| select_statement | Valid select statement. | Yes | [SELECT](/docs/sql-guide/statements/statement-select) |

## Additional information

### Naming standards

{% include /concepts/standard-naming-obj.md %}
{% include /cloud-table/cloud-standard-naming-table.md %}
{% include /cloud-table/cloud-standard-naming-col.md %}

## Examples

### Create VIEW to implement business logic
In this example the `retiree` view implements the business rule identifying the retirees. The view also has a new column `retirement_dt`, which is a virtual value derived from the physical column `dob`.

```sql
create table person (_id id, dob timestamp);

insert into person(_id, dob)
values (1, '1950-01-01T00:00:00Z');
insert into person(_id, dob)
values (2, '1960-01-01T00:00:00Z');
insert into person(_id, dob)
values (3, '1970-01-01T00:00:00Z');
insert into person(_id, dob)
values (4, '2080-01-01T00:00:00Z');

create view retiree as
select _id, datetimeadd('yy',62,dob) retirement_dt
from person
where datetimeadd('yy',62,dob)>current_timestamp;

select * from retiree order by retirement_dt;

 _id | retirement_dt
-----+----------------------
   1 | 2012-01-01T00:00:00Z
   2 | 2022-01-01T00:00:00Z
```

### CREATE VIEW to control data access
In this example the `customer` view is defined to show only data that is safe to share with all users. An underprivileged user can be given access to the `customer` view rather than the `person` table.

```sql
create table person (_id id, dob timestamp, ssn string, name string);

insert into person(_id, dob, ssn, name)
values (1, '1950-01-01T00:00:00Z', '123456789', 'John Doe 1');
insert into person(_id, dob, ssn, name)
values (2, '1960-01-01T00:00:00Z', '123456780', 'John Doe 2');
insert into person(_id, dob, ssn, name)
values (3, '1970-01-01T00:00:00Z', '123456700', 'John Doe 3');
insert into person(_id, dob, ssn, name)
values (4, '2080-01-01T00:00:00Z', '123456000', 'John Doe 4');

create view customer as
select _id, name, datetimepart('yy',dob) birth_year
from person;

select * from customer order by birth_year;

 _id | name       |      birth_year
-----+------------+-----------------
   1 | John Doe 1 |            1950
   2 | John Doe 2 |            1960
   3 | John Doe 3 |            1970
   4 | John Doe 4 |            2080
```

## Further information

* [SHOW CREATE TABLE](/docs/sql-guide/statements/statement-table-create-show)
* [SHOW TABLES](/docs/sql-guide/statements/statement-tables-show)
* [ALTER TABLE](/docs/sql-guide/statements/statement-table-alter)
* [SHOW COLUMNS](/docs/sql-guide/statements/statement-columns-show)
* [Data types](/docs/sql-guide/data-types/data-types-home)
