from rest_framework import serializers
from .models import dashboardModel, dataModel

class dashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = dashboardModel
        fields = ['name','dash_type']

class fileuploadSerializer(serializers.Serializer):
    file_type = serializers.CharField(max_length=10)
    file = serializers.FileField(allow_empty_file=False)

class dataSerializer(serializers.ModelSerializer):
    class Meta:
        model = dataModel
        fields = ['data_user_id', 'csv_data']
