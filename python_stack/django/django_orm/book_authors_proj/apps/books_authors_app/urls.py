from django.urls import path
from . import views
                    
urlpatterns = [
    path('', views.index),
    path('addBook/',views.add_book),
    path('addAuthor/',views.add_author),
    path('book/<book_ID>',views.details),
    path('authors/<author_ID>',views.author_details),
    path('authors/', views.author_index),
    path('addNewAuthor/',views.add_new_author),
    path('addBookToAuthor/',views.add_book_to_author),

]