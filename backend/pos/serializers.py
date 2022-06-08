from dataclasses import fields
from pyexpat import model
from unicodedata import category
from rest_framework import serializers
from .models import Drugs, Categories, Order_item, Sales, SubCategory, MedicineStock, Orders


class DrugsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drugs
        fields = '__all__'


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'


class SubCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicineStock
        fields = ['invoice_number', 'supplier_name',
                  'supplier_contact', 'total_quantity', 'total_bill', 'drug_name', 'created_at']


class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=Order_item
        fields = '__all__'

class SalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sales
        fields = '__all__'