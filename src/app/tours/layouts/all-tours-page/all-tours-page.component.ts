import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../+store/reducers';
import { TourActions } from '../../+store/actions';
import { Tour } from '../../interfaces';
import { Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-tour-container',
  templateUrl: './all-tours-page.component.html',
  styleUrls: ['./all-tours-page.component.css']
})
export class AllToursPageComponent implements OnInit, OnDestroy {
  tourImagesUrl = environment.restApiHost + environment.tourImg;
  tours: Tour[] = [];
  loading: boolean = false;
  storeSubscription: Subscription | undefined;

  constructor(
    public store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.storeSubscription = this.store
      .select(state => state.tours)
      .subscribe(toursState => {
        this.tours = toursState.tours;
        this.loading = toursState.loading;
      });

    this.store.dispatch(TourActions.fetchAllTours());
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

}
