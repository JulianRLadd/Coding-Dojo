from flask import Flask, render_template, redirect, request, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def index():

    if 'counter' not in session:
        session['counter'] = 0
    else:
        session['counter'] += 1

    return render_template('index.html', counter = session['counter'])

@app.route('/add', methods=['POST'])
def add():
    session['counter'] += 1
    return redirect('/')

@app.route('/destroy_session', methods=['POST'])
def reset():
    session.pop('counter')
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)