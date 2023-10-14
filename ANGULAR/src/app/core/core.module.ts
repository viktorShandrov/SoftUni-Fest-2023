import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiInterceptor } from './interceptors/api.interceptor';

import { AsideComponent } from './components/top/aside/aside.component';
import { SearchComponent } from './components/top/search/search.component';
import { TopComponent } from './components/top/top.component';
import { UsersComponent } from './components/bottom/users/users.component';
import { SharedModule } from '../shared/shared.module';
import { AsideJoinRoomMenuComponent } from './components/top/aside-join-room-menu/aside-join-room-menu.component';
import { AsideMenuBtnDirective } from './directives/aside-menu-btn.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AsideComponent,
    SearchComponent,
    TopComponent,
    UsersComponent,
    AsideJoinRoomMenuComponent,
    AsideMenuBtnDirective,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [
    AsideComponent,
    SearchComponent,
    TopComponent,
    UsersComponent,
    AsideJoinRoomMenuComponent,
  ],
})
export class CoreModule {}
