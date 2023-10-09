import { Component } from '@angular/core';
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private UserService:UserService
  ) {
    localStorage.clear()
  }
  onLoginSubmit(form:any){
    this.UserService.login(form.value.email,form.value.password)
  }
  onRegisterSubmit(form:any){
    this.UserService.register(form.value.email,form.value.password,form.value.repeatedPassword)
  }
}
