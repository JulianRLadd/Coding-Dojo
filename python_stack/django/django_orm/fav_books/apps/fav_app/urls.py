from django.urls import path
from . import views
                    
urlpatterns = [
    path('', views.books),
    path('addBook/', views.add_book),
    path('<int:id>/', views.book_details),
    path('<int:id>/update_book/', views.update_book),
    path('<int:id>/unfavorite/', views.unfavorite),
    path('<int:id>/favorite/', views.favorite),
    path('<int:id>/delete/', views.delete),
    path('bests/', views.favorites),
]