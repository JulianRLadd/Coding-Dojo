from django.shortcuts import render,redirect, HttpResponse
from .models import User,Group
from datetime import datetime
from django.db.models import Count
from django.contrib import messages
import bcrypt

# number = User.objects.filter(publisher__name='BaloneyPress').count()


def groups(request):
    if 'user_id' in request.session:
        user = User.objects.get(id=request.session['user_id'])
        group = Group.objects.all()
        context={
            "user": user,
            "all_groups": group,
            "owned_groups": user.groups_created.all(),
        }
        return render(request,'org_app/groups.html',context)
    else:
        return redirect('/')


def add_group(request):
    if 'user_id' in request.session:
        errors = Group.objects.group_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request,value)
            return redirect('/groups')
        elif request.method == "POST":
            title = request.POST["name"]
            description = request.POST["description"]
            user = User.objects.get(id=request.session['user_id'])
            Group.objects.create(title=title, desc=description,created_by=user)
            user.joined_groups.add(Group.objects.last())
        return redirect('/groups')
    else:
        return redirect('/')

def group_details(request,id):
    if 'user_id' in request.session:
        user= User.objects.get(id=request.session['user_id'])
        group=Group.objects.get(id=id)
        context={
            "group": group,
            "created_groups": user.groups_created.all(),
            "joined_by": group.users_who_joined.all(),
            "user_id": request.session['user_id'],
            "joined_groups": user.joined_groups.all(),
        }
        return render(request,'org_app/group_details.html',context)
    else:
        return redirect('/')

def leave_group(request,id):
    group=Group.objects.get(id=id)
    user=User.objects.get(id=request.session['user_id'])
    user.joined_groups.remove(group)
    user.save()
    return redirect(f'/groups/{id}')

def join_group(request,id):
    group=Group.objects.get(id=id)
    user=User.objects.get(id=request.session['user_id'])
    user.joined_groups.add(group)
    user.save()
    return redirect(f'/groups/{id}')

def delete(request,id):
    group=Group.objects.get(id=id)
    user=User.objects.get(id=request.session['user_id'])
    if group.created_by.id == user.id:
        group.delete()
        return redirect('/groups')
    else:
        return redirect('/')
