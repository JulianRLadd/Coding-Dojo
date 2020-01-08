from django.shortcuts import render,redirect
from .models import Book, Author

# Create your views here.
def index(request):
    if 'iD' not in request.session:
        request.session['iD']=0
    context= {
        "all_the_books": Book.objects.all()
    }

    return render(request,"books_authors_app/index.html",context)

def author_index(request):
    if 'author_id' not in request.session:
        request.session['author_id']=0
    context= {
        "all_the_authors": Author.objects.all()
    }

    return render(request,"books_authors_app/author_index.html",context)

def add_book(request):
    if request.method == "POST":
        title_value = request.POST["book_title"]
        desc_value = request.POST["book_desc"]
        Book.objects.create(title= title_value,desc=desc_value)

    return redirect('/')

def add_new_author(request):
    if request.method == "POST":
        firstName = request.POST["first_name"]
        lastName = request.POST["last_name"]
        authorNotes = request.POST["notes"]
        Author.objects.create(first_name= firstName,last_name=lastName,notes=authorNotes)

    return redirect('/authors')

def details(request,book_ID):
    request.session['iD'] = book_ID
    this_book = Book.objects.get(id= int(book_ID))
    authors = Author.objects.exclude(id__in=this_book.authors.all())
    context= {
        "book": this_book,
        "books_authors": this_book.authors.all(),
        "all_the_books": Book.objects.all(),
        "available_authors": authors,
    }
    
    return render(request,"books_authors_app/book_details.html",context)

def author_details(request,author_ID):
    request.session['author_id'] = author_ID
    this_author = Author.objects.get(id= int(author_ID))
    books = Book.objects.exclude(id__in=this_author.books.all())
    context= {
        "author": this_author,
        "authors_books": this_author.books.all(),
        "all_the_authors": Author.objects.all(),
        "available_books": books,
    }
    
    return render(request,"books_authors_app/author_details.html",context)

def add_author(request):
    if request.method == "POST":
        this_author = request.POST["author"]
        this_book = Book.objects.get(id=request.session['iD'])
        this_book.authors.add(Author.objects.get(id=this_author))
        id = request.POST['id']
    return redirect('/book/'+id)

def add_book_to_author(request):
    if request.method == "POST":
        this_book = request.POST["book"]
        this_author = Author.objects.get(id=request.session['author_id'])
        this_author.books.add(Book.objects.get(id=this_book))
        id = request.POST['id']
    return redirect('/authors/'+id)