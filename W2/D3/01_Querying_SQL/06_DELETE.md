# DELETE

To delete from the database, the query is as follows:

```sql
DELETE FROM table_name WHERE condition(s);
```
## **ANOTHER SUPER IMPORTANT THING**
IF `WHERE` IS NOT USED, EVERY SINGLE RECORD IN THE TABLE WILL BE DELETED.


## If you are getting an error regarding SQL SAFE UPDATES
Run the following command to let Workbench know you WANT to delete data.
```sql
SET SQL_SAFE_UPDATES = 0;
```