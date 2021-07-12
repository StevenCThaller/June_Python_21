from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)

app.secret_key = "input some secret key here"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/heroes', methods=['POST'])
def create_hero():
    session['name'] = request.form['name']
    session['alter_ego'] = request.form['alter_ego']
    session['catch_phrase'] = request.form['catch_phrase']
    return redirect('/success')

@app.route('/success')
def success():
    if 'name' not in session:
        return redirect('/')
    return render_template('success.html')

@app.route('/logout')
def logout():
    del session['name']
    del session['alter_ego']
    del session['catch_phrase']

    # alternatively

    # session.clear() # this will clear EVERYTHING
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)