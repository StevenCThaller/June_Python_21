# INSERT query

The query for adding data into a SQL database follows a very specific pattern that's 
pretty easy to pick up.

```sql
INSERT INTO table_name (column_name_1, column_name_2)
VALUES ('column_value_1', 'column_value_2');
```

Things to note: 
- `table_name` should be the name of the table
- `column_names` should not include the `primary key`
- The values should be data type specific. `varchar`, `text`, `datetime` should be in quotes. Any numerical values should not.

