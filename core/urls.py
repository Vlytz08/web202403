from django.urls import path
from .views import *
from django.contrib.auth.views import LoginView
urlpatterns = [
    path('',home, name="home"),
 
    path('registro',registro, name="registro"),
    path('spiderman',spiderman, name="spiderman"),
    path('producto',producto, name="producto"),
    path('soon',soon, name="soon"),
    path('carrito',carrito, name="carrito"),
    # path('login',LoginView.as_view(template_name ='core/user.html'), name="login"),
    path('login',iniciar, name="login"),
    path('logearse',logearse, name="logearse"),
]
