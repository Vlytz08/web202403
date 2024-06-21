from django.shortcuts import render
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