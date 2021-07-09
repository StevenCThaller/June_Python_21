# Static Files

First of all, what the heck IS a static file?

We just learned about our template engine, Jinja. Jinja takes our `html` files, and `dynamically` modifies it, based on data given to it. `Dynamic` is, in this situation, the exact opposite of `Static`. `Static Files` are the files that we need to use that are not going to change between two visits.

What I mean by this, is if I have a route:

```py
@app.route('/something/<x>')
def something_changes(x):
    return render_template("index.html", x=x)
```

There might be a difference in the number of times an element shows up, based on whether I am visiting `http://localhost:5000/something/4` or `http://localhost:5000/something/72`. That potential variation in the final HTML seen by the browser means that our `index.html` is NOT static.

However, the `css` file we link, or the `image` that we have a source for is not going to change. Jinja is not going to modify the `css` file, or the `image`. So, `stylesheets`, `script files`, and `images` (and other types of files we would save locally to embed into our `html`) are considered `static files`.

Previously, we've linked these by means of a `path` relative to the `path` of the `html` file.

But now we're in a framework that wants things a certain way. 

## Folder Structure
```console
Overall Project
|   server.py
|
|___templates
|       index.html
|       second_page.html
|
|___static
        script.js
        style.css
        some_pic.png
```

And in our `html` file:

```html
<!-- linking our stylesheet -->
<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='style.css') }}">
<!-- linking a script -->
<script type="text/javascript" src="{{ url_for('static', filename='script.js) }}"></script>
<!-- linking an image -->
<img src="{{ url_for('static', filename='some_pic.png') }}">
```