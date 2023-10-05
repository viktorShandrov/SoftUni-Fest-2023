import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { FormDirective } from './directives/form.directive';

@NgModule({
  declarations: [MainComponent, FormDirective],
  imports: [CommonModule, SharedModule],
})
export class FeaturedModule {}
