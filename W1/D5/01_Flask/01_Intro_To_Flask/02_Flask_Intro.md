# Flask

## What is Flask?
Flask is a lightweight `micro-framework` for building web applications in Python. We use the term `micro-framework` because, as you'll see within the next few months, it is not as robust as other frameworks (`Django` in Python, `ASP.NET` in C#). However, that doesn't mean it can't do what we want it to do! In fact, There's a benefit to having such a lightweight framework: We have more control over everything!

## How do we get it?

'Member that neat virtual environment doo-dad we just talked about? We install it into there!

**VERY IMPORTANT**: We don't want a global virtual environment. Yes, it's going to be tedious to initialize a new one every time we create a new Flask application, but I promise, it's for the best.

**In your project folder**

```console
pipenv install flask
```

## Flask Application

In your project directory, create a file called `server.py`. It should look like this:

```py
from flask import Flask 
app = Flask(__name__) 

@app.route('/') 
def hello_world():
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True)
```

But what does it all mean?


### Imports
The most important import is the `Flask` class defined in the `flask` package (the package you installed in your `virtual environment`). Remember Abstraction? `Flask` abstracts all the logic involved with "How do I listen for network requests?" and questions like that away into the the object.
```py 
from flask import Flask

```

### Initializing the Server

Remember, when we define a `class`, it's just a blueprint. `Flask` that we imported is just a class. If we need to create an `instance` of that class (i.e. create our own server), we need to do so. The `__init__` for the `Flask` class expects a path as a parameter. However, we don't need to concern ourselves with the specifics. `__name__`, a built in Python identifier, will handle that for us.
```py
app = Flask(__name__) 
```

### Declaring a Route

Remember `class` and `static` methods in OOP? They used that weird little `@`, to indicate that it was a `class` or `static` method. In Python, `@` is used to indicate what is called a `decorator`. In this case, `flask` allows us to use a `decorator` to decide on what `route` to accept HTTP requests at. 
```py
@app.route('/') 
```

Let's look at that string. If, for example, we were building a website with a url of `https://codyscoolcoders.com`, and I want to have a page at `https://codyscoolcoders.com/myawesomestudents`, I would create a decorator:
```py
@app.route('/myawesomestudents')
```
We don't actually care about the first part of the URL. Only what comes after `.com`, `.org`, etc.

**IMMEDIATELY AFTER THAT DECORATOR**
We need to define a function.

```py
@app.route('/') 
def hello_world():
    return "Hello World!"
```

This means, if our server receives an `HTTP request` destined for `https://mycoolsite.com`, my `flask` application will run the `hello_world` function.

### Actually Running The Server

Remember, `__name__` indicates the path this file is at. This conditional check makes sure that this server is being run **directly**. This will make more sense when we show HOW to run the server.

```py
if __name__ == "__main__":
    app.run(debug=True)
```

`app.run()` is a method in the `Flask` class, that says "Go ahead, run the server." `debug=True` is going to be how we, as developers, can see error messages when building our website.

### Running the Server
From the directory that `server.py` was created, go to your terminal and run:
#### WINDOWS
```console
python server.py
```
#### MAC
```console
python3 server.py
```