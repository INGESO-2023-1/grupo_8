from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(user_name=clean_data['user_name'], user_pass=clean_data['user_pass'])
        ##user_obj.user_name = clean_data['user_name']
        user_obj.save()
        return user_obj

class UserLoginSerializer(serializers.Serializer):
    user_name = serializers.CharField()
    user_pass = serializers.CharField()
    def check_user(self, clean_data):
        user = authenticate(user_name = clean_data['user_name'],user_pass=clean_data['user_pass'], password=clean_data['password'])
        if not user:
            raise ValidationError('Usuario no encontrado.')
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['user_name']