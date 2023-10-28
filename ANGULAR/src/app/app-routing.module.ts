import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './featured/public/login/login.component';
import { CatalogComponent } from './featured/private/catalog/catalog.component';
import { CreateComponent } from './featured/private/create/create.component';
import { DetailsComponent } from './featured/private/details/details.component';
import { ProfileComponent } from './featured/private/profile/profile.component';
import { RegisterComponent } from './featured/public/register/register.component';
import { PaymentSuccessfullComponent } from './featured/private/payment-successfull/payment-successfull.component';
import { PaymentUnsuccessfullComponent } from './featured/private/payment-unsuccessfull/payment-unsuccessfull.component';
import { HomeComponent } from './featured/private/home/home.component';
import {TestComponent} from "./core/components/test/test.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent,
  },
  {
    path: 'catalog',
    pathMatch: 'full',
    component: CatalogComponent,
  },
  {
    path: 'profile/:id',
    pathMatch: 'full',
    component: ProfileComponent,
  },
  {
    path: 'createOffer',
    pathMatch: 'full',
    component: CreateComponent,
  },
  {
    path: 'offerDetails/:id',
    pathMatch: 'full',
    component: DetailsComponent,
  },
  {
    path: 'successfulPayment',
    pathMatch: 'full',
    component: PaymentSuccessfullComponent,
  },
  {
    path: 'unsuccessfulPayment',
    pathMatch: 'full',
    component: PaymentUnsuccessfullComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'test',
    pathMatch: 'full',
    component: TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
