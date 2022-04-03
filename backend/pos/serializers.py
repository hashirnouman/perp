from rest_framework import serializers
from .models import Drugs, Categories, SubCategory, MedicineStock

class DrugsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drugs
        fields = ['drug_name', 'manufacturer_name','salt_name','variant','price_per_packet','units_per_packet','potency','category_id']
        

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
       model = Categories
       fields = ['category']

class SubCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'

class StockSerializer(serializers.ModelSerializer):
    class Meta: 
        model = MedicineStock
        fields = ['invoice_number','supplier_name','supplier_contact','total_quantity','total_bill','drug_id']