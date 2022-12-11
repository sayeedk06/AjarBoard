from rest_framework import serializers
from .models import dashboardModel

class dashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = dashboardModel
        fields = ['id', 'user_id', 'created', 'last_edited', 'dash_type']