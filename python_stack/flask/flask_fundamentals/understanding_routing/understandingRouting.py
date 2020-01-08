from flask import Flask, render_template



app = Flask(__name__)    
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

@app.route('/dojo')
def dojo():
    return "Dojo!!"

@app.route('/say/<name>')
def say(name):
    return f"Hi, {name.capitalize()}"

@app.route('/repeat/<num>/<word>')
def repeat(num,word):
    num = int(num)
    return f"{word}"*num

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True) 