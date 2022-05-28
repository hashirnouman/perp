from django.db import models

# Create your models here.


class Categories(models.Model):
    category = models.CharField(max_length=255,  unique=True)


class SubCategory(models.Model):
    category_id = models.ForeignKey(
        Categories, on_delete=models.PROTECT, null=False, blank=True)
    sub_category = models.CharField(max_length=255,  unique=True)


class Drugs(models.Model):
    drug_name = models.TextField()
    manufacturer_name = models.TextField()
    salt_name = models.TextField()
    sub_category_id = models.ForeignKey(
        SubCategory, on_delete=models.PROTECT, null=False, blank=True)
    category_id = models.ForeignKey(
        Categories, on_delete=models.PROTECT, null=False, blank=True, default=None)
    price_per_packet = models.IntegerField()
    units_per_packet = models.IntegerField()
    potency = models.IntegerField()
    variant = models.TextField()


class Customers(models.Model):
    first_name = models.CharField(max_length=255, null=True)
    last_name = models.CharField(max_length=255, null=True)
    email = models.EmailField(null=True, unique=True, max_length=254)
    password = models.TextField(null=True)


class Orders (models.Model):
    status = models.TextField(default=None)
    order_number = models.IntegerField(default=None)
    description = models.TextField(default=None)
    type = models.TextField(default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Order_item(models.Model):
    drug_id = models.OneToOneField(Drugs, on_delete=models.PROTECT)
    order_id = models.ForeignKey(Orders, on_delete=models.PROTECT)
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
