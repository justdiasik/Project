from django.shortcuts import render
from django.http.request import HttpRequest
from .models import Company,Vacancy
from django.http.response import JsonResponse
# Create your views here.
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        pass


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        company_json = company.to_json()
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(company_json, safe=False)


def vacancies_by_companyId(request, company_id):
    try:
        test_for_existOfCompany = Company.objects.get(id=company_id)
        vacancies_by_company = Vacancy.objects.filter(company=company_id)
        vacancies_json = [vacancy.to_json() for vacancy in vacancies_by_company]
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(vacancies_json, safe=False)


def vacancy_list(request):
    if request.method == 'GET':
        # vacancies = Vacancy.objects.filter(salary__in=[1500, 1800])
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        pass

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
        vacancy_json = vacancy.to_json()
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancy_json, safe=False)


def top_ten_vacancies(requests):
        top_vacancies = Vacancy.objects.order_by('-salary')[:10]
        top_json = [top.to_json() for top in top_vacancies]
        return JsonResponse(top_json, safe=False)
