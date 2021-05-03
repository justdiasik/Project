import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../../services/product.service';
import {CommentService} from  '../../../../services/comment.service';
import{ProductInterface}from '../../../../database/productInterface';
import{CategoryInterface}from '../../../../database/categoryInterface';
import { from, Observable } from 'rxjs';
// import { comments } from 'src/app/database/comments';
import { CommentInterface } from 'src/app/database/commentInterface';
// import {CategoryService} from  '../.../../../../../category.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
item: ProductInterface
category: CategoryInterface
comments: CommentInterface[]
allcomments: CommentInterface[]
comment2: CommentInterface
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private commentService: CommentService,
    // private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value =>{
      this.getProduct();
      this.getCommentsByProductId();
      // this.getCategory();

    }));
  }

  ngOnInit(): void {
    this.getProduct();
    this.getCommentsByProductId();
    // this.getCategory();

  }

  // ----------------------------------------------------------------------ADD FUNCTIONS----------------------------------------------------------------------
  
  sendComment(login: string, text: string){
    class Comment implements CommentInterface{
      id: number;
      product_id: number;
      login: string;
      date: string;
      text: string;
    }

    let newComment = new Comment();
    newComment.id = 1;
    newComment.product_id = +this.route.snapshot.paramMap.get('id');
    newComment.login = login;
    newComment.date = new Date().toString();
    newComment.text = text;
    alert("sent!");
    this.commentService.addComment(newComment).subscribe(comment2 => this.comment2 = comment2);
    window.location.reload();

  }
 
  // ----------------------------------------------------------------------GET FUNCTIONS----------------------------------------------------------------------
  
  getCommentsByProductId(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getCommentsByProductId(id).subscribe(comments => this.comments = comments);
    // this.comments2 = this.commentService.getCommentsByProductId(id);
  }

  getComments(){
    // this.commentService.getComments().subscribe(comments => this.allcomments = comments);
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(item => this.item = item);

  }
  getCategory(category_id: number): string{
    
    this.productService.getCategory(category_id).subscribe(category => this.category = category);
    return this.category.name;
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
  autoIncrement(): number{
    this.getComments();
    let nextId = this.allcomments[this.allcomments.length-1].id;
    nextId++;
    return nextId;
  }
  split(text:string): any{
    var splitted = text.split('\',');  
    return splitted;
  }
}
