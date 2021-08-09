import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TourContainerComponent } from './components/tour-container/tour-container.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';


const toursRoutes: Routes = [
  { path: '', component: TourContainerComponent },
  { path: ':slug', component: TourDetailsComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(toursRoutes)],
  exports: [RouterModule]
})
export class ToursRoutingModule {
}
