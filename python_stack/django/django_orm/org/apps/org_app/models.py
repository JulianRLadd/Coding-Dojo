from __future__ import unicode_literals
from datetime import datetime
from django.db import models
from apps.login_app.models import User
from django.db.models import Count

class GroupManager(models.Manager):
    def group_validator(self,postData):
        errors = {}
        if len(postData["name"]) < 1:
            errors["name"] = "Name is required"
        if len(postData['name']) > 0 and len(postData['name'])<5:
            errors["name"] = "Name should be more than 5 characters"
        if len(postData['description']) < 10:
            errors["description"] = "Description should be at least 10 characters"
        return errors

class Group(models.Model):
    title = models.CharField(max_length = 128)
    desc = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="groups_created")
    users_who_joined = models.ManyToManyField(User, related_name="joined_groups")
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = GroupManager()
    def __repr__(self):
        return f"<Group object: ({self.title})>"