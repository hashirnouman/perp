from ast import Raise, Return
from gc import get_objects
from itertools import product
import json
from logging import raiseExceptions
from re import sub
from telnetlib import STATUS
from urllib import response
from xmlrpc.client import ResponseError
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from .models import Drugs, Categories, MedicineStock, SubCategory
from .serializers import DrugsSerializer, CategoriesSerializer, SubCategoriesSerializer, StockSerializer
# Create your views here.


@api_view(['GET', 'POST'])
def Category(request):
    if request.method == 'GET':
        categories = Categories.objects.all()
        serializer = CategoriesSerializer(categories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategoriesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


@api_view(['GET', 'POST'])
def SubCategories(request):
    if request.method == 'GET':
        sub_categories = SubCategory.objects.all()
        serializer = SubCategoriesSerializer(sub_categories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SubCategoriesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
    return Response()


@api_view(['GET', 'POST'])
def drug(request):
    if request.method == 'GET':
        queryset = Drugs.objects.all()
        serializer = DrugsSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DrugsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


@api_view(['PUT', 'DELETE'])
def singleDrug(request, id):
    drug = Drugs.objects.get(pk=id)
    print(drug.drug_name)
    if request.method == 'DELETE':
        drug.delete()
        return JsonResponse({'message': 'Tutorial was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

    if request.method == 'PUT':

        serializer = DrugsSerializer(drug, data=request.data)
        if serializer.is_valid():
            serializer.save()

    return Response(serializer.data)


@api_view(['GET', 'POST'])
def Stock(request):
    if request.method == 'GET':
        queryset = MedicineStock.objects.all()
        serializer = StockSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = StockSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
    return Response(serializer.data)
