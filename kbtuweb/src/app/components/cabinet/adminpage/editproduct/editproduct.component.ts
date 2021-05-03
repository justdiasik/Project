import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../../services/product.service';
import { Location } from '@angular/common';
import { CategoryInterface } from 'src/app/database/categoryInterface';
import { ProductInterface } from 'src/app/database/productInterface';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  item:ProductInterface
  category:CategoryInterface
  category2:CategoryInterface
  constructor( private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
    ) { 
      this.router.events.subscribe((value =>{
        this.getProduct();
        // this.getCategory();
      }));
    }

  ngOnInit(): void {
    this.getProduct();
    // this.getCategory();
  }
  // ----------------------------------------------------------------------GET FUNCTIONS----------------------------------------------------------------------

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(item => this.item = item);
  }
  getCategory(){
    this.productService.getCategory(this.item.category_id).subscribe(category => this.category = category);
  }
  getCategoryName(category_id: number): string{
    
    this.productService.getCategory(category_id).subscribe(category2 => this.category2 = category2);
    return this.category2.name;
  }
  
  getColor(indexOf:number){
    indexOf++;
    if(indexOf%2==0){
    return "white";
    }else{
      return "rgb(219, 234, 234)";
    }
  }
  // ----------------------------------------------------------------------JUST FUNCTIONS----------------------------------------------------------------------

  trackByIdx(index: number, obj: any): any {
    return index;
  }
  split(text:string): any{
    var splitted = text.split('\',');  
    return splitted;
  }
  goBack(): void {
    this.location.back();
  }
  // ----------------------------------------------------------------------UPDATE FUNCTIONS----------------------------------------------------------------------

  save(category_id:number,name: string, time: string, description: string, rating: number, ingredients: string, methods: string){
    class Product implements ProductInterface{
      id: number;
      category_id: number;
      name: string;
      time: string;
      description: string;
      image: string;
      rating: number;
      ingredients: string;
      methods:string;
    }
    let product = new Product();
    product.id=this.item.id;
    product.category_id = category_id;
    product.name = name;
    product.time=time;
    product.description=description;
    product.rating=rating;
    product.image=this.item.image;
    product.ingredients = ingredients;//TODO
    product.methods = methods;
    // this.productService.addItem(product).subscribe(itemTemp => this.itemTemp = itemTemp);
    alert("changes saved! ");
    this.productService.updateProduct(this.item.id, product).subscribe(item => this.item = item);
    // window.location.reload();

  }
}
