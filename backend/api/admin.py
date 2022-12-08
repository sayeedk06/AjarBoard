from django.contrib import admin
from .models import customUserModel, dashboardModel, dataModel, chartModel
# Register your models here.
admin.site.register(customUserModel)
admin.site.register(dataModel)
admin.site.register(dashboardModel)
admin.site.register(chartModel)