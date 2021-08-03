import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { TourContainerComponent } from './components/tour-container/tour-container.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';
import { ToursRoutingModule } from './tours-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TourCardComponent,
    TourContainerComponent,
    TourDetailsComponent
  ],
  exports: [
    TourContainerComponent,
    TourDetailsComponent
  ],
  imports: [
    CommonModule,
    ToursRoutingModule,
    RouterModule
  ]
})
export class ToursModule { }
