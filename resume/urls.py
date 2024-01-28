from django.urls import path
from . import views

urlpatterns = [
    path("", views.start_page, name="start_page"),
    path("my_skills/", views.my_skills, name="my_skills"),
    path("my_projects/", views.my_projects, name="my_projects"),
    path("contact_me/", views.contact_me, name="contact_me"),
    path('download/<path:file_path>/', views.download_resume, name='download_resume'),

]