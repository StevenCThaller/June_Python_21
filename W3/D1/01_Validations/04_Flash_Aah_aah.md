# Flash

`Flash` is a tool built into `flask` that uses `session` to allow us to store temporary messages for display. 

Or, alternatively, to allow us to `flash` messages on the screen.

```py
from flask import flash # <-- very important!

class SuperHero:
    # other methods and such

    @staticmethod
    def validate_hero(hero):
        is_valid = True # we'll assume that its valid until we find something invalid

        if len(hero['name']) < 4:
            flash("Name must be at least 4 characters")
            is_valid = False
        if len(hero['alter_ego']) < 4:
            flash("Alter ego must be at least 4 characters")
            is_valid = False
        # etc etc

        return is_valid
``` 

## Displaying Flash Messages

In our `HTML`, we'll want to cycle through all of the flash messages and render them

```html
<!-- above the form most likely -->
{% with messages = get_flashed_messages(): %} 
    {% if messages: %}
        {% for message in messages: %}
            <p>{{ message }}</p>
        {% endfor %}
    {% endif %}
{% endwith %}
``` 
And we'll have all of our messages display

## Separating our Flash Messages by Category

It's great that we can show all of our error messages! But, personally, I like to be able to organize them a LITTLE bit better.

For example: If there's an error with my `first_name` field submission, I'd like to see the error message stacked up on top of that input so it's much more clear what's wrong.

### `superhero.py` model

```py
from flask import flash # <-- very important!

class SuperHero:
    # other methods and such

    @staticmethod
    def validate_hero(hero):
        is_valid = True # we'll assume that its valid until we find something invalid

        if len(hero['name']) < 4:
            flash("Name must be at least 4 characters", "name") # by adding in a second argument, in this case a category, we'll be able to better organize our messages
            is_valid = False
        if len(hero['alter_ego']) < 4:
            flash("Alter ego must be at least 4 characters", "alter_ego")
            is_valid = False
        # etc etc

        return is_valid
```

And then in the `html`

```html
<form>
{% with messages = get_flashed_messages(): %}
<div>
    {% if messages: %}
    {% for category, message in messages: %}
    {% if category == "name": %}
        <p>{{ message }}</p>
    {% endif %}
    {% endfor %}
    {% endif %}
    <label for="name">Hero Name: </label>
    <input type="text" name="name" id="name">
</div>
<div>
    {% if messages: %}
    {% for category, message in messages: %}
    {% if category == "alter_ego": %}
        <p>{{ message }}</p>
    {% endif %}
    {% endfor %}
    {% endif %}
    <label for="alter_ego">Hero Name: </label>
    <input type="text" name="alter_ego" id="alter_ego">
</div>
<!-- rinse and repeat with other fields -->
{% endwith %}
</form>
```

And this will make it so that the name error shows up on the name field, alter ego error on the alter ego field, etc.

## FOR THE BRAVE AND BOLD, NOT GUARANTEED TO WORK

You might be able to slim this down. `for variable1, variable2 in something:` is generally used to iterate through key value pairs in a dictionary. So try this, and see if it works?

```html
<form>
    <div>
    {% with name_errors = get_flashed_messages(category_filter=['name']): %}
        {% for message in name_errors: %}
        <p>{{ message }}
        {% endfor %}
    {% endwith %}
    <label for="name">Hero Name: </label>
    <input type="text" name="name" id="name">
</div>
</form>
```