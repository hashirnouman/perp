# Generated by Django 4.0.3 on 2022-06-05 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pos', '0019_remove_orders_updated_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='drugs',
            name='category_id',
        ),
        migrations.RemoveField(
            model_name='drugs',
            name='sub_category_id',
        ),
        migrations.RemoveField(
            model_name='drugs',
            name='variant',
        ),
        migrations.AddField(
            model_name='drugs',
            name='category_name',
            field=models.TextField(default=None),
        ),
    ]
