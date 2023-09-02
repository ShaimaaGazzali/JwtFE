import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Role } from '../../Models/role';
import { AppService } from '../../services/app.service';
import { User } from '../../Models/user';
//import {NgToastModule} from 'ng-angular-popup';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  success:boolean=false;
  //roles: Role[] = [];
  managers:User[]=[];
  public form = this.formBuilder.group({
    name: ['', Validators.required],
    manager: ['',  Validators.required]
  });
  constructor(private formBuilder: FormBuilder, private userService: UserService, private appService: AppService) { }

  ngOnInit(): void {
    this.getManagers();
  }

  create(){
    let name = this.form.controls['name'].value;
    let manager = this.form.controls['manager'].value;

    this.appService.createDepartment(name, manager).subscribe((res: any) => {
      this.form.controls["name"].setValue("");
      this.form.controls["manager"].setValue("");


      this.success=true;
      console.log(res);
    }, error => {
      console.log("error", error);
    });
  }

  getManagers(){
    this.userService.getUserList().subscribe(m => {
      this.managers = m;
    })
  }

  // onRoleChange(rol: string){
  //   this.roles.forEach(x => {
  //     if(x.role == rol){
  //       x.isSelected = true;
  //     }else{
  //       x.isSelected = false;
  //     }
  //   })
  // }

}
