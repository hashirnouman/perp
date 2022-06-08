from django.urls import path

from . import views

urlpatterns = [
    path('druglist/category', views.Category),
    path('druglist/subcategory', views.SubCategories),
    path('druglist/drug', views.drug),
    path('druglist/drug/<int:id>', views.singleDrug),
    path('stock', views.Stock),
    path('orders', views.Order),
    path('forecast', views.Predict)
]
