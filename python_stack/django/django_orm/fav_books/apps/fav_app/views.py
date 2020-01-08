from django.shortcuts import render,redirect, HttpResponse
from .models import User,Book
from datetime import datetime
from django.contrib import messages
import bcrypt

def books(request):
    if 'user_id' in request.session:
        user = User.objects.get(id=request.session['user_id'])
        context={
            "user": user,
            "all_books":Book.objects.all(),
            "fav_books": user.liked_books.all(),
        }
        return render(request,'fav_app/books.html',context)
    else:
        return redirect('/')


def add_book(request):
    if 'user_id' in request.session:
        errors = Book.objects.book_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request,value)
            return redirect('/books')
        elif request.method == "POST":
            title = request.POST["title"]
            description = request.POST["description"]
            user = User.objects.get(id=request.session['user_id'])
            Book.objects.create(title=title, desc=description,uploaded_by=user)
            user.liked_books.add(Book.objects.last())
        return redirect('/books')
    else:
        return redirect('/')


def favorites(request):
    if 'user_id' in request.session:
        user = User.objects.get(id=request.session['user_id'])
        context={
            "user": user,
            "fav_books": user.liked_books.all()
        }
        return render(request,'fav_app/bests.html',context)
    else:
        return redirect('/')

def book_details(request,id):
    if 'user_id' in request.session:
        user= User.objects.get(id=request.session['user_id'])
        book=Book.objects.get(id=id)
        context={
            "book": book,
            "owned_books": user.books_uploaded.all(),
            "favored_by": book.users_who_like.all(),
            "user_id": request.session['user_id'],
            "fav_books": user.liked_books.all(),
        }
        return render(request,'fav_app/book_details.html',context)
    else:
        return redirect('/')


def update_book(request,id):
    if 'user_id' in request.session:
        errors = Book.objects.book_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request,value)
            return redirect('/'+str(id))
        elif request.method =="POST":
            book = Book.objects.get(id=id)
            book.title = request.POST["title"]
            book.desc = request.POST["description"]
            book.save()
        return redirect(f'/books/{id}')
    else:
        return redirect('/')

def unfavorite(request,id):
    book=Book.objects.get(id=id)
    user=User.objects.get(id=request.session['user_id'])
    user.liked_books.remove(book)
    user.save()
    return redirect(f'/books/{id}')

def favorite(request,id):
    book=Book.objects.get(id=id)
    user=User.objects.get(id=request.session['user_id'])
    user.liked_books.add(book)
    user.save()
    return redirect(f'/books/{id}')

def delete(request,id):
    book=Book.objects.get(id=id)
    user=User.objects.get(id=request.session['user_id'])
    if book.uploaded_by.id == user.id:
        book.delete()
        return redirect('/books')
    else:
        return redirect('/')


