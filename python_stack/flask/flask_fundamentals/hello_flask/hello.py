from flask import Flask, render_template



app = Flask(__name__)    
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response
@app.route('/success')
def success():
    return "success"
@app.route('/hello/<name>')
def hello(name):
    print (name)
    return "Hello, " + name
@app.route('/hello/<name>')
def hello(name):
    print (name)
    return "Hello, " + name

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True) 