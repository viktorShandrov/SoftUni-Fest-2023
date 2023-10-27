import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './public/main/main.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './public/login/login.component';

@NgModule({
  declarations: [MainComponent, LoginComponent],
  imports: [CommonModule, FormsModule],
})
export class FeaturedModule {}
