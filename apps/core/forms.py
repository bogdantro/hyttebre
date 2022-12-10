from django.db.models import fields
from django import forms
from .models import Order

class Order(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(Order, self).__init__(*args, **kwargs)

    class Meta:
        model = Order
        fields = ('navn', 'epost', 'mobil_nummer', 'adresse', 'postnummer', 'telia', 'telenor', 'altibox', 'contact_by_phone', 'contact_by_email',)



