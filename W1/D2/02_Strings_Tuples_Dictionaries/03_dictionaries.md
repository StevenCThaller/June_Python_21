# Dictionaries

## Real World Perspective
What is a dictionary? It is a collection of words and their definitions.

If we liken this to coding terms, it is an `object` with `key` `value` pairs.

## Python Perspective
A `dictionary` is just a collection of `key` `value` pairs, and syntactically, they LOOK almost identical to objects in JavaScript

```py
# Create a dictionary, called taco
taco = {
    # set up key value pairs
    "meat": "beef", # each entry consists of a key and value (separated by a colon), and separated from the other entries with a comma
    "cheese": True,
    "tortilla": "corn",
    "calorie_count": 98237498
}
```

## Accessing Data 
In JavaScript, we used `Objects`, and grabbed values via dot notation.

In Python, a dictionary is not quite the same as an object, so we cannot use dot notation. We MUST use bracket notation.

```py
some_dictionary = {
    "some_key": "some_value",
    "some_other_key": "some_other_value"
}

print(some_dictionary["some_key"])
# output: "some_value"
```

If we have a key stored as a variable, and we want to access that key's value without knowing the literal key:
```py
my_key = "some_key"

some_dictionary = {
    "some_key": "some_value",
    "some_other_key": "some_other_value"
}

print(some_dictionary[my_key])
# output: "some_value"
```

## Modifying Data

```py
some_dictionary = {
    "some_key": "some_value",
    "some_other_key": "some_other_value"
}

some_dictionary["some_key"] = "something entirely new"

print(some_dictionary["some_key"])
# output: "something entirely new"
```

## Adding New Key Value Pairs
We'll handle this the same way we'd handle modifying an existing entry, just with a key that doesn't exist yet.

```py
some_dictionary = {
    "some_key": "some_value",
    "some_other_key": "some_other_value"
}

some_dictionary["some_new_key"] = "some new value"

print(some_dictionary)
# output:
# {
#   "some_key": "some_value",
#   "some_other_key": "some_other"value",
#   "some_new_key": "some new value"
# }
```

## Removing Values
Dictionaries can take advantage of the `.pop()` function, by passing in the key:
```py
some_dictionary = {
    "some_key": "some_value",
    "some_other_key": "some_other_value"
}

removed = some_dictionary.pop("some_key")

# some_dictionary is now:
# {
#   "some_other_key": "some_other_value"
# }
```

Alternatively:
```py
some_dictionary = {
    "some_key": "some_value",
    "some_other_key": "some_other_value"
}

del some_dictionary["some_key"]

# some_dictionary is now:
# {
#   "some_other_key": "some_other_value"
# }
```

## Shallow vs Deep Copy

```py
dictionary = {
    "key": "value",
    "list": [1, 2, 3, 4, 5],
    "bool": True
}
```

If I make a copy using `.copy()`, it will give me a **shallow** copy, which means any embedded objects, lists, etc. are REFERENCES to the original, while the copy is not.

```py
dict_copy = dictionary.copy()

# result: dict_copy is:
# {
#     "key": "value",
#     "list": [1, 2, 3, 4, 5],
#     "bool": True
# }
```

But, this is a shallow copy. So, if I make changes to the original `list` in `dictionary`

```py
dictionary["list"][0] = 7
```
Those changes will be reflected in the copy

```py
print(dict_copy["list"])
# output: [7,2,3,4,5]
```

Shallow copies are only copies of the outermost layer. Anything nested deeper is a reference to the original in memory.