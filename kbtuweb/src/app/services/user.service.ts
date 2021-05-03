import { Injectable, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import{users} from '../database/users';
import{UserInterface} from '../database/userInterface';
import {HttpClient} from '@angular/common/http';

export class LoginResponse {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  BASE_URL = 'http://127.0.0.1:8000';
  logged = false;
  username: string;
  constructor(
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {

      this.logged = true;
      this.refreshh(this.logged);
      // TODO
    }
  }


getUsername(){
  return this.username;
}

setUsername(str:string){
  this.username = str;
}
    getBl():boolean{
      return this.logged;
    }
    setBl(bl: boolean){
      this.logged = bl;
    }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }
  logout(){
    localStorage.clear();
    this.logged = false;
    this.changeDesign("readysignin");
  }
  changeDesign(str: string){
    alert("logged!");
    if(str == "readysignin"){
      // show signin
      document.getElementById("h5Hide").style.display = "none";
      document.getElementById("h5Hide2").style.display = "none";
      document.getElementById("btnHide").style.display = "block";
    }else{
      // logged in show logout()
      document.getElementById("h5Hide").style.display = "block";
      document.getElementById("h5Hide2").style.display = "block";
      document.getElementById("btnHide").style.display = "none";
    }
   
  }
  refreshh(str: boolean){
    if(!str){
      // show signin
      document.getElementById("h5Hide").style.display = "none";
      document.getElementById("h5Hide2").style.display = "none";
      document.getElementById("btnHide").style.display = "block";
    }else{
      // logged in show logout()
      document.getElementById("h5Hide").style.display = "block";
      document.getElementById("h5Hide2").style.display = "block";
      document.getElementById("btnHide").style.display = "none";
    }
   
  }
  getUsers(): Observable<UserInterface[]> {
    // return of(users);
    return this.http.get<UserInterface[]>("http://127.0.0.1:8000/api/users/");

  }
  getUser(username: string): Observable<UserInterface> {

    return of(users.find(user => user.username === username));
  }
  addUser(newUser: UserInterface): Observable<UserInterface> {
    // users.push(newUser);
    return this.http.post<UserInterface>("http://127.0.0.1:8000/api/users/", newUser);
  }
  deleteUser(user: UserInterface){
    //coming soon
  }
}
