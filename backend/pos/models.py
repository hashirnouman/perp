from unicodedata import category
from django.db import models

# Create your models here.


class Categories(models.Model):
    category = models.CharField(max_length=255,  unique=True)

class Drugs(models.Model):
    drug_name = models.TextField()
    manufacturer_name = models.TextField()
    salt_name = models.TextField()
    category_id = models.ForeignKey(Categories, on_delete=models.CASCADE)
    price_per_packet = models.IntegerField()
    units_per_packet = models.IntegerField()
    potency = models.IntegerField()



class Customers(models.Model):
    first_name = models.CharField(max_length=255, null=True)
    last_name = models.CharField(max_length=255, null=True)
    email = models.EmailField(null=True, unique=True, max_length=254)
    password = models.TextField(null=True)


class Orders (models.Model):
    status = models.IntegerField(default=None)
    order_number = models.IntegerField(default=None)
    remote = models.IntegerField(default=None)
    created_at = models.DateTimeField(auto_now_add=True)
  


class Order_item(models.Model):
    drug_id = models.ForeignKey(Drugs, on_delete=models.CASCADE)
    order_id = models.ForeignKey(Orders, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=None)
    total = models.FloatField(default=None)
    



class MedicineStock(models.Model):
    invoice_number = models.IntegerField(unique=True)
    supplier_name = models.TextField(default=None)
    supplier_contact = models.TextField(default=None)
    total_quantity = models.IntegerField(default=None)
    total_bill = models.IntegerField(default=None)
    drug_name = models.TextField(default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Sales (models.Model):
    Id = models.IntegerField(unique=True)
    drug_id_id = models.IntegerField()
    value_occurrence = models.IntegerField()
    created_at = models.DateTimeField()
    class Meta:
        managed = False
        db_table = 'sales'