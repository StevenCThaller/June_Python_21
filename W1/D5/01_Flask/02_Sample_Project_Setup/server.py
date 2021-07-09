from flask import Flask, render_template
app = Flask(__name__) 

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/mycoolstudents')
def dont_ddos():
    return "Please I need this job"

@app.route('/name/<name>')
def say_name(name):
    return f"My name is {name}"

@app.route('/user/<name>/<age>')
def print_user_info(name, age):
    return f"Hello {name}, you are {age} years old."


if __name__ == "__main__":
    app.run(debug=True)