import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './public/main/main.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './public/login/login.component';
import { ProfileComponent } from './private/profile/profile.component';
import { CreateComponent } from './private/create/create.component';
import { CatalogComponent } from './private/catalog/catalog.component';
import { DetailsComponent } from './private/details/details.component';
import { RegisterComponent } from './public/register/register.component';
import { CoreModule } from '../core/core.module';
import { RouterService } from '../core/services/router.service';
import { AppRoutingModule } from '../app-routing.module';
import { PaymentSuccessfullComponent } from './private/payment-successfull/payment-successfull.component';
import { PaymentUnsuccessfullComponent } from './private/payment-unsuccessfull/payment-unsuccessfull.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    ProfileComponent,
    CreateComponent,
    CatalogComponent,
    DetailsComponent,
    RegisterComponent,
    PaymentSuccessfullComponent,
    PaymentUnsuccessfullComponent,
  ],
  imports: [CommonModule, FormsModule, CoreModule, AppRoutingModule],
  providers: [RouterService],
})
export class FeaturedModule {}
