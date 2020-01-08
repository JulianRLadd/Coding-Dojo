from flask import Flask, render_template



app = Flask(__name__)    
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():


    return render_template('index.html', phrase = "hello", times=5)  # Return the string 'Hello World!' as a response

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True) 