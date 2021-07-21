from belt_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash, session
from belt_app import app
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

NAMES_REGEX = re.compile(r'^[a-zA-Z]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def is_email_unique(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"

        results = connectToMySQL('belt_db').query_db(query, data)
        return len(results) == 0

    @classmethod 
    def user_in_db(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"


        results = connectToMySQL('belt_db').query_db(query, data)
        if len(results) == 0:
            return False
        else:
            return cls(results[0])

    @classmethod 
    def get_logged_in_user(cls):
        query = "SELECT * FROM users WHERE id = %(user_id)s;"

        results = connectToMySQL('belt_db').query_db(query, session)

        return cls(results[0])

    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW());"

        return connectToMySQL('belt_db').query_db(query, data)
        
    @staticmethod
    def validate_reg(user):
        is_valid = True

        if len(user['first_name']) == 0:
            flash('First Name is required', 'first_name')
            is_valid = False
        elif len(user['first_name']) < 2:
            flash('First Name must be at least 2 characters', 'first_name')
            is_valid = False
        elif not NAMES_REGEX.match(user['first_name']):
            flash('First Name must only contain characters from the alphabet', 'first_name')
            is_valid = False

        if len(user['last_name']) == 0:
            flash('Last Name is required', 'last_name')
            is_valid = False
        elif len(user['last_name']) < 2:
            flash('Last Name must be at least 2 characters', 'last_name')
            is_valid = False
        elif not NAMES_REGEX.match(user['last_name']):
            flash('Last Name must only contain characters from the alphabet', 'last_name')
            is_valid = False

        if len(user['email']) == 0:
            flash('Email is required', 'email')
            is_valid = False
        elif not EMAIL_REGEX.match(user['email']):
            flash('Invalid email format, must contain @ and . like someusername@domain.com', 'email')
            is_valid = False
        elif not User.is_email_unique(user):
            flash('You have already registered with that email, please log in', 'email')
            is_valid = False

        if len(user['password']) == 0:
            flash('Password is required', 'password')
            is_valid = False
        elif len(user['password']) < 8:
            flash('Password must be at least 8 characters in length', 'password')
            is_valid = False
        elif user['password'] != user['confirm_password']:
            flash('Password must match your Confirm Password', 'password')
            is_valid = False

        return is_valid

    @staticmethod
    def validate_log(log_user):
        user_in_db = User.user_in_db(log_user)

        if not user_in_db:
            flash('Invalid email/password')
            return False 
        
        if not bcrypt.check_password_hash(user_in_db.password, log_user['password']):
            flash('Invalid email/password')
            return False
        
        return user_in_db.id