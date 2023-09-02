import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../Models/responseModel';
import { map } from 'rxjs/operators';
import { ResponseCode } from '../enum/responseCode';
import { User } from '../Models/user';
import { Observable } from 'rxjs';
import { Constants } from '../helper/constants';
import { Role } from '../Models/role';

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

  // getAllUsers(){
  //   let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
  // const header= new HttpHeaders({
  //   'Authorization': `Bearer ${userInfo?.token}`
  // });

  //   return this.httpClient.get<ResponseModel>(this.baseUrl + "user/GetAllUsers", {headers: header}).pipe(map(res => {
  //     let userList = new Array<User>();
  //     if(res.responseCode == ResponseCode.OK){
  //       if(res.dataSet){
  //         res.dataSet.map((x: User) => {
  //           userList.push(new User(x.fullName, x.email, x.userName, x.role));
  //         });
  //       }
  //     }
  //     return userList;
  //   }));
  // }

  // getAllRoles(){
  //   let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
  // const header= new HttpHeaders({
  //   'Authorization': `Bearer ${userInfo?.token}`
  // });

  //   return this.httpClient.get<ResponseModel>(this.baseUrl + "user/GetRoles", {headers: header}).pipe(map(res => {
  //     let roleList = new Array<Role>();
  //     if(res.responseCode == ResponseCode.OK){
  //       if(res.dataSet){
  //         res.dataSet.map((x: string) => {
  //           roleList.push(new Role(x));
  //         });
  //       }
  //     }
  //     return roleList;
  //   }));
  // }

  // getUserList(){
  //   let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
  // const header= new HttpHeaders({
  //   'Authorization': `Bearer ${userInfo?.token}`
  // });

  //   return this.httpClient.get<ResponseModel>(this.baseUrl + "user/GetUserList", {headers: header}).pipe(map(res => {
  //     let userList = new Array<User>();
  //     if(res.responseCode == ResponseCode.OK){
  //       if(res.dataSet){
  //         res.dataSet.map((x: User) => {
  //           userList.push(new User(x.fullName, x.email, x.userName, x.role));
  //         });
  //       }
  //     }
  //     return userList;
  //   }));
  // }
}
