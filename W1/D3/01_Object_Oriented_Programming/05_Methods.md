# Methods

A `method`, simply put, is a `function` that is attached to an `object` or `class`. Defining the `method` happens within the `class`, and the only thing that really makes it any different, is that it will **ALWAYS** have a first parameter of `self`.


## Let's make a method for ripening a fruit

```py
class Fruit:
    food_type = "Fruit"

    def __init__(self, flavor, grows_on, color, name):
        self.flavor = flavor
        self.grows_on = grows_on
        self.color = color
        # adding one more attribute
        self.name = name

    def ripen(self):
        print(f"The {self.name} ripens, becoming a vibrant {self.color}, and has a delicious {self.flavor} flavor. You may now pick it from the {self.grows_on}")
```

Once a `method` is defined, how do we actually call that `function`?

```py
# assuming my_fruit has been initialized previously

my_fruit.ripen()
```

