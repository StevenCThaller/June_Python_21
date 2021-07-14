# CRUD

When talking about web development, `CRUD` is not a term for things that aren't great.

We really do love our acronyms. `CRUD` is an acronym for `Create`, `Read`, `Update`, and `Delete`.
This makes up like, 75% of what we do as developers, and makes up the core functionality that we
build our applications around. Every action that a user makes can be categorized as one of these
four things.

## Create
Creation of data. Any time you're adding something new to the database, this is part of the `Create` 
portion of `CRUD`. 

### HTTP Methods:
 - `POST`

### SQL Queries:
 - `INSERT`

## Read
Retrieving of data, whether from the database or just displaying a webpage. 

### HTTP Methods:
 - `GET`

### SQL Queries:
 - `SELECT`
 - `JOIN`
 - `WHERE`
 - `ORDER BY`
 - `LIMIT/OFFSET`

## Update
Any time we modify data in our database, it is considered an `Update`.

### HTTP Methods:
 - `PUT`
 - `PATCH`

NOTE: We're just going to package this together as `POST` for this stack.

### SQL Queries:
 - `UPDATE`
 - `WHERE`

## Delete
Any time we are removing data from our database, it is considered a `Delete`.

### HTTP Methods:
 - `DELETE`

NOTE: We're not going to be using this method this stack.

### SQL Queries:
 - `DELETE`
 - `WHERE`

