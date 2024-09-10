from rest_framework import viewsets
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.decorators import api_view

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@api_view(['POST'])
def login_user(request):
    username = request.data['username']
    password = request.data['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        return Response({'message': 'Login successful'})
    return Response({'message': 'Invalid credentials'}, status=400)