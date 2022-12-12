from rest_framework import serializers
from .models import dashboardModel

class dashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = dashboardModel
        fields = ['id', 'user_id', 'created', 'last_edited', 'dash_type']

class fileuploadSerializer(serializers.Serializer):
    file_type = serializers.CharField(max_length=10)
    file = serializers.FileField(allow_empty_file=False)