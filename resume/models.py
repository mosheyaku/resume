from django.db import models

# Create your models here.
from django.db import models

class About(models.Model):
    title = models.CharField(max_length=200, default="About Me")
    content = models.TextField()

    def __str__(self):
        return self.title

class SkillCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Skill(models.Model):
    name = models.CharField(max_length=100)
    image_url = models.URLField(blank=True, null=True)
    category = models.ForeignKey(
        SkillCategory,
        on_delete=models.CASCADE,
        related_name='skills',
        null=True,
        blank=True,
        default=None
    )
    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title


class ContactInfo(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    address = models.CharField(max_length=255, blank=True)
    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    def __str__(self):
        return "Contact Info"
