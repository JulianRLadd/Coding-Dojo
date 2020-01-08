from django.urls import path
from . import views
                    
urlpatterns = [
    path('', views.groups),
    path('addGroup/', views.add_group),
    path('<int:id>/', views.group_details),
    path('<int:id>/leave/', views.leave_group),
    path('<int:id>/join/', views.join_group),
    path('<int:id>/delete/', views.delete),
]
