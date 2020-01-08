from django.shortcuts import render,redirect
from django.utils.crypto import get_random_string

def index(request):
    if 'counter' not in request.session:
        request.session['counter']=1
    else:
        request.session['counter']= request.session['counter']+1

    context = {
        "random": get_random_string(length=12),
        "counter": request.session['counter'],
    }
    return render(request,'random_word_app/index.html',context)

def refresh(request):
    request.session['counter']=0
    return redirect('/')
