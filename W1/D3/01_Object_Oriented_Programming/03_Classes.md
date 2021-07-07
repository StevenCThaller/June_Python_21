# Classes

A `Class` is like a blueprint. If you drive into a neighborhood being built, you'll often see that the houses all kind of look the same. These houses, while individually unique in some way (i.e. you can't walk into all of the houses simultaneously) are built from the same basic blueprint. The house is the `instance` of the object, and the `class` is the blueprint. 


## Setup

To create a class:

```py
class Fruit:
    pass # we'll fill this in as we go
```

But like we mentioned, this is a blueprint used to create `instances` of `Fruit` objects. So how do we create an `instance` of our `Fruit` class??

```py
Fruit()
```

Realistically, we'll want to be able to access the object later, so let's store it into a variable.

```py
my_fruit = Fruit()
your_fruit = Fruit()

print(my_fruit == your_fruit) # this should be false
```