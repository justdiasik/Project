from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Company, Vacancy, Product, Comment, Category
from .serializers import CompanySerializer, VacancySerializer, ProductSerializer, CommentSerializer


# ---------------PRODUCT FBV---------------
@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    elif request.method == 'PUT':
        # post = request.POST.copy()
        # # request.POST.get("category_id")
        # post['category_id'] = category
        # request.POST = post

        category = Category.objects.only('id').get(id=request.data['category_id'])

        request.data.update({"category_id": category})
        serializer = Product2Serializer(instance=product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.update(serializer.instance, request.data)
            return Response(serializer.data)
        return Response({'error': serializer.errors})
    elif request.method == 'DELETE':
        product.delete()

        return Response({'deleted': True})

@api_view(['GET'])
def products_by_categoryId(request, category_id):
    if request.method == 'GET':
        products = Product.objects.filter(category_id=category_id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def top_ten_products(request):
    if request.method == 'GET':
        top_ten = Product.objects.get_top_ten_products()
        serializer = ProductSerializer(top_ten, many=True)
        return Response(serializer.data)                    #TODO
# -----------------------------------------
# ---------------COMMENT FBV---------------

@api_view(['GET', 'POST'])
def comment_list(request):
    if request.method == 'GET':
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)



@api_view(['GET', 'PUT', 'DELETE'])
def comment_detail(request, comment_id):
    try:
        comment = Comment.objects.get(id=comment_id)
    except Product.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CommentSerializer(product)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CommentSerializer(instance=product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.update(serializer.instance, request.data)
            return Response(serializer.data)
        return Response({'error': serializer.errors})
    elif request.method == 'DELETE':
        comment.delete()

        return Response({'deleted': True})

@api_view(['GET'])
def comments_by_productId(request, product_id):
    if request.method == 'GET':
        comments = Comment.objects.filter(product_id=product_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
# -----------------------------------------


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CompanySerializer(instance=company, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.update(serializer.instance, request.data)
            return Response(serializer.data)
        return Response({'error': serializer.errors})
    elif request.method == 'DELETE':
        company.delete()

        return Response({'deleted': True})


@api_view(['GET'])
def vacancy_by_companyId(request, company_id):
    if request.method == 'GET':
        vacancies = Vacancy.objects.filter(company=company_id)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def vacancies_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        vacancy.delete()
        return Response({'deleted': True})


@api_view(['GET'])
def top_ten_vacancies(request):
    if request.method == 'GET':
        top_ten = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(top_ten, many=True)
        return Response(serializer.data)