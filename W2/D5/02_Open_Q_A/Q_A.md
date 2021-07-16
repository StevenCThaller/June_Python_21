# Open Q&A

## Dojos and Ninjas Queries
### Q. Regarding missing ID's after deletion
When we have to delete the first three users (`id` 1, 2, and 3) and create 3 more, what should those 3 new items `id`'s be?
### A. 4, 5, 6
We want to let MySQL handle the generation of the id's, so the query would look something like:

```sql
INSERT INTO ninjas (name, email, created_at, updated_at) VALUES ('some name', 'some@email.com', NOW(), NOW());
```

---

## Rearranging Column Order
### Q. Can I rearrange the order of my columns in the database?
Sometimes looking at the results in MySQL and seeing that `id` is after another column is jarring.

### A. YES!

You can run the query: 
```sql
ALTER TABLE table_name MODIFY column_name_to_move column_data_type AFTER column_name_to_move_it_after;
```
 ---

## Getting a Month from a DATETIME in MySQL
### Q. How can I make the data show individual portions of the date rather than the long complex date string?
Sometimes we might want to know what year/month/etc a datetime represents. "1998-02-07 10:04:06:00" doesn't help us. How can we grab that `02` and make it say `February`?

### A. Using SQL functions!
In this case, there is a `monthname()` function, so you would format your query like so:

```sql
SELECT column_1, MONTHNAME(date_field) WHERE some_condition;
```
And the data will come back with the `date_field` represented as the name of the month that it contains.

For more SQL functions, check out [this link](https://www.w3resource.com/mysql/date-and-time-functions/mysql-monthname-function.php)

---

## Queriy Results Stored In Session
### Q. Can I save myself future queries by storing results of a query in session?
Querying the DB isn't free when we're in a production environment. Also, not so fun building out 9823489723894 class methods. Can I save myself some time by just storing the results in session?

### A. Not really
Our web applications need to be designed with multiple users in mind. As in, we might have so many people one day, that 0.75 seconds after user 1 submits their data, we could have 100 new pieces of data from 100 other users simultaneously. As such, storing results in session might help ONCE, but that data will be outdated pretty quickly.

NOW, if there is a table in the database that is basically just storage of static data (data you'll need regularly but don't want to have to query for 15 times per 10 minutes), THEN you might be able to use session. Granted, session is stored on the browser, so you'd have to A. make sure the data is not sensitive information, and B. you probably don't want to store TOO much because users have pretty crappy computers a lot of the time. 

---