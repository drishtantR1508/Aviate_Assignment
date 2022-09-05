from rest_framework import routers
from .api import ApplicationViewset

router = routers.DefaultRouter()
router.register('api/applications', ApplicationViewset, 'applications')

urlpatterns = router.urls