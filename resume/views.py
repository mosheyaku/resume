import os

from django.http import HttpResponse
from django.shortcuts import render
from django.conf import settings
from django.views.generic import ListView

from resume.models import About, Skill, Project, ContactInfo, SkillCategory, Education


# Create your views here.

def index(request):
    categories = SkillCategory.objects.prefetch_related('skills').all()
    education = Education.objects.all().order_by('-start_year')
    for edu in education:
        # Split main_courses string by lines and store as a list attribute
        edu.course_list = [line.strip() for line in edu.main_courses.splitlines() if line.strip()]

    context = {
        "about": About.objects.first(),
        "education": education,
        "skill_categories": categories,
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
