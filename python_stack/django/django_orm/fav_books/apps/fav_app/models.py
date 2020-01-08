from __future__ import unicode_literals
from datetime import datetime
from django.db import models
from apps.login_app.models import User

class BookManager(models.Manager):
    def book_validator(self,postData):
        errors = {}
        if len(postData['title']) < 1:
            errors["title"] = "Title is required"
        if len(postData['description']) < 5:
            errors["description"] = "Description should be at least 5 characters"
        return errors

class Book(models.Model):
    title = models.CharField(max_length = 128)
    desc = models.TextField()
    uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="books_uploaded")
    users_who_like = models.ManyToManyField(User, related_name="liked_books")
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()
    def __repr__(self):
        return f"<Book object: ({self.title})>"