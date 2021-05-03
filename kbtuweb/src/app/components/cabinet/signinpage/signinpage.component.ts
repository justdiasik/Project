import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
export class SigninpageComponent implements OnInit {
  logged = this.userService.getBl();
  username = '';
  password = '';
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {

      this.logged = true;
      this.userService.setBl(true);
      this.userService.refreshh(this.logged);
      // TODO
    }
  }


  test(){
    alert("checking");
    this.userService.login(this.username, this.password)
    .subscribe(res => {

      localStorage.setItem('token', res.token);
      this.userService.setUsername(this.username);

      this.logged = true;
      this.userService.changeDesign("logged");

      this.username = '';
      this.password = '';
      this.signin(this.username);
    });
  }
 
  // login() {
  //   alert("kogging");
  //   this.userService.login(this.username, this.password)
  //     .subscribe(res => {

  //       localStorage.setItem('token', res.token);

  //       this.logged = true;
  //       this.username = '';
  //       this.password = '';
  //     });

  // }

  
  
  signin(login: string){
  //Coming SOON TODO
  document.getElementById("h5Hide").style.display = "block";
  document.getElementById("h5Hide2").style.display = "block";
  document.getElementById("btnHide").style.display = "none";

  }

}
