from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics, status, permissions
from rest_framework.response import Response

from .models import dashboardModel, dataModel
from .serializers import dashboardSerializer, fileuploadSerializer, dataSerializer
import pandas as pd
from uuid import uuid4
# Create your views here.

class dashboardAPIView(generics.ListCreateAPIView):
    queryset = dashboardModel.objects.all()
    serializer_class = dashboardSerializer

class dashboardUpdateAPIView(generics.UpdateAPIView):
    serializer_class = dashboardSerializer


class uploadDataAPIView(generics.GenericAPIView):
    serializer_class = fileuploadSerializer
    permission_classes = [permissions.IsAuthenticated]

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
                data_serializer = dataSerializer(
                    data={
                    'data_user_id': request.user.user_id, 
                    'csv_data': json_convert})

                if data_serializer.is_valid(raise_exception=True):
                    data_serializer.save()
                    return Response({
                        'Status': 'success', 'data': json_convert},
                         status=status.HTTP_201_CREATED)
                else:
                    json_convert = 'Error in uploaded CSV file' 
                    return Response({'status': 'Failed', 'data': json_convert },
                    status=status.HTTP_400_BAD_REQUEST)
                    
            elif file_type == 'xlsx':
                pass
            else:
                json_convert = 'Unknown file format. Please use either .csv or .xlsx'

            return Response({'status': 'success', 
                            'data': json_convert}, status=status.HTTP_201_CREATED)
        return Response({'status': 'Failed', 'data': 'No file was uploaded'},
                status=status.HTTP_400_BAD_REQUEST)
    

class getDataAPIView(generics.ListAPIView):
    queryset = dataModel.objects.all()
    serializer_class = dataSerializer
    permission_classes = [permissions.IsAuthenticated]