# Tuples

## Easy Mode:
Tuples are lists that cannot be modified.

## Syntax

Syntactically, near identical to a list, except with `()` instead of `[]`.

```py
my_tuple = (1, 2, 3, 4, 5)
```

Unlike a list, I can't modify this after it's created. It is **immutable**
```py
my_tuple.append(6)
# This DOES NOT WORK
```

```py
my_tuple[2] = "Tony"
# This also does not work.
```

We can access the items inside of a tuple the same way we can access the items inside of a `list`.

```py
my_tuple = ("Cody", "sthaller@codingdojo.com", 30, False)

print(my_tuple[1])
# output: "sthaller@codingdojo.com"
```

Similar to strings, we can add and slice via the addition operator and slice operator

**Add a new value**
```py
my_tuple = ("Cody", "sthaller@codingdojo.com", 30, False)
my_tuple = my_tuple + ("Something",)

# Result: ("Cody", "sthaller@codingdojo.com", 30, False, "Something")
```
However, it did not MODIFY the original `tuple`. It created a new one containing all of the values.

**Removing a value**
```py
my_tuple = ("Cody", "sthaller@codingdojo.com", 30, False)

my_tuple = my_tuple[:3]
# Result: ("Cody", "sthaller@codingdojo.com", 30)
```

## NOTE 
You will most likely not be actively using a tuple in your code. Their use cases are pretty advance, but the most basic would be having a function return multiple values.

By definition, a function can only return one thing. But if that one thing is a container with multiple things inside of it, that's ok. And with a tuple, unlike with a list, we ensure its immutability.

```py
def get_coordinates(x, y):
    x = x + 22
    y = y - 18

    # returns our x and y together as a tuple
    return (x, y)

coords = get_coordinates(88,22)

coords.append(18) # this won't work
coords[1] = 29 # this also won't work
```