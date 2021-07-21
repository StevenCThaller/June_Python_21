from flask import render_template, redirect, session, request
from belt_app import app
from belt_app.models.user import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    if not User.validate_reg(request.form):
        return redirect('/')

    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
        "password": bcrypt.generate_password_hash(request.form["password"])
    }

    
    session['user_id'] = User.save(data)
    return redirect('/books')

@app.route('/login', methods=['POST'])
def login():
    user_in_db = User.validate_log(request.form)

    if not user_in_db:
        return redirect('/')
    
    session['user_id'] = user_in_db
    return redirect('/books')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')