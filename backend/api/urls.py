from django.urls import path
from .views import dashboardAPIView, dashboardUpdateAPIView

urlpatterns = [
    path('dashboard/', dashboardAPIView.as_view()),
    path('dashboard/update/', dashboardUpdateAPIView.as_view())
]