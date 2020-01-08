from django.urls import path
from . import views
                    
urlpatterns = [
    path('', views.root),
    path('shows/new/', views.new_show_form),
    path('shows/create', views.create_show),
    path('shows/<id>', views.show_details),
    path('shows/', views.index),
    path('shows/<id>/edit', views.edit_show),
    path('shows/<id>/update', views.update_show),
    path('shows/<id>/destroy', views.delete_show),

]