from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Company, Vacancy, Category, Product, Comment, MyUser
from django.contrib.auth.models import User
# ------------ModelSerializers------------

class UserSerializer(serializers.ModelSerializer):

    id = serializers.IntegerField(read_only=True)

    first_name = serializers.CharField(min_length=2)
    last_name = serializers.CharField(min_length=2)
    username = serializers.CharField(
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    password = serializers.CharField(min_length=8)
    is_superuser = serializers.BooleanField(default=False)

    def create(self, validated_data):
        user = User.objects.create_user(
            self.validated_data['username'],
            last_name=validated_data['last_name'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            is_superuser=validated_data['is_superuser'])
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'password', 'is_superuser')

class ProductSerializer(serializers.ModelSerializer):
    # POST
    # category_id = serializers.PrimaryKeyRelatedField(many=False)
    class Meta:
        model = Product
        # fields = '__all__'
        fields = ('id', 'category_id', 'name',
                  'time', 'description', 'image', 'rating',
                  'ingredients',
                  'methods')
class Product2Serializer(serializers.ModelSerializer):

    category_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    class Meta:
        model = Product
        # fields = '__all__'
        fields = ('id', 'category_id', 'name',
                  'time', 'description', 'image', 'rating',
                  'ingredients',
                  'methods')
class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'
# ----------------------------------------
# --------------Serializers---------------
# class ProductSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     # category_id = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
#     name = serializers.CharField()
#     time = serializers.CharField()
#     description = serializers.CharField()
#     image = serializers.CharField()
#     rating = serializers.CharField()
#     # FloatField
#     ingredients = serializers.CharField()
#     methods = serializers.CharField()
#
#     def create(self, validated_data):
#         # product = Product(category_id=validated_data['category_id'], name=validated_data['name'],
#         #                   time=validated_data['time'], description=validated_data['description'],
#         #                   image=validated_data['image'], rating=validated_data['rating'],
#         #                   ingredients=validated_data['ingredients'], methods=validated_data['methods'])
#         product = Product.objects.create(**validated_data)
#
#         product.save()
#         return product
#
#     def update(self, instance, validated_data):
#         instance.category_id = validated_data.get('category_id')
#         instance.name = validated_data.get('name')
#         instance.time = validated_data.get('time')
#         instance.description = validated_data.get('description')
#         instance.image = validated_data.get('image')
#         instance.rating = validated_data.get('rating')
#         instance.ingredients = validated_data.get('ingredients')
#         instance.methods = validated_data.get('methods')
#         instance.save()
#         return instance




class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    img_link = serializers.CharField()
    time = serializers.CharField()
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(**validated_data)
        return category

    def update(self, instance, validated_data):
        instance.img_link = validated_data.get('img_link', instance.img_link)
        instance.time = validated_data.get('time', instance.time)
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
# class UserSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     password = serializers.CharField()
#     lname = serializers.CharField()
#     login = serializers.CharField()
#     password = serializers.CharField()
#     isSuperUser = serializers.BooleanField()
#     def create(self, validated_data):
#         user = User.objects.create(**validated_data)
#         return user
#
#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name', instance.name)
#         instance.lname = validated_data.get('lname', instance.lname)
#         instance.login = validated_data.get('login', instance.login)
#         instance.password = validated_data.get('password', instance.password)
#         instance.isSuperUser = validated_data.get('isSuperUser', instance.isSuperUser)
#         instance.save()
#         return instance


# ----------------------------------------

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance


class VacancySerializer(serializers.ModelSerializer):

    class Meta:
        model = Vacancy
        fields = ['name', 'description', 'salary', 'company']
