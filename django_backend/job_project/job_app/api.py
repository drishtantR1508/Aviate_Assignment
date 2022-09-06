from rest_framework import viewsets,permissions
from rest_framework.decorators import api_view
from django.http import HttpResponse
from .serializers import ApplicationSerializer
from .models import Application
from django.core.files import File
from job_project.settings import BASE_DIR, MEDIA_ROOT

class ApplicationViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ApplicationSerializer
    queryset = Application.objects.all().order_by()


@api_view(['GET'])
def DownloadPDF(self,id):
    # id = request.param.id
    filename = Application.objects.get(id=id).resume.name
    print((filename))
    path_to_file = MEDIA_ROOT + '/'+filename
    print(path_to_file)
    f = open(path_to_file, 'rb')
    pdfFile = File(f)
    response = HttpResponse(pdfFile.read())
    response['Content-Disposition'] = 'attachment';
    return response