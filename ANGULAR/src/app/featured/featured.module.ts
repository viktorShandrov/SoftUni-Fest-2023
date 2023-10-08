import { NgModule } from '@angular/core';

import { MainComponent } from './private/main/main.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './public/login/login.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [MainComponent, LoginComponent],
  imports: [CommonModule, FormsModule, CoreModule, SharedModule],
  exports: []
})
export class FeaturedModule {}
