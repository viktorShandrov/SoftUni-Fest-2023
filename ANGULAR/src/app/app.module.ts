import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FeaturedModule } from './featured/featured.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
=======
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {FeaturedModule} from "./featured/featured.module";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ApiInterceptor} from "./core/interceptors/api.interceptor";
import {TokenInterceptor} from "./core/interceptors/token.interceptor";
>>>>>>> Stashed changes

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    CoreModule,
    HttpClientModule,
    FeaturedModule,
    FormsModule,
  ],
<<<<<<< Updated upstream
  providers: [],
  bootstrap: [AppComponent],
=======
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true, // Set multi to true to allow multiple interceptors
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true, // Set multi to true to allow multiple interceptors
    },
  ],
  bootstrap: [AppComponent]
>>>>>>> Stashed changes
})
export class AppModule {}
