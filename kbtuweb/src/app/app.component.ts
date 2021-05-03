import { Component, OnInit } from '@angular/core';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'kbtuweb';


  logged = true;

  username = '';
  password = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {

      this.logged = true;
    }
  }

  // login() {
  //   this.companyService.login(this.username, this.password)
  //     .subscribe(res => {

  //       localStorage.setItem('token', res.token);

  //       this.logged = true;
  //       this.username = '';
  //       this.password = '';
  //     });

  // }

  logout() {
    localStorage.clear();
    this.logged = false;
  }

}