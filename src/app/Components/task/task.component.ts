import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Role } from '../../Models/role';
import { AppService } from '../../services/app.service';
import { User } from '../../Models/user';
//import {NgToastModule} from 'ng-angular-popup';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  success:boolean=false;
  employees:User[]=[];
  public form = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    submissionDate: [''],
    employee: ['']
  });
  constructor(private formBuilder: FormBuilder, private userService: UserService, private appService: AppService) { }

  ngOnInit(): void {
    this.getManagers();
  }

  create(){
    let name = this.form.controls['name'].value;
    let description = this.form.controls['description'].value;
    let submissionDate = this.form.controls['submissionDate'].value;
    let employee = this.form.controls['employee'].value;

    this.appService.createTask(name, description,submissionDate,employee).subscribe((res: any) => {
      this.form.controls["name"].setValue("");
      this.form.controls["description"].setValue("");
      this.form.controls["submissionDate"].setValue("");
      this.form.controls["employee"].setValue("");


      this.success=true;
      console.log(res);
    }, error => {
      console.log("error", error);
    });
  }

  getManagers(){
    this.userService.getUserList().subscribe(m => {
      this.employees = m;
    })
  }

}
