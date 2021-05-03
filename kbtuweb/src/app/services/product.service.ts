import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {items} from '../database/products';
import {categories} from '../database/category';
import {ProductInterface} from '../database/productInterface';
import {CategoryInterface} from '../database/categoryInterface';
import {HttpClient} from '@angular/common/http';
export class LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://127.0.0.1:8000';
 
  constructor(
    private http: HttpClient
  ) { }
  addItem(newProduct: ProductInterface):Observable<ProductInterface>{
    return this.http.post<ProductInterface>("http://127.0.0.1:8000/api/products/", newProduct);

    // items.push(newProduct);
  }
  addCategory(newCategory: CategoryInterface):Observable<CategoryInterface>{
    // categories.push(newCategory);
    return this.http.post<CategoryInterface>("http://127.0.0.1:8000/api/categories/", newCategory);

  }

  deleteCategory(id: number): Observable<CategoryInterface>{
    return this.http.delete<CategoryInterface>(`http://127.0.0.1:8000/api/categories/${id}/`)
  }
  deleteProduct(id: number): Observable<ProductInterface>{
    return this.http.delete<ProductInterface>(`http://127.0.0.1:8000/api/products/${id}`)
    
    // let index = product.id-1;
    // delete items[index];
    // return of(items.filter(function(ele){ return ele != product; }));
  }
// ---------------------------------------------------------------------------------------------------------------------------------
  getProduct(id: number): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`${this.BASE_URL}/api/products/${id}`);

    // return of(items.find(item => item.id === id));
  }
  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>("http://127.0.0.1:8000/api/products/");

    // return of(items);
  }
  getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(`${this.BASE_URL}/api/categories/`);

    // return of(categories);
  }
  getCategory(id: number): Observable<CategoryInterface> {
    // return of(categories.find(category => category.id === id));
    return this.http.get<CategoryInterface>(`${this.BASE_URL}/api/categories/${id}/`);

  }
  getProductsByCategoryId(id: number): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`${this.BASE_URL}/api/categories/${id}/products/`);

    // return of(items.filter(item => item.category_id === id));
  }

  updateProduct(id: number, body2: ProductInterface): Observable<ProductInterface> {
    // return of(categories.find(category => category.id === id));
    return this.http.put<ProductInterface>(`${this.BASE_URL}/api/products/${id}`, body2);
  }

  updateCategory(id: number, body2: CategoryInterface): Observable<CategoryInterface[]> {
    // return of(categories.find(category => category.id === id));
    // alert("heeeey");
     this.http.put<CategoryInterface>(`${this.BASE_URL}/api/categories/${id}/`, body2);
     return this.http.get<CategoryInterface[]>(`${this.BASE_URL}/api/categories/`);

  }
}
