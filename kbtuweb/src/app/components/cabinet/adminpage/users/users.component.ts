import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import{UserService} from '../../../../services/user.service';
import{UserInterface} from '../../../../database/userInterface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserInterface[];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
    ) { 
      this.router.events.subscribe((value =>{
      this.getUsers();      
      }));
    }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(users=> this.users = users);
  }
  colorSupeUsers(superUser: boolean): string{
    if(superUser){
      return "super";
    }else
    return "not_super";

  }
}
