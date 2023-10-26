import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./featured/public/main/main.component";
import {LoginComponent} from "./featured/public/login/login.component";

const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo:"/login"
  },
  {
    path:"login",
    pathMatch: "full",
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
