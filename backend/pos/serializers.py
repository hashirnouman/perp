from unicodedata import category
from rest_framework import serializers
from .models import Drugs, Categories, SubCategory, MedicineStock

class DrugsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drugs
        fields = '__all__'


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['category']


class SubCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ['sub_category', 'category_id']


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicineStock
        fields = ['invoice_number', 'supplier_name',
                  'supplier_contact', 'total_quantity', 'total_bill', 'drug_id']
