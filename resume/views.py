from django.http import HttpResponse
from django.shortcuts import render
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

