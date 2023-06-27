from django.urls import path
from . import views
from .views import ObtainTokenPairWithColorView, CustomUserCreate, HelloWorldView, LogoutAndBlacklistRefreshTokenForUserView
from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
    path('user/create', CustomUserCreate.as_view(), name='create_user'),
    path('home/', views.HomeView.as_view(), name ='home'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),
    path('token/', 
          jwt_views.TokenObtainPairView.as_view(), 
          name ='token_obtain_pair'),
    path('token/refresh/', 
          jwt_views.TokenRefreshView.as_view(), 
          name ='token_refresh'),
]