import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../../services/product.service';
import {ProductInterface} from '../../../../database/productInterface'
import {CategoryInterface} from '../../../../database/categoryInterface'
import { categories } from 'src/app/database/category';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  items: ProductInterface[]
  category2: CategoryInterface
  categories: CategoryInterface[]
  categorytmp: CategoryInterface
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

  // ----------------------------------------------------------------------JUST FUNCTIONS----------------------------------------------------------------------

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


  showEditPanel(){
    document.getElementById("editPanel").style.display = "block";
  }
  // ----------------------------------------------------------------------GET FUNCTIONS----------------------------------------------------------------------


  getProducts(){
    this.productService.getProducts().subscribe(items => this.items = items);
  }
  getCategories(){
    this.productService.getCategories().subscribe(categories => this.categories = categories);
    this.category2 = categories[0]
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
    this.productService.getCategory(id).subscribe(category2 => this.category2 = category2);
  }
  getColor(indexOf:number){
    indexOf++;
    if(indexOf%2==0){
    return "white";
    }else{
      return "rgb(219, 234, 234)";
    }
  }


  saveCategory(id: number, time: string, name: string){
      class Category implements CategoryInterface{
        id: number;
        img_link: string;
        time: string;
        name: string;
      
      }
      let cat = new Category();

      cat.id = this.category2.id;
      cat.name = name;
      cat.img_link = this.category2.img_link;
      cat.time = time;

      this.productService.updateCategory(this.category2.id, cat).subscribe(categories => this.categories = categories);

      alert("changes saved!");
    window.location.reload();
      
  }
}
