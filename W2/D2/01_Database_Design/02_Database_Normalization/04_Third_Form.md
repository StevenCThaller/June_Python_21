# You Cannot Have A Non-Key Column That Is Dependent On Another Non-Key Column
Basically, if you can separate the `columns` of a table in a way that they are 
referring to multiple different types of things, and none of those `columns` are
a `key` column, you should split it up.

## Example:
If you have a `books` table, and in that table is a `publisher_name` and `publisher_address`,
the `publisher_name` and `publisher_address` should be split off into a `publisher` table, and replaced
in the `books` table with a `publisher` column that accepts a `key`

### FROM THIS

 book_id | title | publisher_name | publisher_address
 --- | --- | --- | ---
1 | Harry Potter and the Audacity of this day | Scholastic | whatever scholastic's address is idk i'm tired

### TO THIS

book_id | title | publisher
--- | --- | ---
1 | Harry Potter and the Audacity of this day | 3

publisher_id | name | address
 --- | --- | ---
3 | Scholastic | I know this field isn't normalized but you get the idea

