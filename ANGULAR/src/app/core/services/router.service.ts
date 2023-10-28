import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

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
