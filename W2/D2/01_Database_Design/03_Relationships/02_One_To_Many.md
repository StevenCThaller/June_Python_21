# One To Many Relationship

Similar to a `One to One` relationship, except one side can be related to multiple instances of the other side.

## EXAMPLE:
Our database of Coding Dojo! At any given point in time, a `student` only has one `instructor`, but at the same time, that `instructor` has many `students`.

### students

student_id | first_name | instructor 
--- | --- | ---
1 | Joe | 3
2 | Sally | 6
3 | Eric | 3
4 | Bill | 3
5 | Jeanie | 6


### instructors
instructor_id | name 
--- | --- 
3 | Cody
6 | Sadie 

## In terms of Foreign Keys
In a `one to many` relationship, the relationship is set up by attaching the `foreign key` to the items in the `many` side.