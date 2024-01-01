from rest_framework import serializers
from django.contrib.auth.models import User


class UsersDataSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username','id','email']

        def __str__(self):
            return self.id