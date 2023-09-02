import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../helper/constants';
import { User } from '../../Models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.onLogout();
  }

  onLogout(){
    localStorage.removeItem(Constants.USER_KEY);
  }

  get isUserLogin(){
    const user = localStorage.getItem(Constants.USER_KEY);
    return user && user.length>0;
  }

  get user():User{
    return JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
  }

  get isAdmin():boolean{
    return this.user.role == "Admin";
  }

  get isManager():boolean{
    return this.user.role == "Manager";
  }
  get isEmployee():boolean{
    return this.user.role == "Employee";
  }
}
