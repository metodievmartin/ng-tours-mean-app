import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { TourContainerComponent } from './components/tour-container/tour-container.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { ToursRoutingModule } from './tours-routing.module';
import { TourCardHeaderComponent } from './components/tour-card/tour-card-header/tour-card-header.component';
import { TourCardDetailsComponent } from './components/tour-card/tour-card-details/tour-card-details.component';
import { TourCardFooterComponent } from './components/tour-card/tour-card-footer/tour-card-footer.component';
import { EffectsModule } from '@ngrx/effects';
import { TourEffects } from './store/effects';
import { SharedModule } from '../shared/shared.module';
import { TourDetailsHeaderComponent } from './components/tour-details/tour-details-header/tour-details-header.component';
import { TourDetailsDescriptionComponent } from './components/tour-details/tour-details-description/tour-details-description.component';
import { TourDetailsPicturesComponent } from './components/tour-details/tour-details-pictures/tour-details-pictures.component';
import { TourDetailsMapComponent } from './components/tour-details/tour-details-map/tour-details-map.component';
import { TourDetailsReviewsComponent } from './components/tour-details/tour-details-reviews/tour-details-reviews.component';
import { TourDetailsCtaComponent } from './components/tour-details/tour-details-cta/tour-details-cta.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    TourCardComponent,
    TourContainerComponent,
    TourDetailsComponent,
    TourCardHeaderComponent,
    TourCardDetailsComponent,
    TourCardFooterComponent,
    TourDetailsHeaderComponent,
    TourDetailsDescriptionComponent,
    TourDetailsPicturesComponent,
    TourDetailsMapComponent,
    TourDetailsReviewsComponent,
    TourDetailsCtaComponent,
    CheckoutComponent
  ],
  exports: [
    TourContainerComponent,
    TourDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToursRoutingModule,
    EffectsModule.forFeature([TourEffects]),
  ]
})
export class ToursModule { }
