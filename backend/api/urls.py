from django.urls import path
from .import views
urlpatterns = [
    path('auth/', views.login_view),
    path('createuser/', views.createUser),
    path('getuserdetails/<str:pk>/',views.getUserDetails),
    path('updateuser/',views.updateUser),

 
]