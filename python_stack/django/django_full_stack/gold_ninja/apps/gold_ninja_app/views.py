from django.shortcuts import render,redirect
from time import gmtime, strftime
import random


def index(request):
    if 'wallet' not in request.session:
        request.session['wallet']=0
    if 'earnings' not in request.session:
        request.session['earnings']=0
    if 'activities' not in request.session:
        request.session['activities'] = []

    context = {
        "wallet": request.session['wallet'],
        "earnings": request.session['earnings'],
        "activities": request.session['activities'],
        "time": strftime("%m-%d-%Y %H:%M %p", gmtime()),
    }
    return render(request,'gold_ninja_app/index.html',context)

def process(request):

    earnFarm = random.randint(10,20)
    earnCasino = random.randint(-50,50)
    earnCave = random.randint(5,10)
    earnHouse = random.randint(2,5)
    
    

    if request.method=="POST":
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

def refresh(request):
    request.session['wallet']=0
    request.session['earnings']=0
    request.session['activities']=[]
    return redirect('/')

