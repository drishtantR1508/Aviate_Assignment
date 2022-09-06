from rest_framework import routers
from .api import ApplicationViewset
from django.urls import path
router = routers.DefaultRouter()
router.register('api/applications', ApplicationViewset, 'applications')

urlpatterns = router.urls