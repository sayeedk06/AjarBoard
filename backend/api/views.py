from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics
from .models import dashboardModel
from .serializers import dashboardSerializer
# Create your views here.

class dashboardAPIView(generics.ListCreateAPIView):
    queryset = dashboardModel.objects.all()
    serializer_class = dashboardSerializer

class dashboardUpdateAPIView(generics.UpdateAPIView):
    serializer_class = dashboardSerializer