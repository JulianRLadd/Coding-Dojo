from flask import Flask, render_template



app = Flask(__name__)    
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def checkers():
    rows=8
    columns = 8
    return render_template('index.html',row_num=int(rows),column_num=int(columns))  # Return the string 'Hello World!' as a repsonse

@app.route('/<rows>')  
def chess(rows):
    columns = 8
    return render_template('index.html',row_num=int(rows),column_num=int(columns))  # Return the string 'Hello World!' as a repsonse

@app.route('/<rows>/<columns>')  
def chess_checkers(rows,columns):

    return render_template('index.html',row_num=int(rows),column_num=int(columns))  # Return the string 'Hello World!' as a repsonse

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True) 