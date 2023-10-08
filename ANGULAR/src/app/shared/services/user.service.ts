import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private HttpService:HttpService,
    private Router:Router,
  ) {

  }
  login(email:string,password:string){
    this.HttpService.postRequest("api/users/login",{email,password}).subscribe(
      (res:any)=>{
        this.setToken(res.payload.token)
        this.setUserId(res.payload.userId)
        this.Router.navigate(["/chats"])
    },
    (error)=>{
      console.log(error)
    }
    )
  }
  setUserId(userId:string){
    localStorage.setItem("userId",userId)
  }
  setToken(token:string){
    localStorage.setItem("token",token)
  }
  getUserId(){
    return localStorage.getItem("userId")
  }
  getToken(){
    return localStorage.getItem("token")
  }
}
