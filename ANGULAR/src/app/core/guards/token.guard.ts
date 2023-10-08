import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {constants} from "../../shared/constants";
import {UserService} from "../../shared/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

  constructor(
    private router: Router,
    private UserService: UserService,


  ) {}

  async canActivate() {
    const token = this.UserService.getToken()
    const headers:any = token ? { Authorization: token } : {};
    const response = await fetch(`${constants.API_URL}/users/isTokenValid`, {
      method: "get",
      headers:headers});

    if (!response.ok) {
      // If the response is not okay (e.g., token is invalid), navigate to a specific route.
      this.router.navigate(['/login']); // Replace '/login' with the route you want to navigate to.
      return false; // Return false to prevent access to the protected route.
    }

    return true; // Allow access to the protected route if the response is okay.
  }
}
