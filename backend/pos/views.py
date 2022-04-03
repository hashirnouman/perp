from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Drugs, Categories, SubCategory
from .serializers import DrugsSerializer, CategoriesSerializer, SubCategoriesSerializer, StockSerializer
# Create your views here.

@api_view(['POST'])
def addCategory(request):
    serializer = CategoriesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response()

@api_view(['GET'])
def getCategories(request):
    categories = Categories.objects.all()
    serializer = CategoriesSerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSubCategories(request):
    sub_categories = SubCategory.objects.all()
    serializer = SubCategoriesSerializer(sub_categories, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addDrug(request):
    serializer = DrugsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response()

@api_view(['POST'])
def addStock(request):
    serializer = StockSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print(serializer.data)
    return Response(serializer.data)
  