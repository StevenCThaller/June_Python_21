from belt_app import app
from belt_app.controllers import users, books

if __name__ == "__main__":
    app.run(debug=True)