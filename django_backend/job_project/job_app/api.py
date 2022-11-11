from rest_framework import viewsets,permissions
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http import HttpResponse
from .serializers import ApplicationSerializer
from .models import Application
from django.core.files import File
from job_project.settings import BASE_DIR, MEDIA_ROOT
from django.http.response import Http404
from rest_framework.response import Response

class ApplicationAPIView(APIView):
    
    def get_applicant(self,pk):
        return Application.objects.get(pk=pk)
        

    def get(self,request,pk=None,format=None):
        if pk:
            data = self.get_applicant(pk=pk)
            serializer = ApplicationSerializer(data)
            return Response(serializer.data)
        else:
            data = Application.objects.all()
            serializer = ApplicationSerializer(data, many=True)
            return Response(serializer.data)
        
    

    def post(self,request,format=None):
        serializer = ApplicationSerializer(data=request.data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        response = Response()
        response.data = {
            'message': 'Applicant Created Successfully',
            'data': serializer.data
        }
        return response
        



    def put(self,request,pk,format=None):
        applicant = Application.objects.get(pk=pk)
        serializer = ApplicationSerializer(instance = applicant,data=request.data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        response = Response()
        response.data = {
            'message': 'Applicant updated Successfully',
            'data': serializer.data
        }
        return response



    def delete(self, request,pk,format=None):
        Application.objects.get(pk=pk).delete()
        return Response({
            'message': 'Deleted Successfully'
        })

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