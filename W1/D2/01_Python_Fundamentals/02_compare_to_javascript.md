# What are the differences between JavaScript and Python?

## Variables

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>

NOTE: While in JavaScript, we didn't TECHNICALLY need to use a semicolon to denote the end of a line, we could use it. In Python, we CANNOT use a semicolon to end a line.

---------------

## Conditionals

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>

------
## Loops

### Basic For Loops

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>



### Not starting at Zero

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>



### Iterating by something other than 1

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>

-------

## Functions

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
    return x - param2

print(my_function(15, 4))
# Expected Output:
# 11
```

</td>
</tr>
</tbody>
</table>

------- 

## Arrays... Or are they?

### Declaring an Array

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>

### To get the length

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>

### To access a given element

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>

### To add to the end of an array

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>

### To insert into an array

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>

### To remove from the end of an array

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>

### To remove a given index

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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
</tbody>
</table>

### To iterate through an array

<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Python</th>
</tr>
</thead>
<tbody>
<tr>
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