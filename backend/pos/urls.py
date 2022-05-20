from django.urls import path

from . import views

urlpatterns = [
    path('druglist/category', views.Category),
    path('druglist/subcategory', views.SubCategories),
    path('druglist/drug', views.drug),
    path('stock', views.Stock)
]
