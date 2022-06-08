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
from .models import Drugs, Categories, MedicineStock, SubCategory, Orders, Order_item, Sales
from .serializers import DrugsSerializer, CategoriesSerializer, SalesSerializer, SubCategoriesSerializer, StockSerializer, OrdersSerializer, OrderItemSerializer
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

#         query = ''' 
# SELECT pos_order_item.id, pos_order_item.drug_id_id, COUNT(drug_id_id) AS value_occurrence, pos_orders.created_at FROM pos_order_item inner join pos_orders on pos_orders.id= pos_order_item.order_id_id GROUP BY drug_id_id ORDER BY value_occurrence DESC '''
      
        queryset = Sales.objects.all()
#         with connection.cursor() as cursor:
#             cursor.execute(query)
#             row = cursor.fetchall()
#             print(json.dumps(row))

#         # data = Order_item.objects.raw(query)
#         # result = cursor.fetchall()
#         # data= serializers.serialize('json', queryset)
      
#         # print(data)
#         # serializer = OrderItemSerializer(queryset, many=True)
        serializer = SalesSerializer(queryset, many=True)
    
        return Response(serializer.data)                             
