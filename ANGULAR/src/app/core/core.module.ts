import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiInterceptor } from './interceptors/api.interceptor';

import { AsideComponent } from './components/top/aside/aside.component';
import { SearchComponent } from './components/top/search/search.component';
import { TopComponent } from './components/top/top.component';
import { UsersComponent } from './components/bottom/users/users.component';

@NgModule({
  declarations: [AsideComponent, SearchComponent, TopComponent, UsersComponent],
  imports: [CommonModule],
  exports: [AsideComponent, SearchComponent, TopComponent, UsersComponent],
})
export class CoreModule {}
