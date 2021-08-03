import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { TourContainerComponent } from './components/tour-container/tour-container.component';

@NgModule({
  declarations: [
    TourCardComponent,
    TourContainerComponent
  ],
  exports: [
    TourContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToursModule { }
