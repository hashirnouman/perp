# Generated by Django 4.0.3 on 2022-04-06 21:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Customers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255, null=True)),
                ('last_name', models.CharField(max_length=255, null=True)),
                ('email', models.EmailField(max_length=254, null=True, unique=True)),
                ('password', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Drugs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('drug_name', models.TextField(default=None)),
                ('manufacturer_name', models.TextField()),
                ('salt_name', models.TextField()),
                ('price_per_packet', models.IntegerField()),
                ('units_per_packet', models.IntegerField()),
                ('potency', models.IntegerField()),
                ('variant', models.CharField(max_length=255)),
                ('category_id', models.ForeignKey(default=None, on_delete=django.db.models.deletion.PROTECT, to='pos.categories')),
            ],
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('case1', 'delivered'), ('case2', 'inprogress')], default=('case1', 'delivered'), max_length=255)),
                ('invoce_number', models.IntegerField(default=None)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='SubCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_category', models.CharField(max_length=255, unique=True)),
                ('category_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='pos.categories')),
            ],
        ),
        migrations.CreateModel(
            name='Order_item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=None)),
                ('total', models.FloatField(default=None)),
                ('drug_id', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to='pos.drugs')),
                ('order_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='pos.orders')),
            ],
        ),
        migrations.CreateModel(
            name='MedicineStock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('invoice_number', models.IntegerField(unique=True)),
                ('supplier_name', models.TextField(default=None)),
                ('supplier_contact', models.TextField(default=None)),
                ('total_quantity', models.IntegerField(default=None)),
                ('total_bill', models.IntegerField(default=None)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('drug_id', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.PROTECT, to='pos.drugs')),
            ],
        ),
    ]