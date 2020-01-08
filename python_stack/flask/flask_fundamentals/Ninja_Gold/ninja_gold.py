from flask import Flask, render_template, request, redirect, session
from time import gmtime, strftime
import random

app = Flask(__name__)   
app.secret_key = 'keep it secret, keep it safe' 
@app.route('/')          
def index():
    if 'wallet' not in session:
        session['wallet']=0
    if 'earnings' not in session:
        session['earnings']=0
    if 'activities' not in session:
        session['activities'] = []

    context = {
        "wallet": session['wallet'],
        "earnings": session['earnings'],
        "activities": session['activities'],
        "time": strftime("%m-%d-%Y %H:%M %p", gmtime()),
    }
    return render_template('index.html')


@app.route('/process_money',methods=['POST'])  
def process():
    
    earnFarm = random.randint(10,20)
    earnCasino = random.randint(-50,50)
    earnCave = random.randint(5,10)
    earnHouse = random.randint(2,5)
    
    session['wallet']+=earnFarm
    
    request.form
    if (methods==['POST']):
        if request.POST["building"] == "farm":
            request.session['wallet'] = request.session['wallet']+ earnFarm
            request.session['earnings']=earnFarm
            request.session['activities'].append(earnFarm)
        if request.POST["building"] == "house":
            request.session['wallet'] = request.session['wallet']+ earnHouse
            request.session['earnings']=earnHouse
            request.session['activities'].append(earnHouse)
        if request.POST["building"] == "cave":
            request.session['wallet'] = request.session['wallet']+ earnCave
            request.session['earnings']=earnCave
            request.session['activities'].append(earnCave)
        if request.POST["building"] == "casino":
            request.session['wallet'] = request.session['wallet']+ earnCasino
            request.session['earnings']=earnCasino
            request.session['activities'].append(earnCasino)

    return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)    
