# Generated by Django 4.0.3 on 2022-04-07 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pos', '0010_alter_drugs_variant'),
    ]

    operations = [
        migrations.AlterField(
            model_name='drugs',
            name='variant',
            field=models.CharField(max_length=255),
        ),
    ]
