import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TourContainerComponent } from './components/tour-container/tour-container.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from '../auth/guards';


const toursRoutes: Routes = [
  { path: '', component: TourContainerComponent },
  { path: 'stripe-checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: ':slug', component: TourDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(toursRoutes)],
  exports: [RouterModule]
})
export class ToursRoutingModule {
}
