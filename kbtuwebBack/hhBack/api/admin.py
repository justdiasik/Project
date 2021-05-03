from django.contrib import admin
from .models import Company, Vacancy, Category, Product, Comment, MyUser

# Register your models here.
admin.site.register(Company)
admin.site.register(Vacancy)

admin.site.register(Category)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    model = Product

admin.site.register(Comment)
admin.site.register(MyUser)


