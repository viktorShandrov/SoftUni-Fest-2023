import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FeaturedModule } from './featured/featured.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { RouterService } from './core/services/router.service';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 3000, // 3 seconds
      closeButton: true,
    }),
    NgxStripeModule.forRoot('pk_test_51O65tmIWMDM378cGRAgjeJJ5WiGHwP0VCXilUyQMEnDvMBfgxXNvTrEHohOLklESpA8eIqxSr4fLsPXek25fSinj00hBnfbcXY'),
    SharedModule,
    CoreModule,
    HttpClientModule,
    FeaturedModule,
    FormsModule,
  ],

  providers: [
    RouterService,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
