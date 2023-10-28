import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  publicRoutes = ["login","register","home"]
  constructor(
    private router: Router,
    private UserService: UserService,

  ) {

    // Subscribe to the NavigationEnd event
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if it's the initial navigation
        if (event.id === 1) {

          console.log("initial load")
          // Perform your action here
          this.setUserInfo();
        }


        console.log(event.url)
        if(!this.publicRoutes.includes(event.url.split("/")[0])){

          if(!localStorage.getItem("token")){
            this.router.navigate(['/login'])
          }
        }
      }
    });
  }
  log(){
    console.log(null)
  }

  private setUserInfo() {
    this.UserService.fetchUserInfo()
  }

}
