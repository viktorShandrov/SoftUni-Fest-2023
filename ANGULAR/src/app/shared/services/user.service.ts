import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private HttpService: HttpService,
    private ToastrService: ToastrService,
    private Router: Router
  ) {}
  login(email: string, password: string) {
    this.HttpService.postRequest('api/users/login', {
      email,
      password,
    }).subscribe(
      (res: any) => {
        this.setToken(res.payload.token);
        this.setUserId(res.payload.userId);
        this.Router.navigate(['/chats']);
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
        this.setToken(res.token);
       
      },
      (error) => {
        this.ToastrService.error(error.error.message, 'Error');
      }
    );
  }
  setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getUserId() {
    return localStorage.getItem('userId');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
