dictionary = {
    "key": "value",
    "list": [1, 2, 3, 4, 5],
    "bool": True
}

dict_copy = dictionary.copy()

print(dict_copy)

dictionary["list"][0] = 7

print(dict_copy)

dictionary.pop("list")

print(dictionary)
print(dict_copy)

# dictionary[True] = "something"

# print(dictionary)

# dictionary["+"] = "excuse me what"