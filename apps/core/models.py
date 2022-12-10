from datetime import date
from django.db import models
from django.contrib.auth.models import User
from django.utils import tree


class Order(models.Model):
    # Step one
    adresse = models.CharField(blank=False, max_length=300)
    postnummer = models.IntegerField(blank=False, null=True)
    gatenummer = models.IntegerField(blank=False, null=True)
    # Step two
    telia = models.BooleanField(default=False)
    telenor = models.BooleanField(default=False)
    altibox = models.BooleanField(default=False)
    # Step three
    navn = models.CharField(max_length=100)
    epost = models.CharField(max_length=100)
    mobil_nummer = models.IntegerField(blank=False, null=False)
    # Step four
    contact_by_phone = models.BooleanField(blank=True)
    contact_by_email = models.BooleanField(blank=True)

    # For admin
    created_at = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)


    def __str__(self):
        return '%s' % self.adresse