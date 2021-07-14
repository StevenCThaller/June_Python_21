# SELECT
`SELECT` is the query we use to pull data from our database. On the surface it's super simple, but there's a lot more involved for grabbing more specific data.

## THE BASICS
```sql
SELECT fields
FROM table_name;
```

Things to note:
- `fields` can be one of several options:
    - `*` - this will get all column values
    - `column_name_1, column_name_2` - this will get only the data from the specific columns specified

## THE NOT SO BASICS
The above query would return ALL rows in the table. How do we get more specific??

### WHERE
```sql
SELECT fields
FROM table_name
WHERE some_condition;
```

`some_condition` is where things get hairy, but adding a `WHERE` statement to your query will let you specify that you only want certain rows of data. 

For example:
```sql
WHERE id = 3;
```
Will only return the row of data with an `id` of 3.

### Conditionals

We can apply conditions to our search in addition to finding specific entries.

#### OR
```sql
SELECT *
FROM table_name
WHERE condition_one OR condition_two;
``` 
Will return all fields from all rows from the table where either one or both conditions are met.

#### LIKE
```sql
SELECT *
FROM table_name
WHERE column_name LIKE "B%";
```
Will return all fields from all rows from the table where the value in the specified column starts with `B` in this case. To find the results where a specific thing ends in `b`, it would be `"%b"`. 

There are plenty of other conditionals. Check the platform and good ole google for more!

### Sorting

We can also sort our results with the `ORDER BY` keywords.

```sql
SELECT * 
FROM table_name
WHERE condition
ORDER BY column_name ASC;
``` 
Will sort them in ascending order based on the column provided. 
You can also use `DESC` instead for a descending order. By default, if you do not specify `ASC` or `DESC`, it will be in ascending order.

### LIMIT and OFFSET
Sometimes you don't want ALL of the data. That's where `LIMIT` comes in.

```sql
SELECT *
FROM table_name
LIMIT 5;
```
Will return the first 5 entries in that table.

We can add an `OFFSET` to the end of that as well.

```sql
SELECT *
FROM table_name
LIMIT 5
OFFSET 4;
``` 
Will give us records 5-10. The offset is not inclusive, so the first record return will be the one AFTER that number.

We can also combine `LIMIT` and `OFFSET` by just separating the 2 numbers with a comma after `LIMIT`, with OFFSET first.
```sql
LIMIT 4, 5;
```