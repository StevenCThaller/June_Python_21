# Request Object

`Flask` will convert the incoming `HTTP request` into an object that we can access in our flask functions. This object is called `request`, and it's built in to flask, so we'll need to import it.

## Getting our request object
In our imports:
```py
from flask import Flask, render_template, request
```

Then, in our function that accepts a post request:

```py
@app.route('/heroes', methods=['POST'])
def create_hero():
    print(request)
    # code
```

This request object has all of the information we need regarding what's sent from the HTML.

It's inside of a dictionary that can be found at 
`request.form`

So, to get the `form data` from the `request` object, we must use:

```py
request.form["name_attr"]
```