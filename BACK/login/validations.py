from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
UserModel = get_user_model()

def custom_validation(data):
    user_name = data['user_name'].strip()
    user_pass = data['user_pass'].strip()
    if not user_name or UserModel.objects.filter(user_name=user_name).exists():
        raise ValidationError('Escoge otro nombre de usuario.')
    if not user_pass or len(user_pass)<8:
        raise ValidationError('Escoge otra contraseña, mínimo 8 carácteres.')
    return data

def validate_user_name(data):
    user_name = data['user_name'].strip()
    if not user_name:
        raise ValidationError('Escoge otro nombre de usuario.')
    return True

def validate_user_pass(data):
    user_pass = data['user_pass'].strip()
    if not user_pass:
        raise ValidationError('Se necesita una contraseña.')
    return True