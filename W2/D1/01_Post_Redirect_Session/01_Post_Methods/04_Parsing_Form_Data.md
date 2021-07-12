# How do we Grab the data then?

Let's say our form looks like this:

```html
<form action="/heroes" method="post">
    <div>
        <label for="name">Name: </label>
        <input type="text" name="name" id="name">
    </div>
    <div>
        <label for="alter_ego">Alter Ego: </label>
        <input type="text" name="alter_ego" id="alter_ego">
    </div>
    <div>
        <label for="catch_phrase">Catch Phrase: </label>
        <textarea name="catch_phrase" id="catch_phrase" cols="10" rows="3"></textarea>
    </div>
    <input type="submit" value="Create Hero">
</form>
```

As we just mentioned, the form data is coming through in a dictionary that we access as `request.form`. Each user input is stored in that dictionary as the value of the key. The key is what the `name` attribute is in the `html`.

So, to just print the heroes `name`, `alter_ego`, and `catch_phrase` to the console:

```py
@app.route('/heroes', methods=['POST'])
def create_hero():
    print(request.form['name'])
    print(request.form['alter_ego'])
    print(request.form['catch_phrase'])
    # code
```