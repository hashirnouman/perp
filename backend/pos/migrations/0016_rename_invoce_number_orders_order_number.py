# Generated by Django 4.0.3 on 2022-05-27 21:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pos', '0015_orders_type'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orders',
            old_name='invoce_number',
            new_name='order_number',
        ),
    ]
