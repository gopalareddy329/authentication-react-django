from django.urls import path
from .import views
urlpatterns = [
    path('auth/', views.login_view),
    path('createuser/', views.createUser),
    path('logout/', views.logout_user),
 
]