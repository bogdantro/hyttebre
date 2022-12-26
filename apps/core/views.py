import warnings
from urllib import *
from django.shortcuts import *

from django.shortcuts import *
from django.http import *
from django.core.mail import *
from django.contrib.auth import *
from django.template.loader import *
from textwrap import *
from django.views.decorators.csrf import *
from django.db.models import * 
from django.contrib.auth.decorators import *


from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import Order
from django.template import RequestContext
from base64 import b64encode
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from textwrap import dedent



# Home
def home(request):
    # Order
    if request.method == 'POST' and 'order':
        form = Order(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('/suksee/')
    else:
        form = Order()

    return render(request, 'core/home.html', {'form': form})




    # Pages
def about(request):
    return render(request, 'pages/about.html')
    
def contact(request):
    if request.method=='POST' and 'contact' in request.POST:
        navn = request.POST.get('navn')
        email = request.POST.get('email')
        message = request.POST.get('message')

        data = {
            'navn': navn,
            'email': email,
            'message': message,
        }
        message = dedent('''
        Fra: {}

        Navn: {}

        Beskjed: {}
        ''').format(data['email'], data['navn'], data['message'], )
        send_mail('Epost fra portfolio', message, '', ['sabertoothtri@gmail.com'])
        return redirect('/suksee/')
    return render(request, 'pages/contact.html')  



def order_success(request):
    return render(request, 'pages/success.html')