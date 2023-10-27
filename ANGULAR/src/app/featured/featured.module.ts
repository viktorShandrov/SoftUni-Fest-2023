import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './public/main/main.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './public/login/login.component';
import { ProfileComponent } from './private/profile/profile.component';
import { CreateComponent } from './private/create/create.component';

@NgModule({
  declarations: [MainComponent, LoginComponent, ProfileComponent, CreateComponent],
  imports: [CommonModule, FormsModule],
})
export class FeaturedModule {}
