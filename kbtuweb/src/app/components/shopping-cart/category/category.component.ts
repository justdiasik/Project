import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../.../../../../services/product.service';
import {categories} from  '../../../database/category';
import {CategoryInterface} from  '../../../database/categoryInterface';
// import {CategoryService} from  '../../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products: any;
  categories: CategoryInterface[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    // private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value =>{
      this.getProducts();
      // this.getCategory();
    this.getCategories();

    }));
  }

  ngOnInit() {
    this.getProducts();
    // this.getCategory();
    this.getCategories();
  }

  getProducts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByCategoryId(id).subscribe(products => this.products = products);
  }
  getCategories() {
    this.productService.getCategories().subscribe(categories => this.categories = categories);
  }
  // getCategory() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.categoryService.getCategory(id).subscribe(category => this.category = category);
  // }
}
