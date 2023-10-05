import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './core/interseptors/token.interceptor';
import { ApiInterceptor } from './core/interseptors/api.interceptor';
import { SearchComponent } from './search/search.component';
import { AsideComponent } from './aside/aside.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, AsideComponent, UsersComponent, UserComponent, TopComponent, BottomComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
