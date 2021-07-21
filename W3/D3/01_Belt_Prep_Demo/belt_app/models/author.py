from belt_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

NAME_REGEX = re.compile(r'^[a-zA-Z ]+$')

class Author:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at'] 
        self.updated_at = data['updated_at']

        self.books = []

    @classmethod
    def save(cls, data):
        query = "INSERT INTO authors (name, created_at, updated_at) VALUES (%(name)s,  NOW(), NOW());"

        return connectToMySQL('belt_db').query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors;"

        results = connectToMySQL('belt_db').query_db(query)

        authors = []
        for author in results:
            authors.append(cls(author))
        
        return authors

    @staticmethod 
    def validate_author(author):
        is_valid = True

        if len(author["name"]) == 0:
            flash("Author name is required", "name")
            is_valid = False 
        elif len(author["name"]) < 4:
            flash("Author name must be at least 4 characters", "name")
            is_valid = False
        elif not NAME_REGEX.match(author["name"]):
            flash("Author name can only contain letters and spaces", "name")
            is_valid = False
        
        return is_valid
