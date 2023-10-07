import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, FormsModule, CoreModule],
  exports: []
})
export class FeaturedModule {}
