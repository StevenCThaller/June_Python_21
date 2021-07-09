# Rendering Views

Websites don't just have a string of text when you go to them. There's (in like 99.99% of cases) an HTML page that renders in your browser. So how can we do this with Flask?

## Folder Structure

In your project folder, create a new folder called `templates`. This is non-negotiable. You cannot change this, unless you can bribe the developers of `flask` to change the source code.

Inside of that folder, you will save any of your `html` files you wish to be served by your `flask` application.

Then, in your `server`, the function at the route you want to show the `html` file, you will `return` a function, called `render_template`, that will accept the name of the `html` file you want to render as an argument.

```py
@app.route('/')
def index():
    return render_template('index.html')
```

But you might find (like I just did) that `render_template` doesn't actually exist? Well, that's because we need to import it from `flask`. So, at the top of your `server.py`, where you imported `flask`, change it to reflect the following:

```py
from flask import Flask, render_template
```