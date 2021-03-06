import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllToursPageComponent } from './layouts/all-tours-page/all-tours-page.component';
import { TourDetailsPageComponent } from './layouts/tour-details-page/tour-details-page.component';
import { CheckoutPageComponent } from './layouts/checkout-page/checkout-page.component';
import { AuthGuard } from '../auth/guards';
import { TopFiveToursPageComponent } from './layouts/top-five-tours-page/top-five-tours-page.component';
import { MyToursPageComponent } from './layouts/my-tours-page/my-tours-page.component';


const toursRoutes: Routes = [
  { path: '', component: AllToursPageComponent },
  { path: 'top-5', component: TopFiveToursPageComponent },
  { path: 'my-tours', component: MyToursPageComponent },
  {
    path: 'stripe-checkout-page',
    component: CheckoutPageComponent,
    canActivate: [AuthGuard],
    data: { isAuthenticationRequired: true }
  },
  { path: ':slug', component: TourDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(toursRoutes)],
  exports: [RouterModule]
})
export class ToursRoutingModule {
}
