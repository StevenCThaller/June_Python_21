# Model Files

This next file should look familiar! Remember OOP? That's a thing we're doing here!

```py
# import the function that will return an instance of a connection
from mysqlconnection import connectToMySQL
# model the class after the friend table from our database
class Friend:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM friends;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('first_flask').query_db(query)
        # Create an empty list to append our instances of friends
        friends = []
        # Iterate over the db results and create instances of friends with cls.
        for friend in results:
            friends.append( cls(friend) )
        return friends
```

The idea here is pretty simple:
1. Import the `connectToMySQL` function from `mysqlconnection.py`
2. Create a class
3. The constructor should accept a parameter called `data`. This will be a dictionary.
4. Create `class methods` for each query we want to use. This one shows the query for `get_all`
5. Class method breakdown:
    1. Write a string version of the SQL query
    2. Call the `connectToMySQL` function, passing in the name of your database. Because that
    function returns an instance of the `MySQLConnection` class, we can immediately call the 
    `query_db` method, passing in the query we defined. Store the results into a variable.
    3. Handle the results. In this case, creating a list, and for each item in the results, 
    append a `Friend` instance into the list.
    4. Return the results

