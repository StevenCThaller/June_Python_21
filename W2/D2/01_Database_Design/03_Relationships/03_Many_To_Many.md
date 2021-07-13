# Many To Many Relationship

A `many to many` relationship is similar to a `one to many` relationship, except each side can have a relationship with multiple instances of the other side.


## EXAMPLE

A database where `users` can favorite pieces of `furniture`. Any single `user` can favorite multiple pieces of `furniture`, and any given piece of `furniture` can be favorited by multiple `users`.

But our table setup for `M2M` is more involved

### users

user_id | name | email 
--- | --- | ---
1 | Bill | bgates@microsoft.com
2 | Jeff | jbezos@amazon.com

### furniture

furniture_id | name | color
--- | --- | ---
3 | nightstand | red 
6 | dining room table | brown

### users_favorite_furniture
users_favorite_furniture_id | user | furniture
--- | --- | ---
1 | 1 | 3
2 | 1 | 6
3 | 2 | 6

In this scenario, Bill has favorited both the nightstand and the dining room table, but jeff has only favorited the dining room table.

From the other side, we can see that the nightstand has been favorited by JUST Bill, and the dining room table has been favorited by both Bill and Jeff