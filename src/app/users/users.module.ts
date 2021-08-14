import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UsersRoutingModule } from './users-routing.module';
import { SideNavItemComponent } from './components/user-profile/side-nav/side-nav-item/side-nav-item.component';
import { SideNavComponent } from './components/user-profile/side-nav/side-nav.component';
import { UserSettingsComponent } from './components/user-profile/user-settings/user-settings.component';
import { UserBookingsComponent } from './components/user-profile/user-bookings/user-bookings.component';
import { BookingItemComponent } from './components/user-profile/booking-item/booking-item.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsPageComponent } from './components/user-profile/booking-details-page/booking-details-page.component';
import { UserReviewsPageComponent } from './layouts/user-reviews-page/user-reviews-page.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    SideNavComponent,
    SideNavItemComponent,
    UserSettingsComponent,
    UserBookingsComponent,
    BookingItemComponent,
    BookingDetailsPageComponent,
    UserReviewsPageComponent,
    ReviewItemComponent
  ],
  exports: [
    UserProfileComponent
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
