from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import About, Skill, Project, ContactInfo, SkillCategory, Education

admin.site.register(About)
admin.site.register(Education)
admin.site.register(Skill)
admin.site.register(SkillCategory)
admin.site.register(Project)
admin.site.register(ContactInfo)
