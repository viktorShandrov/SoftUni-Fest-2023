import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {FeaturedModule} from "./featured/featured.module";
import {FormsModule} from "@angular/forms";
import { TopComponent } from './top/top.component';
import { SearchComponent } from './search/search.component';
import { AsideComponent } from './aside/aside.component';
import { BottomComponent } from './bottom/bottom.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SearchComponent,
    AsideComponent,
    BottomComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FeaturedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
