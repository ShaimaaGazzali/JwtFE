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
export class UserService {

  private readonly baseUrl: string = "https://localhost:44359/api/";
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    const body = {
      Email: email,
      Password: password
    }
    return this.httpClient.post<ResponseModel>(this.baseUrl + "user/Login", body);
  }

  register(fullName: string, email: string, password: string, rol: string,birthday:string ,mobile:string){
    const body = {
      FullName: fullName,
      Email: email,
      Password: password,
      Role: rol,
      Birthday:birthday,
      Mobile:mobile
    }
    return this.httpClient.post<ResponseModel>(this.baseUrl + "user/RegisterUser", body);
  }

  getAllUsers(){
    let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
  const header= new HttpHeaders({
    'Authorization': `Bearer ${userInfo?.token}`
  });

    return this.httpClient.get<ResponseModel>(this.baseUrl + "user/GetAllUsers", {headers: header}).pipe(map(res => {
      let userList = new Array<User>();
      if(res.responseCode == ResponseCode.OK){
        if(res.dataSet){
          res.dataSet.map((x: User) => {
            userList.push(new User(x.fullName, x.email, x.userName, x.role,x.id));
          });
        }
      }
      return userList;
    }));
  }

  getAllRoles(){
    let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
  const header= new HttpHeaders({
    'Authorization': `Bearer ${userInfo?.token}`
  });

    return this.httpClient.get<ResponseModel>(this.baseUrl + "user/GetRoles", {headers: header}).pipe(map(res => {
      let roleList = new Array<Role>();
      if(res.responseCode == ResponseCode.OK){
        if(res.dataSet){
          res.dataSet.map((x: string) => {
            roleList.push(new Role(x));
          });
        }
      }
      return roleList;
    }));
  }

  getUserList(){
    let userInfo = JSON.parse(localStorage.getItem(Constants.USER_KEY));
  const header= new HttpHeaders({
    'Authorization': `Bearer ${userInfo?.token}`
  });

    return this.httpClient.get<ResponseModel>(this.baseUrl + "user/GetUserList", {headers: header}).pipe(map(res => {
      let userList = new Array<User>();
      if(res.responseCode == ResponseCode.OK){
        if(res.dataSet){
          res.dataSet.map((x: User) => {
            userList.push(new User(x.fullName, x.email, x.userName, x.role,x.id));
          });
        }
      }
      return userList;
    }));
  }
}
