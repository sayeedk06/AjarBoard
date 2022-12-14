from django.urls import path
from .views import dashboardAPIView, dashboardUpdateAPIView, uploadDataAPIView, getDataAPIView

urlpatterns = [
    path('dashboard/', dashboardAPIView.as_view()),
    path('dashboard/update/', dashboardUpdateAPIView.as_view()),
    path('upload_data/', uploadDataAPIView.as_view()),
    path('get_data/', getDataAPIView.as_view())
]