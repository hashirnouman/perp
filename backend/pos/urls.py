from django.urls import path

from . import views

urlpatterns=[
    path('druglist/adddrug', views.addDrug),
    path('druglist/addCategory', views.addCategory),
    path('druglist/getCategories', views.getCategories),
    path('druglist/getSubCategories', views.getSubCategories),
    path('stock/addStock', views.addStock)

]