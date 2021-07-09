# Template Engine With Flask

Hypothetical: You build an application that shows you a table of all SuperHeroes and SuperVillains created by users. The collection of Heroes and Villains is ever growing, because users love your website, and keep on creating new ones.

Do you:
1. Hire a crack team of sleep deprived crazy developers (a.k.a. Web Developers) to keep changing your HTML to reflect all of the new Heroes and Villains.
2. Use a Template Engine to dynamically render that data

**IF YOU CHOSE NUMBER 1** - Please never ever offer me or anyone here a job ever. Please.

**IF YOU CHOSE NUMBER 2** - I thank you for doing the readings.

## What Is a Template Engine

A template engine is a technology (in this case, Jinja) that can dynamically add (or hide) HTML in our rendered views.

**THIS IS NOT JAVASCRIPT**

Jinja runs and replaces chunks of HTML on the server before sending the final version of the HTML to the request origin. 

## Explain To Me This Dark Magic Please

Let's say we have  a route, and a function that runs at that route. In that function, we have a list of names, for example. 

```py
@app.route('/names/all')
def all_names():
    names = [
        "Michael",
        "Li Yen",
        "Richard",
        "Nathon",
        "Jonathan"
    ]

    requested_by = "Cody"

    # ?? How do I get this to HTML??
```

Well, remember how we used that fancy `render_template` function imported from flask? Well, we're able to pass more than just the name of the `HTML` file we want to render! We can add in any number of arguments to represent the data we want to see on the page!

```py
@app.route('/names/all')
def all_names():
    names = [
        "Michael",
        "Li Yen",
        "Richard",
        "Nathon",
        "Jonathan"
    ]

    my_name = "Cody"

    return render_template("index.html", student_names=names, requested_by=my_name)
```

Ok, that's cool and all, but that `index.html` file is like, a totally separate file, in a totally different area of our project!

**THAT'S RIGHT, IT SURE IS!**

That's what Jinja is for!


### index.html
```html
<h2>All Students</h2>

<ul>
    <!-- How do I use this magical Jinja? -->
</ul>

```

`Jinja` allows us to use Python-like code IN our HTML using some cool tricks.

- {{ some variable }}
- {% some expression %}

### Variable

Remember, our `render_template` function has `student_names`, with a value of the list of names, and `requested_by` with a value of "Cody". 

```html
<h2>All Students</h2>

<p>Requested by: {{ requested_by }}</p>

<ul>
    <!-- How do I use this magical Jinja? -->
</ul>
```

Note that the spelling and casing of `requested_by` in the HTML matches the spelling and casing of `requested_by` in the server.

After Jinja does it's thing, this HTML enters the browser looking like:

```html
<h2>All Students</h2>

<p>Requested by: Cody</p>

<ul>
    <!-- How do I use this magical Jinja? -->
</ul>
```

**WHAT ABOUT ALL THOSE STUDENT NAMES?!**

Jinja to the rescue!

Remember, we can use an `expression`

### index.html
```html
<h2>All Students</h2>

<p>Requested by: {{ requested_by }}</p>

<ul>
    {% for strange_banana_pineapple in student_names: %}
        <li>{{ strange_banana_pineapple }}</li>
    {% endfor %}
</ul>
```

So the browser receives HTML that looks like:
```html
<h2>All Students</h2>

<p>Requested by: Cody</p>

<ul>
    <li>Michael</li>
    <li>Li Yen</li>
    <li>Richard</li>
    <li>Nathon</li>
    <li>Jonathan</li>
</ul>
```

What if we had a list of dictionaries where each dictionary had a list?

### In the Server Function
```py
# code removed
students = [
    {
        name: "Cody",
        belts: ["Yellow", "Black", "Black", "Black"]
    },
    {
        name: "George",
        belts: ["Yellow", "Red", "Black", "Red"]
    }
]
return render_template("index.html", students)
# code removed
```

### In the HTML
```html
<ul>
    {% for student in students: %}
        <li>
            <p>{{ student["name"] }}</p>
            <ul>
                {% for belt in student["belts"]: %}
                    <li>{{ belt }}</li>
                {% endfor %}
            </ul>
        </li>
    {% endfor %}
</ul>
```

When received by the browser:

```html
<ul>
    <li>
        <p>Cody</p>
        <ul>
            <li>Yellow</li>
            <li>Black</li>
            <li>Black</li>
            <li>Black</li>
        </ul>
    </li>
    <li>
        <p>George</p>
        <ul>
            <li>Yellow</li>
            <li>Red</li>
            <li>Black</li>
            <li>Red</li>
        </ul>
    </li>
</ul>
```