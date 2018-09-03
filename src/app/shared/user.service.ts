import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:64401';
  constructor(private http : HttpClient) { }

  registerUser(user : User){
    const body: User = {
      ID:null,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Mobile: user.Mobile,
      Password: user.Password,
      Email: user.Email,
      IsActive : true,
      IsAdmin : true
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'})
    return this.http.post(this.rootUrl + '/api/Login/Register', body,{headers:reqHeader});
  }

  userAuthentication(username, password){
    var data ="username="+username+"&password="+password+"&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','No-Auth':'True'})
    return this.http.post(this.rootUrl + '/token', data,{headers:reqHeader});
  }
  
  GetUserDetail()
  {
   return this.http.get(this.rootUrl+'/api/Login/GetUserDetail')
  }

}
