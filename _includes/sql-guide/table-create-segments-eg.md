```sql
create table segments  
    (_id id, segment stringset);  

insert into segments(_id, segment)  
    values (1, ['RED', 'BLUE', 'GREEN']),
      (2, ['GREEN']),
      (3, ['RED', 'BLUE', 'GREEN']);
```
