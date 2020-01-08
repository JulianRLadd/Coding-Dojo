from django.shortcuts import render,redirect,HttpResponse
from .models import Show
from datetime import datetime
from django.contrib import messages


# Create your views here.
def index(request):
    print(request.method)


    if 'id' not in request.session:
        request.session['id']=0
    context= {
        "all_the_shows": Show.objects.all()
    }
    return render(request,"semi_tv_app/index.html",context)


def new_show_form(request):

    return render(request,'semi_tv_app/new_show.html')

def create_show(request):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request,value)
        return redirect('/shows/new/')
    elif request.method == "POST":
        show_title = request.POST["title"]
        network_name = request.POST["network"]
        release_date = request.POST["release_date"]
        description = request.POST["description"]
        Show.objects.create(title=show_title,network=network_name,desc=description,release_date=release_date)
    id= Show.objects.last().id
    
    return redirect('/shows/'+str(id))
    

def show_details(request,id):
    context = {
        "show" :Show.objects.get(id=id)
    }
    return render(request,'semi_tv_app/show_details.html',context)

def edit_show(request,id):

    this_show = Show.objects.get(id=id)
    context = {
        "show": this_show,
        "stringDate": this_show.release_date.strftime('%Y-%m-%d'),
    }
    return render(request,'semi_tv_app/edit.html',context)

def update_show(request,id):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request,value)
        return redirect(f'/shows/{id}/edit')
    elif request.method =="POST":
        show = Show.objects.get(id=id)
        show.title = request.POST["title"]
        show.network = request.POST["network"]
        show.desc = request.POST["description"]
        show.release_date = request.POST["release_date"]
        show.save()
        messages.success(request,"Show successfully updated")
    return redirect('/shows/'+str(id))

def delete_show(request,id):
    if request.method =="GET":
        Show.objects.get(id=id).delete()
    return redirect('/shows')

def root(request):
    return redirect('/shows')