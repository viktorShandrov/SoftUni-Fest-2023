import {AfterViewInit, Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-payment-successfull',
  templateUrl: './payment-successfull.component.html',
  styleUrls: ['./payment-successfull.component.css']
})
export class PaymentSuccessfullComponent implements AfterViewInit{
  seconds = 5

  constructor(
    private Router:Router,
    private UserService:UserService,

  ) {
  }
ngAfterViewInit() {
  const interval = setInterval(
    ()=>{
      this.seconds-=1
      if(this.seconds==0){
        clearInterval(interval)
        this.Router.navigate(["/profile"])
      }
    },1000
  )
}
}
