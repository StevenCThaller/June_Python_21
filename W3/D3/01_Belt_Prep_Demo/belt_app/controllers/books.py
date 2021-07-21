from flask import render_template, redirect, session, request
from belt_app import app
from belt_app.models.book import Book
from belt_app.models.review import Review
from belt_app.models.user import User
from belt_app.models.author import Author

@app.route('/books')
def books_dashboard():
    if not 'user_id' in session:
        return redirect('/')

    reviews = Review.three_most_recent() 
    print(reviews)
    books = Book.get_all_for_dashboard(reviews)
    user = User.get_logged_in_user()

    return render_template('dashboard.html', reviews=reviews, books=books, user=user)

@app.route('/books/add')
def add_book():
    if not 'user_id' in session:
        return redirect('/')

    authors = Author.get_all()

    return render_template('add_book.html', authors=authors)

@app.route('/books/add', methods=['POST'])
def create_book():
    if not 'user_id' in session:
        return redirect('/')
    
    data = {
        "title": request.form["title"],
        "author_id": 0,
        "user_id": session["user_id"]
    }

    if 'author_id' not in request.form or request.form['author_id'] == "0":
        author = {
            "name": request.form["author_name"]
        }
        if not Author.validate_author(author):
            return redirect('/books/add')
        data["author_id"] = Author.save(author)
    else:
        data["author_id"] = request.form["author_id"]
    review_data = {
        "review": request.form["review"],
        "rating": request.form["rating"],
        "user_id": session["user_id"]
    }
    if not Review.validate_review(review_data):
        return redirect('/books/add')
    
    new_book_id = Book.save(data)
    review_data["book_id"] = new_book_id

    Review.save(review_data)

    return redirect(f'/books/{new_book_id}')


@app.route('/books/<int:book_id>')
def one_book(book_id):
    if not 'user_id' in session:
        return redirect('/')

    book_to_display = Book.get_one_book({ "id": book_id })

    if not book_to_display:
        return redirect('/books')
    
    return render_template('one_book.html', book=book_to_display)

@app.route('/books/<int:book_id>/review', methods=['POST'])
def add_review(book_id):
    if not 'user_id' in session:
        return redirect('/')

    if not Review.validate_review(request.form):
        return redirect(f'/books/{book_id}')

    data = {
        "review": request.form["review"],
        "rating": request.form["rating"],
        "book_id": book_id,
        "user_id": session["user_id"]
    }

    Review.save(data)
    return redirect(f'/books/{book_id}')

@app.route('/reviews/<int:review_id>/delete')
def delete_review(review_id):
    if not 'user_id' in session:
        return redirect('/books')
    
    Review.delete_review({"id": review_id})
    return redirect('/books')
        

@app.route('/books/<int:book_id>/delete')
def delete_book(book_id):
    if not 'user_id' in session:
        return redirect('/books')

    Book.delete_book({ "id": book_id })
    return redirect('/books')