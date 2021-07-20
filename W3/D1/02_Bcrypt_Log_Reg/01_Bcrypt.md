# Bcrypt

Sometimes, we don't want to put `plaintext` in our database. Having user passwords in the database is a huge security risk. An employee with negative intentions could just query for user data and leak it. A hacker can penetrate the server and peek in. Man in the middle attacks could intercept data. There's a plethora of reasons why sensitive information should never be in the database in plaintext.

Now, there's an argument to be made for encrypting everything, but we're just going to do so with passwords for now, because `bcrypt` is not a reversible encryption process.

## Installation
We'll be installing `bcrypt` into our virtual environments along with flask and pymysql. To install everything in one go:
```console
python -m pipenv install flask pymysql flask-bcrypt
```

## Where to Use It?
An argument can be made for where you'd want to run the password encryption. You can encrypt the form data before passing it into the class query methods, or you can encrypt it within there. It's honestly up to you. I like doing it in the function itself.

## Creating Something `controllers/whatevercontroller.py`
```py
from your_app_name import app
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app) # initializing the bcrypt object that will actually handle the encryption

@app.route('/some/route', methods=['POST'])
def some_method():
    # Pass form data to validation
    # After determining that the form data IS valid
    field_hash = bcrypt.generate_password_hash(request.form['form_field_you_want_to_hash'])

    # we'll need to put that into the data dictionary we send through

    data = {
        # fields from form
        "form_field_you_want_to_hash": field_hash
    }

    SomeModel.save(data)

    # whatever else you want to do
```


## Compare Something

If we can't reverse the `bcrypt` encryption process, how can we make sure that, for example, when a user comes back to log in, that they gave us the right password? In the database, the password isn't going to look ANYTHING like what the user originally input, so how do we make sure the given value from the form matches what it originally was?

### Basic Steps
1. Encrypt the field from the form
2. Query for the entry in the database that you want to compare the field to
3. Check if the encrypted version of the field from the form matches the already encrypted data in the database
4. If so, keep on going with whatever you were doing
5. If not, probably don't keep on going with whatever you were doing
