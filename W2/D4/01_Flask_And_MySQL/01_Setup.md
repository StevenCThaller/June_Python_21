# Setting Up For A Flask App With MySQL Integration

For every project we create, we'll need to build out a database in MySQL workbench.
So make sure you're comfortable with building out ERD's, and forward engineering them.

From there, in addition to our normal setup (initializing the Virtual Environment, creating our server.py, templates folder, static folder), we will create at least 2 new files. Additionally, when we initialize our virtual environment, we will also want to install `pymysql`.

So that initialization would look like:
```console
python -m pipenv install flask pymysql
```

THEN

1. This one will always be created: `mysqlconnection.py` - this will handle connecting to our database
2. A file for each table in your database. For consistency name it the singular version of your table name.
    - i.e. if the table is called characters, the file will be `character.py`.
