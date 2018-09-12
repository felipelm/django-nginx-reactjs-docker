from django.urls import path

from . import views

urlpatterns = [
    path(r'test/', views.index, name='index'),
]
