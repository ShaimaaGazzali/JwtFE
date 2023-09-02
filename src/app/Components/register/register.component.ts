import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Role } from '../../Models/role';
import { User } from '../../Models/user';
import { Constants } from '../../helper/constants';
//import {NgToastModule} from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  success:boolean=false;
  roles: Role[] = [];
  public registerForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    birthday: [''],
    mobile: [''],
    password: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.getAllRoles();
  }
  
selectRole(){

  if(this.isUserLogin){

    if(this.isAdmin){
  this.roles.forEach(x => {
    if(x.role == "Manager"){
      x.isSelected = true;
    }else{
      x.isSelected = false;
    }
  })
    }

    if(this.isManager){
      this.roles.forEach(x => {
        if(x.role == "Employee"){
          x.isSelected = true;
        }else{
          x.isSelected = false;
        }
      })
        }

  }
}
  register(){
    this.selectRole();
    let fullName = this.registerForm.controls['fullName'].value;
    let email = this.registerForm.controls['email'].value;
    let birthday = this.registerForm.controls['birthday'].value;
    let mobile = this.registerForm.controls['mobile'].value;
    let password = this.registerForm.controls['password'].value;
    this.userService.register(fullName, email, password, this.roles.filter(x => x.isSelected)[0].role,birthday,mobile).subscribe((res: any) => {
      this.registerForm.controls["fullName"].setValue("");
      this.registerForm.controls["email"].setValue("");
      this.registerForm.controls["birthday"].setValue("");
      this.registerForm.controls["mobile"].setValue("");
      this.registerForm.controls["password"].setValue("");
      this.roles.forEach(x => x.isSelected = false);

      this.success=true;
      console.log(res);
    }, error => {
      console.log("error", error);
    });
  }

  getAllRoles(){
    this.userService.getAllRoles().subscribe(roles => {
      this.roles = roles;
    })
  }

  onRoleChange(rol: string){
    this.roles.forEach(x => {
      if(x.role == rol){
        x.isSelected = true;
      }else{
        x.isSelected = false;
      }
    })
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
