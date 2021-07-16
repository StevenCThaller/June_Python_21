# MVC
### Model
- may build database tables
- handles logic that relies on data
- interfaces with the database

### View
- the html page that is served to the client
- can contain some logic to be handled by our template engine(jinja)

### Controller
- handles the incoming requests from the client
- contains some logic
- calls on models to process data
- returns appropriate response


# Modularization

## Step 1: The App Folder
In our project file, we are going to create a new folder/directory called flask_app (can be named anything really)

Inside this newly created folder, we are going to create a file called __init__.py and inside this file we are going to add the following code:
```python
from flask import Flask
app = Flask(__name__)
app.secret_key = "key"
```
Where do you recognize this code snippet from? Its from our server.py file we've been working with until now!
So... 

Our next step is the remove those lines of code from our server.py file and instead we add:
```python
from flask_app import app
```

Next we will move our static and template folders into our flask_app folder.

## Step 2: The Controller
In our flask_app folder, we're going to create a new folder called config. Inside this folder we will create a new file called mysqlconnection.py. In this file we will copy and paste that big chunk of code from the platform. 
```python
# a cursor is the object we use to interact with the database
import pymysql.cursors
# this class will give us an instance of a connection to our database
class MySQLConnection:
    def __init__(self, db):
        connection = pymysql.connect(host = 'localhost',
                                    user = 'root', # change the user and password as needed
                                    password = 'root', 
                                    db = db,
                                    charset = 'utf8mb4',
                                    cursorclass = pymysql.cursors.DictCursor,
                                    autocommit = True)
        # establish the connection to the database
        self.connection = connection
    # the method to query the database
    def query_db(self, query, data=None):
        with self.connection.cursor() as cursor:
            try:
                query = cursor.mogrify(query, data)
                print("Running Query:", query)
     
                executable = cursor.execute(query, data)
                if query.lower().find("insert") >= 0:
                    # INSERT queries will return the ID NUMBER of the row inserted
                    self.connection.commit()
                    return cursor.lastrowid
                elif query.lower().find("select") >= 0:
                    # SELECT queries will return the data from the database as a LIST OF DICTIONARIES
                    result = cursor.fetchall()
                    return result
                else:
                    # UPDATE and DELETE queries will return nothing
                    self.connection.commit()
            except Exception as e:
                # if the query fails the method will return FALSE
                print("Something went wrong", e)
                return False
            finally:
                # close the connection
                self.connection.close() 
# connectToMySQL receives the database we're using and uses it to create an instance of MySQLConnection
def connectToMySQL(db):
    return MySQLConnection(db)
```
Next, we are going to create a folder called __controller__ in our flask_app folder and inside that folder, a new file named after whatever we are controlling in a pluralized form. 
i.e. burgers.py

In our burgers.py file, we will then add the imports at the top of the file as follows:
```python
from flask_app import app
from flask import render_template, redirect, request, session
from burger import Burger
```
Our next step then is to cut all the @app.route functions from our server.py file and paste them in the controller!

Our final step is to add the following from our server.py file:
```python
from flask_app.controllers import burgers
```

## Step 3: Models
Our next step is to create our models folder inside our flask_app folder and then create our models .py files inside the models folder.

In every model file you create, you must have the following import:
```python
from flask_app.config.mysqlconnection import connectToMySQL
```
