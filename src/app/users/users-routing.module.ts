import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDashboardComponent } from './layouts/user-dashboard/user-dashboard.component';
import { UserSettingsPageComponent } from './layouts/user-settings-page/user-settings-page.component';
import { AuthGuard } from '../auth/guards';
import { UserBookingsPageComponent } from './layouts/user-bookings-page/user-bookings-page.component';
import { BookingDetailsPageComponent } from './layouts/booking-details-page/booking-details-page.component';
import { UserReviewsPageComponent } from './layouts/user-reviews-page/user-reviews-page.component';
import { UserBillingPageComponent } from './layouts/user-billing-page/user-billing-page.component';


const usersRoutes: Routes = [
  { path: '',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
    data: { isAuthenticationRequired: true },
    children: [
      { path: '', component: UserSettingsPageComponent },
      { path: 'bookings', component: UserBookingsPageComponent },
      { path: 'bookings/:id', component: BookingDetailsPageComponent },
      { path: 'reviews', component: UserReviewsPageComponent },
      { path: 'billing', component: UserBillingPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
