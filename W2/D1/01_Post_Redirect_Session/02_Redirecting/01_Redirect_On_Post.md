# Golden Rule of Web Development
DO NOT RENDER ON A POST

What does "Render on a POST" actually mean? If you have a function in your server that runs on a post method, it should NEVER return `render_template`

```py
@app.route('/something', methods=['POST'])
def some_function():
    # some code
    return render_template('some_file.html') # THIS IS A CARDINAL SIN OF WEB DEVELOPMENT
```

## So what do?

1. Create your post route
2. In your post route, do whatever you need to do with that data.
3. Instead of rendering an html file, REDIRECT to a route that will render that html file.

## But how?

First, we need to import the function that allows us to redirect.

```py
from flask import Flask, render_template, request, redirect
```

After importing the `redirect` function, we need to adjust our `POST` route function to end in a REDIRECT to a route instead of a RENDER

```py
@app.route('/heroes', methods=['POST'])
def create_hero():
    print(request.form['name'])
    print(request.form['alter_ego'])
    print(request.form['catch_phrase'])
    return redirect('/success')

# In order to redirect to a route, that route needs to exist
@app.route('/success')
def success():
    return render_template('success.html')
```