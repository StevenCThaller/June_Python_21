# Server and HTML

Now that we've gotten our connection file set up, and have a class that will make queries for us, how do we make the query in our application?

## server
```py
from flask import Flask, render_template # and whatever other imports are needed

# Import the class itself
from friend import Friend

app = Flask(__name__)

@app.route('/allfriends')
def all_friends():

    friends = Friend.get_all()

    return render_template('index.html', friends=friends)

if __name__ == "__main__":
    app.run(debug=True)
```

Now that the data is being passed into `Jinja`'s template engine, we can set up our `html` file to show that data

```html
<ul>
    {% for friend in friends: %}
        <li>{{ friend.first_name }} {{ friend.last_name }}</li>
    {% endfor %}
</ul>
```