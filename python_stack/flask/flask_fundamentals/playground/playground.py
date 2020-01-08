from flask import Flask, render_template



app = Flask(__name__)    
@app.route('/play')          # The "@" decorator associates this route with the function immediately following
def hello_box():
    times = 3  
    color =0
    return render_template('index.html',num_times=int(times),box_color = color)  # Return the string 'Hello World!' as a response

@app.route('/play/<times>')          # The "@" decorator associates this route with the function immediately following
def hello_boxes(times):
    color = 0
    return render_template('index.html',num_times=int(times),box_color = color)  # Return the string 'Hello World!' as a response

@app.route('/play/<times>/<color>')          # The "@" decorator associates this route with the function immediately following
def hello_(times,color):

    return render_template('index.html',num_times=int(times),box_color = color)  # Return the string 'Hello World!' as a response


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True) 