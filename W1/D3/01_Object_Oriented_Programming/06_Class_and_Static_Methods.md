# Class and Static Methods


## Class Method
We mentioned `class attributes`, and how they are attributes shared amongst all of a `class`. But what is a `Class Method`? A `Class Method` is a method belonging to the `class` itself, rather than any particular instance.

Let's look at an example

```py
class Fruit:
    # class attributes
    food_type = "Fruit"
    all_fruits = []

    def __init__(self, flavor, grows_on, color, name):
        self.flavor = flavor
        self.grows_on = grows_on
        self.color = color
        self.name = name

        # Can we modify a class attribute in here? Sure can!
        Fruit.all_fruits.append(self)

        # This will take the newly constructed instance of the fruit class, and add it to the fruit class's class attribute all_fruits

    def ripen(self):
        print(f"The {self.name} ripens, becoming a vibrant {self.color}, and has a delicious {self.flavor} flavor. You may now pick it from the {self.grows_on}")

    # So where does a class method come in?
    @classmethod # this tag is necessary to indicate that the value of the first parameter is NOT the instance of the object
    def get_all_fruits(cls):
        for fruit in cls.all_fruits:
            print(fruit.name)
```

So we see that a `class method` can be invoked from an instance AND the class itself.

## Static Methods

The `class` method was able to access information about the `class` itself. It had access to the `all_fruits` attribute.

A `static` method, however, does NOT have access to any of the information `encapsulated` within the class or object. It can only have access to what is passed in as an argument

```py
class Fruit:
    food_type = "Fruit"
    all_fruits = []

    def __init__(self, flavor, grows_on, color, name):
        self.flavor = flavor
        self.grows_on = grows_on
        self.color = color
        self.name = name
        Fruit.all_fruits.append(self)


    def ripen(self):
        print(f"The {self.name} ripens, becoming a vibrant {self.color}, and has a delicious {self.flavor} flavor. You may now pick it from the {self.grows_on}")

    
    @classmethod
    def get_all_fruits(cls):
        for fruit in cls.all_fruits:
            print(fruit.name)

    # Like the class method, we need a special tag
    @staticmethod
    # but unlike the class method, it doesn't get any arguments referring to the class or object itself
    def remove_fruit(name, list_of_fruit):
        for i in range(len(list_of_fruit)):
            if list_of_fruit[i].name == name:
                list_of_fruit.pop(i)
```

But if our static method has no access to `instance` or `class` attributes, how do I use this?

```py
my_fruit = Fruit("sweet", "bush", "red", "strawberry")
your_fruit = Fruit("sweet", "tree", "yellow", "banana")

Fruit.remove_fruit("banana", Fruit.all_fruit)
```
