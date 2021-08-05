import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { TourContainerComponent } from './components/tour-container/tour-container.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { ToursRoutingModule } from './tours-routing.module';
import { RouterModule } from '@angular/router';
import { TourCardHeaderComponent } from './components/tour-card/tour-card-header/tour-card-header.component';
import { TourCardDetailsComponent } from './components/tour-card/tour-card-details/tour-card-details.component';
import { TourCardFooterComponent } from './components/tour-card/tour-card-footer/tour-card-footer.component';

@NgModule({
  declarations: [
    TourCardComponent,
    TourContainerComponent,
    TourDetailsComponent,
    TourCardHeaderComponent,
    TourCardDetailsComponent,
    TourCardFooterComponent
  ],
  exports: [
    TourContainerComponent,
    TourDetailsComponent
  ],
  imports: [
    CommonModule,
    ToursRoutingModule
  ]
})
export class ToursModule { }
