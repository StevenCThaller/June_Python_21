# UPDATE
To update data in the database, we use the `UPDATE` command

```sql
UPDATE table_name 
SET column_name_1 = 'some_value', column_name_2 = 'some other value' 
WHERE condition(s);
```

## **INCREDIBLY IMPORTANT**
IF YOU DO NOT INCLUDE THE `WHERE` STATEMENT, EVERY SINGLE ROW OF DATA IN THAT TABLE WILL BE UPDATED. The rules for `WHERE` in the `UPDATE` query are the same as used for the `SELECT`.