from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from uuid import uuid4
# Create your models here.

class customUserModel(AbstractUser):
    user_id = models.UUIDField(default=uuid4, editable=False, primary_key=True)


class dashboardModel(models.Model):
    DASH_TYPES = [
        ('DR', 'Draft'),
        ('PB', 'Published'),
        
    ]    
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user_id = models.ForeignKey(customUserModel, on_delete=models.CASCADE)
    created = models.DateTimeField(default=timezone.now)
    last_edited = models.DateTimeField()
    dash_type = models.CharField(max_length=2, choices=DASH_TYPES, default ='DR' ,help_text='Specify whether the dashboard is a draft or ready to be published')

class dataModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    data_user_id = models.ForeignKey(customUserModel, on_delete=models.CASCADE)
    csv_data = models.JSONField()

class chartModel(models.Model):
    CHART_TYPES = [
        ('BC', 'Bar Chart'),
        ('LC', 'Line Chart'),
        ('PC', 'Pie Chart'),
        ('TC', 'Table Chart'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid4)
    dash_id = models.ForeignKey(dashboardModel, on_delete=models.CASCADE)
    created = models.DateTimeField(default=timezone.now)
    last_edited = models.DateTimeField()
    chart_type = models.CharField(max_length=50) 
    assoc_data = models.ForeignKey(dataModel, on_delete=models.SET_NULL, null=True)
#     # position_x = models.IntegerField()
#     # position_y = models.IntegerField()





