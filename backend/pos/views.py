from ast import Raise, Return
from dataclasses import fields
from gc import get_objects
from itertools import product
import json
from logging import raiseExceptions
from multiprocessing import managers
from re import sub
from telnetlib import STATUS
from unittest import result
from urllib import response
from coreapi import Object
from django.db import connection
from xmlrpc.client import ResponseError
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core import serializers
from rest_framework.decorators import api_view
from .models import Drugs, Categories, MedicineStock,  Orders, Order_item, Sales
from .serializers import DrugsSerializer, CategoriesSerializer, SalesSerializer,StockSerializer, OrdersSerializer, OrderItemSerializer
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
    if request.method == 'DELETE':
        drug.delete()
        return JsonResponse({'message': 'Drug Deleted'}, status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = DrugsSerializer(drug, data=request.data)
        if serializer.is_valid():
            serializer.save()
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def Stock(request):
    if request.method == 'GET':
        queryset = MedicineStock.objects.all().order_by('-created_at')
        serializer = StockSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = StockSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def Order(request):
    if request.method == 'GET':
        queryset = Orders.objects.all()
        serializer = OrdersSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = OrdersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def Predict(request):
    if request.method == 'GET':
        queryset = Sales.objects.all()
        serializer = SalesSerializer(queryset, many=True)
        return Response(serializer.data)                             
