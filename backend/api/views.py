from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import dashboardModel
from .serializers import dashboardSerializer, fileuploadSerializer
import pandas as pd
# Create your views here.

class dashboardAPIView(generics.ListCreateAPIView):
    queryset = dashboardModel.objects.all()
    serializer_class = dashboardSerializer

class dashboardUpdateAPIView(generics.UpdateAPIView):
    serializer_class = dashboardSerializer


class uploadDataAPIView(generics.GenericAPIView):
    serializer_class = fileuploadSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        file = serializer.validated_data['file'] or None
        file_type = serializer.validated_data['file_type']
        print(request.data)
        if file is not None:
            if file_type == 'csv':
                reader = pd.read_csv(file)
                json_convert = reader.to_json()
            elif file_type == 'xlsx':
                pass
            else:
                json_convert = 'Unknown file format. Please use either .csv or .xlsx'
            return Response({'status': 'success', 
                            'data': json_convert}, status=status.HTTP_201_CREATED)
        return Response({'status': 'Failed'}, status=status.HTTP_400_BAD_REQUEST)
    
