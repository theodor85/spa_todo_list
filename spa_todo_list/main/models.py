from django.db import models


class Task(models.Model):
    text = models.CharField(max_length=250)

    def __str__(self):
        return 'Задача № ' + str(self.id) + ' ' + self.text