# Each Column In Your Table That Is Not A Key (Primary or Foreign) Must Have Unique Values
If you find yourself repeating the same value in multiple `rows` of the same `table`, those
`columns` should be split off into their own table, with the original `table` having a `foreign key`
in that column instead.

## Example:
If you have a `movies` table with a `genre` column, rather than 17 `movies` having a `genre` of `drama`,
create a `genres` table, which would have an entry for `drama`, and the `genre` value of the row in `movies` 
would be the `key` of that `genre` in the `genres` table.

### FROM THIS
movie_id | title | run_time | genre
 --- | --- | --- | ---
1 | The Godfather | 178 | drama
2 | Hot Tub Time Machine | 101 | comedy
3 | Shawshank Redemption | 142 | drama

### TO THIS
genre_id | genre
 --- | ---
1 | drama
2 | comedy


movie_id | title | run_time | genre
 --- | --- | --- | ---
1 | The Godfather | 178 | 1
2 | Hot Tub Time Machine | 101 | 2
3 | Shawshank Redemption | 142 | 1