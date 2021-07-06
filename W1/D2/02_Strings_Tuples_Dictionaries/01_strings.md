
## Side Track before diving into strings

### Booleans

#### JavaScript

```js
true
// or
false
```

#### Python

```py
True
# or
False
```
## Back to our Scheduled Content

# Strings in Python

### JavaScript

We can concatenate any primitive data types to a string.

Example:

```js
var x = 25;
var message = "I have this many dollars: ";

message += x;

console.log(message);

// Output:
// I have this many dollars: 25

```

### Python

But in Python, strings can ONLY be concatenated with strings.

Example:
```py
print("Hello " + "Cody")
# Output: "Hello Cody"
print("Hello " + 42)
# Output: TypeError
```

So how do we convert from one data type to another?
```py
print("Hello " + str(42))
# Output: "Hello 42"
```

Unrelated to strings, but we can actually do this to other data types as well.

Example:
```py
x = "77"
y = 23
total = x + y
# result: TypeError. How to fix?
total = int(x) + y
# result: total is 100 
```

## String Interpolation

Up until now, if we wanted to add variables to our strings, we've really been relying on string concatenation.

```py
x = 25
message = "Some text " + str(x) + " more text"
# result: message is "Some text 25 more text"
```

### f-strings (literal string interpolation)
Let's recreate the previous message with an f string
```py
x = 25
message = f"Some text {x} more text"
# result: message is STILL "Some text 25 more text", and we didn't have to convert x to a string
```

### .format()

```py
x = 25
message = "Some text {} more text".format(x)
```