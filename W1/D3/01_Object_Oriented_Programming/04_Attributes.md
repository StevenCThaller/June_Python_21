# Attributes

What good is a class or object if it doesn't actually have any data in it? 

This is where attributes come in. Attributes are pieces of information attached to an instance of an object. If we want every single instance of our `Fruit` class to have an attribute called `food_type` with a value of `"Fruit"`

```py
class Fruit:
    food_type = "Fruit"

```

Then, every single `Fruit` created will have a `food_type` of `"Fruit"`.

```py
my_fruit = Fruit()
your_fruit = Fruit()

print(my_fruit)
print(your_fruit)
```

## What about individual attributes?

Let's look at what we call a `constructor`. A `constructor` is a method that runs when an instance of a class is first initialized. But what does it look like?

```py
class Fruit:
    food_type = "Fruit"

    # the constructor of a class is always called the same thing
    # we'll talk about it later, but for now, know that every method in a class must accept a first parameter of "self"
    def __init__(self):
        # self is used to assign values to individual attributes,
        # OR, access individual attributes, 
        # OR call methods of this class
        self.flavor = "sweet"
        self.grows_on = "tree"
        self.color = "red"
```

We mentioned that `Class Attributes` are, specifically, `attributes` that are attributed to every instance of a class. Above shows two different ways to add a `Class Attribute`.

```py
my_fruit = Fruit()
your_fruit = Fruit()

print(my_fruit.flavor)
print(your_fruit.flavor)

# We'll see that the flavor is the same for both
```

### But I don't WANT all of the fruit's info to be the same!!!

`Methods` are just `functions` that happen to be attached to a `class` or `object`. If I wanted to send custom information into a `function`, how would I do that? We set our function up to have parameters, and pass arguments in when the function is invoked.

```py
class Fruit:
    food_type = "Fruit"

    def __init__(self, flavor, grows_on, color):
        self.flavor = flavor
        self.grows_on = grows_on
        self.color = color

my_fruit = Fruit("sweet", "bush", "red")
your_fruit = Fruit("sweet", "tree", "yellow")
```

Now, `my_fruit` and `your_fruit` both have a `food_type` of "Fruit" due to the hard-coded definition of the class attribute, but potentially different information for `flavor`, `grows_on`, and `color` due to those `attributes` being set to the values of the `arguments` passed into the object creation (i.e. the invocation of the `__init__` method).