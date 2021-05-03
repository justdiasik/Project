import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../../services/product.service';
import { ProductInterface } from 'src/app/database/productInterface';
import { CategoryInterface } from 'src/app/database/categoryInterface';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  items: ProductInterface[];
  itemtmp: ProductInterface;
  cat: CategoryInterface;
  category2: CategoryInterface;
  categories: CategoryInterface[];
  constructor( private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
    ) { 
      this.router.events.subscribe((value =>{
      this.getProducts();
      this.recipeItem();
      this.getCategories();

      
        // this.getProduct();
        // this.getCategory();
      }));
    }

  ngOnInit(): void {
    this.recipeItem();
    this.getProducts();
    this.getCategories();
    // this.getProduct();
    // this.getCategory(1);
  }

  categoryItem(){
    document.getElementById("recipe").classList.remove("active");
    document.getElementById("category").classList.add("active");
    document.getElementById("recipes").style.display = "none";
    document.getElementById("categories").style.display = "block";
    document.getElementById("editPanel").style.display = "none";

  }

  recipeItem(){
    document.getElementById("category").classList.remove("active");
    document.getElementById("recipe").classList.add("active");
    document.getElementById("recipes").style.display = "block";
    document.getElementById("categories").style.display = "none";
    document.getElementById("editPanel").style.display = "none";

  }


  
  deleteCategory(prd: CategoryInterface){
    alert(prd.name + " deleted");
    this.productService.deleteCategory(prd.id).subscribe(cat => this.cat = cat);
    this.getCategories();
  }
  deleteProduct(prd: ProductInterface){
    alert(prd.name + " deleted");
    this.productService.deleteProduct(prd.id).subscribe(items => this.itemtmp = items);
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(items => this.items = items);
  }
  getCategories(){
    this.productService.getCategories().subscribe(categories => this.categories = categories);
  }
  getProductsByCategoryId(id: number) {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByCategoryId(id).subscribe(items => this.items = items);
  }
  // getProduct() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.productService.getProduct(id).subscribe(item => this.item = item);
  // }
  getCategory(id: number){
    this.productService.getCategory(id).subscribe(category => this.category2 = category);
  }
  getColor(indexOf:number){
    indexOf++;
    if(indexOf%2==0){
    return "white";
    }else{
      return "rgb(219, 234, 234)";
    }
  }
}

