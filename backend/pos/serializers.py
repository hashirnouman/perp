from dataclasses import fields
from unicodedata import category
from rest_framework import serializers
from .models import Drugs, Categories, SubCategory, MedicineStock, Orders


class DrugsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drugs
        fields = ['id', 'drug_name', 'manufacturer_name', 'salt_name', 'sub_category_id',
                  'potency', 'price_per_packet', 'units_per_packet', 'variant', 'category_id']


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
