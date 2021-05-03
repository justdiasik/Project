import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import{CommentInterface} from '../database/commentInterface';
// import{comments} from '../database/comments';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(
    private http: HttpClient

  ) { }


  addComment(newComment: CommentInterface):Observable<CommentInterface>{
    // let temp = this.getCommentsByProductId(newComment.product_id);
    // return (temp);
    return this.http.post<CommentInterface>("http://127.0.0.1:8000/api/comments/", newComment);

  }
  
  // getComments():Observable<CommentInterface[]>{
  //   return of(comments);
  // }

  getCommentsByProductId(id: number):Observable<CommentInterface[]>{
    return this.http.get<CommentInterface[]>(`${this.BASE_URL}/api/products/${id}/comments/`);

    // return of(comments.filter(comments => comments.product_id === id));
  }
}
