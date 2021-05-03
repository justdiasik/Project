from django.urls import path,include

from . import views
from .views_cbv import *
from .views_fbv import *
from rest_framework_jwt.views import obtain_jwt_token



urlpatterns = [
    path('', views.company_list),

    # path('api/companies/', views.company_list),
    # path('api/companies/<int:company_id>/', views.company_detail),
    # path('api/companies/<int:company_id>/vacancies/', views.vacancies_by_companyId),
    #
    # path('api/vacancies', views.vacancy_list),
    # path('api/vacancies/<int:vacancy_id>/', views.vacancy_detail),
    # path('api/vacancies/top_ten/', views.top_ten_vacancies)

    # FBV
    # path('companies/', company_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/', vacancy_by_companyId),

    path('vacancies/', vacancies_list),
    path('vacancies/<int:vacancy_id>', vacancy_detail),
    path('vacancies/top_ten', top_ten_vacancies),

    path('login/', obtain_jwt_token),

    # CBV
    # path('companies/', CompanyListAPIView.as_view()),
    # path('companies/<int:company_id>/', CompanyDetailAPIView.as_view()),
    # path('companies/<int:company_id>/vacancies/', VacanciesByCompanyIdAPIView.as_view()),
    # path('vacancies/', VacancyListAPIView.as_view()),
    # path('vacancies/<int:vacancy_id>/', VacancyDetailsAPIView.as_view()),
    # path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view())

    # ------------------PROJECT URLS------------------
    # CBV URLS
    path('users/', UserListAPIView.as_view()),
    path('users/<int:user_id>/', UserDetailAPIView.as_view()),

    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    # FBV URLS
    path('categories/<int:category_id>/products/', products_by_categoryId),

    path('products/', product_list),
    path('products/<int:product_id>', product_detail),
    path('products/top_ten', top_ten_products),
    path('products/<int:product_id>/comments/', comments_by_productId),

    path('comments/', comment_list),
    path('comments/<int:comment_id>/', comment_detail),

    # ------------------------------------------------
]