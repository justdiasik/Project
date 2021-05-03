import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../services/product.service';
import {categories} from  '../../../database/category';
import {UserInterface} from  '../../../database/userInterface';
import {UserService} from  '../../../services/user.service';
// import {CategoryService} from  '../.../../../../category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  products: any;
  categories = categories;
  login = false;
  user: UserInterface;
  username="user";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService,
    // private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value =>{
      this.getProducts();
      this.getCategory();
    }));
  }

  ngOnInit() {
    this.getProducts();
    const token = localStorage.getItem('token');
    if (token) {

      this.login = true;
      this.userService.setBl(true);
      this.userService.refreshh(this.login);
      this.username = this.userService.getUsername(); 
      // TODO
    }
    // this.getCategory();
  }

  getProducts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByCategoryId(id).subscribe(products => this.products = products);
  }

  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }
  getUser(){
    this.username =  this.userService.getUsername();
    return this.username;
  }

  logout(){
    localStorage.clear();
    // this.logged = false;
    document.getElementById("h5Hide").style.display = "none";
    document.getElementById("h5Hide2").style.display = "none";
    document.getElementById("btnHide").style.display = "block";
  }
}
