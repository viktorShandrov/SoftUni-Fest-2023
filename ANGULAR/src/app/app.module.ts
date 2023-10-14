import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FeaturedModule } from './featured/featured.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FeaturedModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor, // Use your interceptor class here
      multi: true, // Set this to true to allow multiple interceptors
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor, // Use your interceptor class here
      multi: true, // Set this to true to allow multiple interceptors
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
