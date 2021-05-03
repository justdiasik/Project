import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../services/product.service';
import {ProductInterface} from  '../../../database/productInterface';
// import {CategoryService} from  '../../../../../services/category.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
// items = items;
items: ProductInterface[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    // private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value =>{
      this.getProducts();
    }));
  }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByCategoryId(id).subscribe(items => this.items = items);
  }
}
