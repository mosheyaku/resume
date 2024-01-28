import os

from django.http import HttpResponse
from django.shortcuts import render
from django.conf import settings
from django.views.generic import ListView


# Create your views here.

def start_page(request):
    return render(request, "resume/index.html")


def my_skills(request):
    return render(request, "resume/my-skills.html")


def my_projects(request):
    return render(request, "resume/my-projects.html")


def contact_me(request):
    return render(request, "resume/contact-me.html")


def download_resume(request, file_path):
    file_path = os.path.join(settings.MEDIA_ROOT, file_path)

    with open(file_path, 'rb') as file:
        response = HttpResponse(file.read(), content_type='application/octet-stream')
        filename = os.path.basename(file_path)
        response['Content-Disposition'] = f'attachment; filename="{filename}"'
        return response
