# Action Attribute

If we're making a `POST` request, it's a pretty safe bet that we're making a form for the user to 
submit data through. In that case, we kind of need to create a form in our `html` then, don't we?

## HTML
Our HTML form needs 2 key parts (in terms of attributes in the `form` element itself):
1. `action` - this is the route that you want to submit the form to.
2. `method` - this determines what type of `http` request is made upon form submission.

```html
<form action="/heroes" method="post">
    <!-- some inputs -->
    <input type="submit" value="Create Hero">
</form>
```

## Python
Once we have a form that it set to submit to a given route (in this case `/heroes`), how do we tell `flask` that the function at route `/heroes` should accept a `POST` request??

### Typical Route (i.e. GET route)
All routes we've created so far have been, specifically, `GET` requests.
```py
@app.route('/someroute')
def some_function():
    return render_template('some_file.html')
```

We'll use the decorator (`@app.route('/someroute')`) to tell `flask` that this function should ONLY run when the incoming request is a `POST` request.

```py
@app.route('/heroes', methods=['POST'])
```

### Why is `methods` a list?
We could potentially have a route accept multiple request types. As such, `flask` is designed in a way that you can give the decorator multiple request types in that `methods` list. For the sake of this stack, it's probably safer to always just put one in.