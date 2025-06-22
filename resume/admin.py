from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import About, Skill, Project, ContactInfo

admin.site.register(About)
admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(ContactInfo)
