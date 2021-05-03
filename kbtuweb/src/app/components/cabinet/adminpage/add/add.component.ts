import { Component, OnInit } from '@angular/core';
import {ProductInterface} from '../../../../database/productInterface'
import {CategoryInterface} from '../../../../database/categoryInterface'
import {UserInterface} from '../../../../database/userInterface'
import {ProductService} from  '../../../../services/product.service';
import {UserService} from  '../../../../services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // private product: ProductInterface
  items: ProductInterface[]
  category: CategoryInterface
  categories: any
  selectedItem;
  itemTemp: ProductInterface
  catTemp: CategoryInterface
  userTemp: UserInterface
  constructor( 
    private productService: ProductService,
    private userService: UserService
   ) {
    this.getProducts();
    this.getCategories();
    }

  ngOnInit(): void {
    this.getProducts();
    // this.getCategories();
  }
  // ----------------------------------------------------------------------ADD FUNCTIONS----------------------------------------------------------------------

  add(category_id:number,name: string, time: string, description: string, rating: number, image: string, ingredients: string, methods: string): void{
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
    product.id=8;
    product.category_id = category_id;
    product.name = name;
    product.time=time;
    product.description=description;
    product.rating=rating;
    product.image=image;
    product.ingredients = ingredients;//TODO
    product.methods = methods;
    this.productService.addItem(product).subscribe(itemTemp => this.itemTemp = itemTemp);
    alert("[" + product.name + "'s recipe] added to category ");
    // window.location.reload();

  }
  addCategory(name: string, time: string, link: string){
      class Category implements CategoryInterface{
        img_link: string;
        time: string;
        name: string;
        id: number;
      }
      let cat = new Category();

      cat.id = 8;
      cat.name = name;
      cat.time = time;
      cat.img_link = link;
      // alert(this.autoIncrement("cat") + " category added");
      this.productService.addCategory(cat).subscribe(catTemp => this.catTemp = catTemp);
      alert("[" + cat.name + " category] added");
    // window.location.reload();
      
  }
  addUser(name: string, lname: string,login: string, password: string, isSuperUser: string){
    class User implements UserInterface{
      id: number;
      first_name: string;
      last_name: string;
      username: string;
      password: string;
      is_superuser: boolean;
     
    }
    let user = new User();
    user.id = 8;
    user.first_name = name;
    user.last_name = lname;
    user.username = login;
    user.password = password;
    if(isSuperUser == "true"){
      user.is_superuser = true;
    }else{
      user.is_superuser = false;
    }
    this.userService.addUser(user).subscribe(userTemp => this.userTemp = userTemp);
    alert("[" + user.username + " user] added");
    // window.location.reload();

  }
  // ----------------------------------------------------------------------JUST FUNCTIONS----------------------------------------------------------------------

  split(text:string): any{
    var splitted = text.split(/[\s,]+/);  
    return splitted;
  }
  autoIncrement(txt: string): number{
    if(txt=="prod"){
      let nextId = this.items[this.items.length-1].id;
      nextId++;
      return nextId;
    }else{
      let nextId = this.categories[this.categories.length-1].id;
      nextId++;
      return nextId;
    }
  }
  // ----------------------------------------------------------------------GET FUNCTIONS----------------------------------------------------------------------
  getSelectedItem(): number{//used dropdown menu INPUT
    return this.selectedItem;
  }
  getProducts(){
    this.productService.getProducts().subscribe(items => this.items = items);
  }
  getCategory(id: number){
    this.productService.getCategory(id).subscribe(category => this.category = category);
  }
  getCategories(){
    this.productService.getCategories().subscribe(categories => this.categories = categories);
  }

}
