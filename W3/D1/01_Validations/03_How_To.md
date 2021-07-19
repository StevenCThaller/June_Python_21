# How To

In our `class` for our model, we'll build our `static method` for validation. Remember, a static method has no access to any attributes of the class itself, so we need to be able to pass the object into the static method.


## `superhero.py` model
```py
class SuperHero:
    # other methods and such

    @staticmethod
    def validate_hero(hero):
        is_valid = True # we'll assume that its valid until we find something invalid

        if len(hero['name']) < 4:
            # code for what to do if it's invalid
            is_valid = False
        if len(hero['name']) > 32:
            # code for what to do if it's invalid
            is_valid = False
        if len(hero['alter_ego']) < 4:
            # code for what to do if it's invalid
            is_valid = False
        # etc etc

        return is_valid
``` 

And to actually get the form data into there

## `superheroes.py` controller
We set up our static method to accept the form data directly! So, we'll use the results of that static method in a conditional, and use that to determine whether we should go back to the page with the form or go to the page we want to show when the submission is successful!
s
```py
@app.route('/heroes/create', methods=['POST'])
def create_hero():
    if not SuperHero.validate_hero(request.form):
        return redirect('/route/of/form')
    SuperHero.save(request.form)
    return redirect('/route/of/success')
```

And that's almost everything. HOWEVER, remember our initial example? Some red text pops up saying what's wrong with your input. How do we do that?