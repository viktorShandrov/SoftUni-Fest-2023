import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './public/main/main.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './public/login/login.component';
import { ProfileComponent } from './private/profile/profile.component';
import { CreateComponent } from './private/create/create.component';
import { CatalogComponent } from './private/catalog/catalog.component';
import { DetailsComponent } from './private/details/details.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    ProfileComponent,
    CreateComponent,
    CatalogComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
})
export class FeaturedModule {}
