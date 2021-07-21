from belt_app.config.mysqlconnection import connectToMySQL
from belt_app.models import book, user
from flask import flash

class Review:
    def __init__(self, data):
        self.id = data['id']
        self.review = data['review']
        self.rating = data['rating']
        self.book_id = data['book_id']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.book = None
        self.user = None

    @classmethod
    def save(cls, data):
        query = "INSERT INTO reviews (review, rating, book_id, user_id, created_at, updated_at) VALUES (%(review)s, %(rating)s, %(book_id)s, %(user_id)s, NOW(), NOW());"
        return connectToMySQL('belt_db').query_db(query, data)

    @classmethod
    def three_most_recent(cls):
        query = "SELECT * FROM reviews JOIN books ON books.id = reviews.book_id JOIN users ON books.user_id = users.id ORDER BY reviews.created_at DESC LIMIT 3;"

        results = connectToMySQL('belt_db').query_db(query)

        reviews = []
        for row_in_db in results:
            review = cls(row_in_db)

            book_data = {
                "id": row_in_db["books.id"],
                "title": row_in_db["title"],
                "author_id": row_in_db["author_id"],
                "user_id": row_in_db["books.user_id"],
                "created_at": row_in_db["books.created_at"],
                "updated_at": row_in_db["books.updated_at"]
            }
            review.book = book.Book(book_data)

            user_data = {
                "id": row_in_db["users.id"],
                "first_name": row_in_db["first_name"],
                "last_name": row_in_db["last_name"],
                "email": row_in_db["email"],
                "password": row_in_db["password"],
                "created_at": row_in_db["users.created_at"],
                "updated_at": row_in_db["users.updated_at"]
            }
            review.user = user.User(user_data)

            reviews.append(review)
        return reviews

    @classmethod
    def delete_review(cls, data):
        query = "DELETE FROM reviews WHERE id = %(id)s;"

        connectToMySQL('belt_db').query_db(query, data)

    @staticmethod 
    def validate_review(review):
        is_valid = True

        if len(review["review"]) == 0:
            flash("Review is required", "review")
            is_valid = False
        elif len(review["review"]) < 10:
            flash("Review must be at least 10 characters in length", "review")
            is_valid = False
        
        if int(review["rating"]) < 1 or int(review["rating"]) > 5:
            flash("Stop trying to hack in, use the dang dropdown.", "rating")
            is_valid = False

        return is_valid

    