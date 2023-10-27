import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import {RouterService} from "./services/router.service";

@NgModule({
  providers:[RouterService],
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
