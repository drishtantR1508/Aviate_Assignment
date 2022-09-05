from rest_framework import viewsets,permissions
from .serializers import ApplicationSerializer
from .models import Application

class ApplicationViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ApplicationSerializer
    queryset = Application.objects.all().order_by()