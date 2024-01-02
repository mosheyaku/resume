from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import ListView

# Create your views here.

def start_page(request):
    return render(request, "resume/index.html")


