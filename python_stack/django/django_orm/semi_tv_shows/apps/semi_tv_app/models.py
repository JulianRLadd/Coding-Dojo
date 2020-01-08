from __future__ import unicode_literals
from django.db import models

class ShowManager(models.Manager):
    def basic_validator(self,postData):
        errors = {}
        if len(postData['title']) < 2:
            errors["title"] = "Title name should be at least 2 characters"
        x = Show.objects.filter(title = postData['title'])
        if len(x) <0:
            errors["title"] = "Titles cannot be duplicated!!!"
        if len(postData['network']) < 3:
            errors["network"] = "Network name should be at least 3 characters"
        if len(postData['description']) < 10 and len(postData['description'])>0:
            errors["description"] = "Show description should be at least 10 characters"
        if len(postData['release_date']) < 8:
            errors["release_date"] = "Release date must be completed"
        return errors

class Show(models.Model):
    title = models.CharField(max_length=45)
    network = models.CharField(max_length=45)
    desc = models.TextField()
    release_date = models.DateTimeField(null=True,blank=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()
    def __repr__(self):
        return f"<Show object: {self.title} ({self.network})>"

