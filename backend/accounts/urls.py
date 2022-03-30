from django.urls import path
from .views import Register
from .views import Login
from .views import User, Logout
urlpatterns=[
    path('register', Register.as_view()),
    path('login', Login.as_view()),
    path('user', User.as_view()),
    path('logout', Logout.as_view())
]