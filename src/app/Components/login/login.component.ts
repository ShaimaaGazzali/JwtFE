import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Constants } from '../../helper/constants';
import { ResponseModel } from '../../Models/responseModel';
import { User } from '../../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    this.userService.login(email, password).subscribe((res: ResponseModel) => {
      if(res.responseCode == 1){
        localStorage.setItem(Constants.USER_KEY, JSON.stringify(res.dataSet));
        let user = res.dataSet as User;
        if(user.role =="Admin"){
          this.router.navigate(['/allUserManagement']);
        }else{
          this.router.navigate(['/userManagement']);
        }
        
      }
    }, error => {
      console.log("error", error);
    });
  }

}
