import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {TokenInterceptor} from "./interseptors/token.interceptor";
import {BottomComponent} from "./components/bottom/bottom.component";
import {UsersComponent} from "./components/bottom/users/users.component";

@NgModule({
  declarations: [BottomComponent,UsersComponent,UsersComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class CoreModule {}
