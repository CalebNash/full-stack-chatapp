from django.conf import settings
from django.db import models

class Message(models.Model):
    message = models.CharField(max_length=225)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.content
