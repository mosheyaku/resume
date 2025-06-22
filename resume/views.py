import os

from django.http import HttpResponse
from django.shortcuts import render
from django.conf import settings
from django.views.generic import ListView

from resume.models import About, Skill, Project, ContactInfo


# Create your views here.

def index(request):
    context = {
        "about": About.objects.first(),
        "skills": Skill.objects.all(),
        "projects": Project.objects.all(),
        "contact": ContactInfo.objects.first()
    }
    return render(request, "resume/index.html", context)


def download_resume(request, file_path):
    file_path = os.path.join(settings.MEDIA_ROOT, file_path)

    with open(file_path, 'rb') as file:
        response = HttpResponse(file.read(), content_type='application/octet-stream')
        filename = os.path.basename(file_path)
        response['Content-Disposition'] = f'attachment; filename="{filename}"'
        return response
