from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, user_name, user_pass=None):
        if not user_name:
            raise ValueError('Se necesita un nombre de usuario.')
        if not user_pass:
            raise ValueError('Se necesita una contraseña.')
        user = self.model(user_name = user_name)
        user.set_password(user_pass)
        user.save()
        return user

class User(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=255, unique=True)
    USERNAME_FIELD = 'user_name'
    objects = UserManager()
    class Meta:
        managed = True
        db_table = 'login_user'
    def __str__(self):
        return self.user_name