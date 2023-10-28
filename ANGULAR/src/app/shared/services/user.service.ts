import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {constants} from "../constants";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userRole:string
  userId:string
  constructor(
    private HttpService: HttpService,
    private ToastrService: ToastrService,
    private Router: Router
  ) {
    this.userRole=""
    this.userId=""
  }
  login(email: string, password: string) {
    this.HttpService.postRequest('api/users/login', {
      email,
      password,
    }).subscribe(
      (res: any) => {
        this.setToken(res.payload.token);
        this.setUserRole(res.payload.userRole)
        this.setUserId(res.payload.userId)
        this.Router.navigate(['/offerDetails/653bd0ce4eb65e44922a4e1b']);

      },
      (error) => {
        this.ToastrService.error(error.error.message, 'Error');
      }
    );
  }
  register(
    email: string,
    password: string,
    repeatedPassword: string,
    company: string
  ) {
    this.HttpService.postRequest('api/users/register', {
      email,
      password,
      repeatedPassword,
      company,
    }).subscribe(
      (res: any) => {
        this.setToken(res.payload.token);
        this.setUserRole(res.payload.userRole)
        this.setUserId(res.payload.userId)

      },
      (error) => {
        this.ToastrService.error(error.error.message, 'Error');
      }
    );
  }
  fetchUserInfo(){
    this.HttpService.getRequest("api/users/userInfo").subscribe(
      (res:any)=>{
        const {email,_id,userType} = res
        console.log("uswer",res)
        this.setUserRole(userType)
        this.setUserId(_id)
      },
      (error)=>{
        this.ToastrService.error(error.message,"Error")
      }
    )
  }
  setUserRole(role: string) {
    localStorage.setItem('userRole', role);
    this.userRole = role
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  setUserId(id: string) {
    localStorage.setItem('userId', id);
    this.userId = id
  }
  getUserId(id: string) {
    localStorage.getItem('userId');
  }

  getUserRole() {
    return localStorage.getItem('userRole');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
