# Generated by Django 4.0.3 on 2022-05-27 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pos', '0013_remove_medicinestock_drug_id_medicinestock_drug_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='description',
            field=models.TextField(default=None),
        ),
    ]
