import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(
    private HttpService:HttpService
  ) {
    this.HttpService.postRequest("api/users/login",{email:"viktor@abv.bg",password:"ivan1123"}).subscribe(
      (res)=>{
        console.log(res)
      },
      (error)=>{
        console.log(error.error.message)
      }
    )
  }

}
