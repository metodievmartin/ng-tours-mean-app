import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { AllToursPageComponent } from './layouts/all-tours-page/all-tours-page.component';
import { TourDetailsPageComponent } from './layouts/tour-details-page/tour-details-page.component';
import { ToursRoutingModule } from './tours-routing.module';
import { TourCardHeaderComponent } from './components/tour-card/tour-card-header/tour-card-header.component';
import { TourCardDetailsComponent } from './components/tour-card/tour-card-details/tour-card-details.component';
import { TourCardFooterComponent } from './components/tour-card/tour-card-footer/tour-card-footer.component';
import { EffectsModule } from '@ngrx/effects';
import { TourEffects } from './store/effects';
import { SharedModule } from '../shared/shared.module';
import { TourDetailsHeaderComponent } from './components/tour-details-header/tour-details-header.component';
import { TourDetailsDescriptionComponent } from './components/tour-details-description/tour-details-description.component';
import { TourDetailsPicturesComponent } from './components/tour-details-pictures/tour-details-pictures.component';
import { TourDetailsMapComponent } from './components/tour-details-map/tour-details-map.component';
import { TourDetailsReviewsComponent } from './components/tour-details-reviews/tour-details-reviews.component';
import { TourDetailsCtaComponent } from './components/tour-details-cta/tour-details-cta.component';
import { CheckoutPageComponent } from './layouts/checkout-page/checkout-page.component';

@NgModule({
  declarations: [
    TourCardComponent,
    AllToursPageComponent,
    TourDetailsPageComponent,
    TourCardHeaderComponent,
    TourCardDetailsComponent,
    TourCardFooterComponent,
    TourDetailsHeaderComponent,
    TourDetailsDescriptionComponent,
    TourDetailsPicturesComponent,
    TourDetailsMapComponent,
    TourDetailsReviewsComponent,
    TourDetailsCtaComponent,
    CheckoutPageComponent
  ],
  exports: [
    AllToursPageComponent,
    TourDetailsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToursRoutingModule,
    EffectsModule.forFeature([TourEffects]),
  ]
})
export class ToursModule { }
