from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Application(models.Model):
    candidate = models.CharField(max_length=100,blank=True)
    job_type = models.CharField(max_length=50,blank=True)
    status = models.CharField(max_length=50,default="Applied")
    message = models.CharField(max_length = 2000,blank=True)
    contact = models.IntegerField(blank = True)
    email = models.EmailField(max_length=254, unique=True,blank=True)
    skills = models.CharField(max_length=255, blank = True)
    resume = models.FileField(blank=True)
    address = models.CharField(max_length=500, blank = True)

    