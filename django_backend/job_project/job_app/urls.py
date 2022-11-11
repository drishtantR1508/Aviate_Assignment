from rest_framework import routers
from .api import ApplicationViewset,ApplicationAPIView
from django.urls import path
# router = routers.DefaultRouter()
# router.register('api/applications', ApplicationViewset, 'applications')

# urlpatterns = router.urls
urlpatterns = [
    path('api/applications/<int:pk>',ApplicationAPIView.as_view()),
    path('api/applications/',ApplicationAPIView.as_view()),
    
]