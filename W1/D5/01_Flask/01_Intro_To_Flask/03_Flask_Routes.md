# Variable Routing

If I have a portion of my URL that should be `variable`, as in I can access the same function via multiple URL's, because part of it can change, I use what is called a `route parameter`.

**EXAMPLE**
I want to have a page at `http://localhost:5000/name/Cody` that will display the name `Cody`. But I also want one at a route with that same pattern, for every name ever.

```py
@app.route('/name/<var_name>)
def say_name(var_name):
    return f"Hello there, {var_name}"
```

And we can actually have multiple of these `route parameters`:

```py
@app.route('/user/<name>/<age>')
def print_user_info(name, age):
    return f"Hello {name}, you are {age} years old."
```