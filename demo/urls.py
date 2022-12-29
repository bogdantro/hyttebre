from django.urls import path
from apps.core.views import *
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('suksee/', order_success, name='order_success'),
    path('om-oss/', about, name='about'),
]
