from belt_app.config.mysqlconnection import connectToMySQL
from flask import flash
from belt_app.models import author, user, review


class Book:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.user_id = data['user_id']
        self.author_id = data['author_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


        self.reviews = []
        self.author = None
        self.user = None

    @classmethod
    def save(cls, data):
        query = "INSERT INTO books (title, user_id, author_id, created_at, updated_at) VALUES (%(title)s, %(user_id)s, %(author_id)s, NOW(), NOW());"

        return connectToMySQL('belt_db').query_db(query, data)

    @classmethod
    def get_all_for_dashboard(cls, data):
        to_exclude = {
            "book_1": "",
            "book_2": "",
            "book_3": ""
        }
        for i in range(len(data)):
            to_exclude[f"book_{i+1}"] = data[i].book_id
        query = "SELECT * FROM books WHERE books.id != %(book_1)s AND books.id != %(book_2)s AND books.id != %(book_3)s;"

        results = connectToMySQL('belt_db').query_db(query, to_exclude)
        books = []
        for book in results:
            books.append(cls(book))
        
        return books

    @classmethod
    def get_one_book(cls, data):
        query = "SELECT * FROM books LEFT JOIN authors ON authors.id = books.author_id LEFT JOIN reviews ON reviews.book_id = books.id LEFT JOIN users ON users.id = reviews.user_id WHERE books.id = %(id)s;"

        results = connectToMySQL('belt_db').query_db(query, data)


        if len(results) == 0:
            return False
        else:

            book = cls(results[0])

            author_data = {
                "id": results[0]["authors.id"],
                "name": results[0]["name"],
                "created_at": results[0]["authors.created_at"],
                "updated_at": results[0]["authors.updated_at"],
            }

            for row_in_db in results:
                print(row_in_db)
                if row_in_db["reviews.id"] != None:
                    review_data = {
                        "id": row_in_db["reviews.id"],
                        "review": row_in_db["review"],
                        "rating": row_in_db["rating"],
                        "user_id": row_in_db["reviews.user_id"],
                        "book_id": row_in_db["book_id"],
                        "created_at": row_in_db["reviews.created_at"],
                        "updated_at": row_in_db["reviews.updated_at"],
                    }
                    review_to_add = review.Review(review_data) 
                
                    user_data = {
                        "id": row_in_db["reviews.user_id"],
                        "first_name": row_in_db["first_name"],
                        "last_name": "",
                        "email": "",
                        "password": "",
                        "created_at": "",
                        "updated_at": ""
                    }

                    review_to_add.user = user.User(user_data)
                    book.reviews.append(review_to_add)

            book.author = author.Author(author_data)

            return book

    @classmethod
    def delete_book(cls, data):
        query = "DELETE FROM reviews WHERE book_id = %(id)s;"
        connectToMySQL('belt_db').query_db(query, data)
        query = "DELETE FROM books WHERE id = %(id)s;"
        connectToMySQL('belt_db').query_db(query, data)
        



    @staticmethod
    def validate_book(book):
        is_valid = True

        if len(book["title"]) == 0:
            flash("Title is required", "title")
            is_valid = False
        elif len(book["title"]) < 2: 
            flash("Title must be at least 2 characters long", title)
            is_valid = False
        
        return is_valid

