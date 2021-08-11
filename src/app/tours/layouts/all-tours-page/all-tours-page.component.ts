import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../reducers';
import { TourActions } from '../../store/actions';
import { Tour } from '../../interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tour-container',
  templateUrl: './all-tours-page.component.html',
  styleUrls: ['./all-tours-page.component.css']
})
export class AllToursPageComponent implements OnInit, OnDestroy {
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
