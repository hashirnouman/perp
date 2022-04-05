from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Drugs, Categories, SubCategory, MedicineStock
from .serializers import DrugsSerializer, CategoriesSerializer, SubCategoriesSerializer, StockSerializer
# Create your views here.

@api_view(['GET','POST'])
def Category(request):
    if request.method=='GET':
        categories = Categories.objects.all()
        serializer = CategoriesSerializer(categories, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CategoriesSerializer(data=request.data)
        if serializer.is_valid():
                serializer.save()
                return Response()

@api_view(['GET','POST'])
def SubCategory(request):
    if request.method=='GET':
        sub_categories = SubCategory.objects.all()
        serializer = SubCategoriesSerializer(sub_categories, many=True)
        return Response(serializer.data)
    elif request.method =='POST':    
        serializer = SubCategoriesSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
    return Response(serializer.data)


@api_view(['GET','POST'])
def drug(request):
    if request.method=='GET':
        queryset = Drugs.objects.all()
        serializer = DrugsSerializer(queryset, many=True)
        return Response(serializer.data)
    serializer = DrugsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response()

@api_view(['GET','POST'])
def Stock(request):
    if request.method == 'GET':
        queryset = MedicineStock.objects.all()
        serializer = StockSerializer(queryset, many=True)
    elif request.method == 'POST':
        
        serializer = StockSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()     
    return Response(serializer.data)
