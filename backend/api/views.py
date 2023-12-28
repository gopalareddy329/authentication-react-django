from django.shortcuts import render
import json
from django.contrib.auth import authenticate,login,logout
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from .serializers import UsersDataSerializer
from django.contrib.auth import authenticate, login
# Create your views here.


@api_view(['POST'])
@csrf_exempt
def login_view(request):  # sourcery skip: use-named-expression
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return Response(UsersDataSerializer(user).data)
        else:
            return JsonResponse({'message': 'Login failed'}, status=401)

    return JsonResponse({'message': 'Invalid request method'}, status=400)

    
@api_view(['POST'])
def createUser(request):
    if request.method == 'POST':
        serializer = UsersDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'User created'})
        return Response(serializer.errors, status=401)


@api_view(['GET'])
def logout_user(request):
    logout(request)
    print("logout")
    return Response({"message":"Successfully"})

