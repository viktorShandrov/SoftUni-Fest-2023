import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUserId(){
    return localStorage.getItem("userId")
  }
  getToken(){
    return localStorage.getItem("token")
  }
}
