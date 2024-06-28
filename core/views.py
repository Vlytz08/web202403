from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

def home(request):
    return render(request, 'core/index.html')
def user(request):
    return render(request, 'core/user.html')
def registro(request):
    return render(request, 'core/registro.html')
def spiderman(request):
    return render(request, 'core/spiderman.html')
def producto(request):
    return render(request, 'core/producto.html')
def soon(request):
    return render(request, 'core/soon.html')
def carrito(request):
    return render(request, 'core/carrito.html')


def iniciar(request):
    return render(request, 'core/user.html')

def logearse(request):
    username = request.POST["usuario"]
    password = request.POST["clave"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return redirect(to="home")
    else:
        return redirect(to="login")