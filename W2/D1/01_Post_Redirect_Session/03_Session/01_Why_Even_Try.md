# Why Even Try To Render On A POST??

Let's say you had a website where a user fills out a form, and then immediately after submission, they see a page that says "Success!" and then the info they submitted appears on the page.

Currently, that `request.form` data doesn't exist after the initial request. So something like this wouldn't work

```py
@app.route('/heroes', methods=['POST'])
def create_hero():
    print(request.form['name'])
    print(request.form['alter_ego'])
    print(request.form['catch_phrase'])
    return redirect('/success')

@app.route('/success')
def success():
    # This may seem like the best option
    return render_template('success.html', name=request.form['name'], request.form['alter_ego'], request.form['catch_phrase'])
```

Form data does not persist after the `POST` request it was sent in. So once we redirect, it's gone (unless we've stored it somewhere).

There are two main ways for us to hold on to this data across a redirect:

1. A database (this is something we'll get to soon, but it's not the answer today)
2. Session