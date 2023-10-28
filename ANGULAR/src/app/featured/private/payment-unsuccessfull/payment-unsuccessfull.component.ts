import {AfterViewInit, Component} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-unsuccessfull',
  templateUrl: './payment-unsuccessfull.component.html',
  styleUrls: ['./payment-unsuccessfull.component.css']
})
export class PaymentUnsuccessfullComponent implements AfterViewInit{
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
          this.Router.navigate(["/profile",this.UserService.userId])
        }
      },1000
    )
  }
}
