# Each Column In Your Table Can Only Have One Value

If you find yourself putting data into a table that could be broken down into smaller pieces DO IT.

## Example:
An `address` can be broken down into `street_address`, `city`, `state`, and `zip_code`. Rather than
having a column for `address` that is a string with those pieces separated by commas, have `address` 
be its own table, with columns for each of those, and a `foreign key` to individual `address` entries
in the original table

### FROM THIS

user_id | name | address
 --- | --- | ---
1 | Cody | 123 Main Street, Seattle, WA, 98003
2 | George | 321 Not Main Street, Spokane, WA, 78483

### TO THIS

address_id | street_address | city | state | zip_code
 --- | --- | --- | --- | ---
1 | 123 Main Street | Seattle | WA | 98003
2 | 321 Not Main Street | Spokan | WA | 78483

user_id | name | address
 --- | --- | ---
1 | Cody | 1
2 | George | 2

### CAN WE NORMALIZE THIS ANY BETTER?!?!?!
