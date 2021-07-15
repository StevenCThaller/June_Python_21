# Querying with Variables

Obviously, the previous code won't do THAT much for us. If we need to create a new entry in the database,
or make more specific queries, we'll need to introduce variable data to those queries.

Fortunately, it's not too difficult!

```py
from mysqlconnection import connectToMySQL
class Friend:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM friends;"
        results = connectToMySQL('first_flask').query_db(query)
        friends = []
        for friend in results:
            friends.append( cls(friend) )
        return friends

    @classmethod
    def get_one(cls, friend_id):
        query = "SELECT * FROM friends WHERE id=%(friend_id)d;"

        data = {
            "friend_id": friend_id
        }
        results = connectToMySQL('first_flask').query_db(query, data)
        # This is just an example of what you could do with the results.
        if len(results) > 0:
            return results[0]
        else:
            return False
    
    @classmethod
    def save(cls, data):
        query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(occupation)s, NOW(), NOW());"

        # data is a dictionary that's being passed into the save method from server.py
        return connectToMySQL('first_flask').query_db(query, data)
```

Now, however we set these variables up in the class HAVE to line up with how we set up our `html` and/or functions in `server.py`. I choose `AND`

## index.html
```html
<form action='/create' method='POST'>
    <div>
        <label for='first_name'>First Name:</label>
        <input type='text' name='first_name'>
    </div>
    <div>
        <label for='last_name'>Last Name:</label>
        <input type='text' name='last_name'>
    </div>
    <div>
        <label for='occupation'>Occupation:</label>
        <input type='text' name='occupation'>
    </div>
    <input type='submit' value='Submit'>
</form>
```

## server.py
```py
from friend import Friend
# other lines of code

@app.route('/create', methods=['POST'])
def create_friend():
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'occupation': request.form['occupation']
    }

    Friend.save(data)
    # NEVER RENDER ON A POST
    return redirect('/')
```