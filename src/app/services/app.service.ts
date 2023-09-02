import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../Models/responseModel';
import { map } from 'rxjs/operators';
import { ResponseCode } from '../enum/responseCode';
import { User } from '../Models/user';
import { Observable } from 'rxjs';
import { Constants } from '../helper/constants';
import { Role } from '../Models/role';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly baseUrl: string = "https://localhost:44359/api/";
  constructor(private httpClient: HttpClient) { }

  // login(email: string, password: string){
  //   const body = {
  //     Email: email,
  //     Password: password
  //   }
  //   return this.httpClient.post<ResponseModel>(this.baseUrl + "user/Login", body);
  // }

  createDepartment(name: string, manager:number){
    let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
    const header= new HttpHeaders({
      'Authorization': `Bearer ${userInfo?.token}`
    });

    const body = {
      Name: name,
      ManagerId: manager,

    }
    return this.httpClient.post<ResponseModel>(this.baseUrl + "App/CreateDepartment", body, {headers: header});
  }

  

  createTask(name: string, description:string,submissionDate:string,employee:number){
    let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
    const header= new HttpHeaders({
      'Authorization': `Bearer ${userInfo?.token}`
    });

    const body = {
      Name: name,
      Description:description,
      SubmissionDate:submissionDate,
      EmployeeId: employee,

    }
    return this.httpClient.post<ResponseModel>(this.baseUrl + "App/CreateTask", body, {headers: header});
  }

  geTaskList(){
    let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
  const header= new HttpHeaders({
    'Authorization': `Bearer ${userInfo?.token}`
  });

    return this.httpClient.get<ResponseModel>(this.baseUrl + "App/GetTaskList", {headers: header}).pipe(map(res => {
      let taskList = new Array<Task>();
      if(res.responseCode == ResponseCode.OK){
        if(res.dataSet){
          res.dataSet.map((x: Task) => {
            taskList.push(new Task(x.name, x.description, x.submissionDate, x.employee,x.id));
          });
        }
      }
      return taskList;
    }));
  }
}
