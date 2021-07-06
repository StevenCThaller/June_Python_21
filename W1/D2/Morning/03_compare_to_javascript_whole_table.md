# What are the differences between JavaScript and Python?

<style>
table {
    width: 100%;
}
</style>

<table>
<thead>
<tr>
<th>
Topic
</th>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
<th rowspan="2">
Variables
</th>
<td>
In JavaScript, we use declaration statements (i.e. <code>var</code>, <code>let</code>, <code>const</code>) to declare a variable

```js
var x = 25;
let y = 15;
const z = "Hello";
```
</td>
<td>
But in Python, we don't! We simply choose a variable name and give it a value

```py
x = 25
y = 15
z = "Hello"
```
</td>
</tr>
<tr>
<td colspan="2">
NOTE: While in JavaScript, we didn't TECHNICALLY need to use a semicolon to denote the end of a line, we could use it. In Python, we CANNOT use a semicolon to end a line.
</td>
</tr>
<tr>
<th>
Conditionals
</th>
<td>

```js
var age = 25;

if(age >= 21) { // curly braces to open code blocks
    console.log("You may purchase a beer!");
} else if(age >= 18) {
    console.log("You can vape or whatever.");
} else {
    console.log("You are a child, please go to school.");
} // curly braces to close code blocks
```

</td>
<td>

```py
age = 25

if age >= 25: # colon AND indentation to open code blocks
    print("You may purchase a beer!")
elif age >= 18: # no more else if, it's now elif
    print("You can vape or whatever.")
else:
    print("You are a child, please go to school.")
# Notice there's no "end" to the code block.
```

</td>
</tr>
<tr>
<th>
Loops
</th>
<th>
JavaScript
</th>
<th>
Python
</th>
</tr>
<tr>
<th rowspan="2">
Basic For Loops
</th>

<td>

We declare our starting point, the condition in which we want to continue, and the steps we'd like to take after each iteration.
```js
for(var i = 0; i < 11; i++) {
    if(i == 3) {
        console.log("Trey");
    } else {
        console.log(i);
    }
}
```

</td>
<td>

Python for loops LOOK different, but we can easily do the same thing.
```py
for i in range(11): # wait wat
    print(i)
```

That `11` is what we call an `Exclusive Stop`. Functionally, this is just `i < 11`.


</td>
</tr>
<tr>
<td>

Output
```js
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
```

</td>
<td>

Output
```py
# 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
```

</td>
</tr>
<tr>
<th rowspan="2">
Not Starting at Zero
</th>
<td>

In JavaScript, it's really just a matter of changing our starting i
```js
for(var i = 1; i < 11; i++) {
    console.log(i);
}
```

</td>
<td>

`range()` can accept multiple parameters. 1 is our inclusive start, 11 is our exclusive stop
```py
for i in range(1, 11): 
    print(i)

``` 

</td>
</tr>
<tr>
<td>

Output
```js
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
```

</td>
<td>

Output
```py
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
```

</td>
</tr>
<tr>
<th rowspan="2">
Iterating by something other than 1
</th>
<td>

Simply change the last portion to reflect how much you want to iterate by
```js
for(var i = 1; i < 11; i+=2) {
    console.log(i);
}
```

</td>
<td>

`range()` can accept up to 3 parameters. First parameter is our start, second is our stop, third is our step. 
```py
for i in range(1, 11, 2): 
    print(i)
```

</td>
</tr>
<tr>
<td>

Output
```js
// 1
// 3
// 5
// 7
// 9
```

</td>
<td>

Output
```py
# 1
# 3
# 5
# 7
# 9
```

</td>
</tr>
<tr>
<th>
Functions
</th>
<td>

```js
function myFunction(param1, param2) {
    var x = param1;
    return x - param2;
}

console.log(myFunction(15, 4));
// Expected Output:
// 11
```

</td>
<td>

```py
def my_function(param_1, param_2):
    x = param_1
    return param_2

print(my_function(15, 4))
# Expected Output:
# 11
```

</td>
</tr>
<tr>
<th>
Arrays
</th>
<th>
JavaScript
</th>
<th>
Python
</th>
</tr>
<tr>
<th>
Declaring an Array
</th>
<td>

```js
var arr = [1, 2, 3, 4, 5];
```

</td>
<td>

No such thing, technically. It's called a `List`, but functionally, it does the same thing as an array in JavaScript.

```py
arr = [1, 2, 3, 4, 5]
```

</td>
</tr>
<tr>
<th>
Length
</th>
<td>

```js
var length = arr.length;
```

</td>
<td>

```py
length = len(arr)
```

</td>
</tr>
<tr>
<th>
Accessing an Element
</th>
<td>

```js
arr[i];
```

What about the LAST element?

```js
arr[arr.length-1];
```

</td>
<td>

```py
arr[i]
```

What about the LAST element?

```py
arr[-1]
```

</td>
</tr>
<tr>
<th>
Adding to the End
</th>
<td>

```js
arr.push(6);
```

</td>
<td>

```py
arr.append(6)
```

</td>
</tr>
<tr>
<th>
Insert at Index
</th>
<td>

This one is kind of wonky and not... great?
```js
arr.splice(index, 0, item);
```

</td>
<td>

Way easier
```py
arr.insert(index, item)
```

</td>
</tr>
<tr>
<th>
Remove from End
</th>
<td>

```js
arr.pop();
```

</td>
<td>

```py
arr.pop()
```

</td>
</tr>
<tr>
<th>
Remove at a Given Index
</th>
<td>

```js
arr.splice(index, numberOfElementsToRemove);
```

</td>
<td>

```py
arr.pop(index)
```

</td>
</tr>
<tr>
<th>
Iterating Through
</th>
<td>

```js
var arr = [1, 2, 3, 4, 5];

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

Alternatively (something we did not really discuss)

```js
var arr = [1, 2, 3, 4, 5];

for(var num of arr) {
    console.log(num);
}
```

</td>
<td>

```py
arr = [1, 2, 3, 4, 5]

for num in arr:
    print(num)
```

If you really want to use the index like a regular js for loop:
```py
arr = [1, 2, 3, 4, 5]

for i in range(len(arr)):
    print(arr[i])
```

</td>
</tr>
</tbody>
</table>