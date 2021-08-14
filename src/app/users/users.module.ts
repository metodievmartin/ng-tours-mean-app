import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './layouts/user-dashboard/user-dashboard.component';
import { UsersRoutingModule } from './users-routing.module';
import { SideNavItemComponent } from './components/side-nav-item/side-nav-item.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { UserSettingsPageComponent } from './layouts/user-settings-page/user-settings-page.component';
import { UserBookingsPageComponent } from './layouts/user-bookings-page/user-bookings-page.component';
import { BookingItemComponent } from './components/booking-item/booking-item.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsPageComponent } from './layouts/booking-details-page/booking-details-page.component';
import { UserReviewsPageComponent } from './layouts/user-reviews-page/user-reviews-page.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { UserBillingPageComponent } from './layouts/user-billing-page/user-billing-page.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    SideNavComponent,
    SideNavItemComponent,
    UserSettingsPageComponent,
    UserBookingsPageComponent,
    BookingItemComponent,
    BookingDetailsPageComponent,
    UserReviewsPageComponent,
    ReviewItemComponent,
    UserBillingPageComponent
  ],
  exports: [
    UserDashboardComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        EffectsModule.forFeature([UserEffects]),
        SharedModule,
        ReactiveFormsModule
    ]
})
export class UsersModule {
}
