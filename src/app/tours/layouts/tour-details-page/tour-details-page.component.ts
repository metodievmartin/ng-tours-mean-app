import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import * as fromApp from '../../../reducers';
import { TourActions } from '../../store/actions';
import { Tour } from '../../interfaces';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details-page.component.html',
  styleUrls: ['./tour-details-page.component.css']
})
export class TourDetailsPageComponent implements OnInit, OnDestroy {
  storeSubscription: Subscription | undefined;
  tourImagesUrl = environment.restApiHost + environment.tourImg;
  userImagesUrl = environment.restApiHost + environment.userImg;
  tour: Tour | null = null;
  loading: boolean = false;
  isAuthenticated: boolean = false;
  isPurchaseStarted = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.storeSubscription = this.store.select(state => state)
      .subscribe(state => {
        this.tour = state.tours.tourDetails;
        this.loading = state.tours.loading;
        this.isPurchaseStarted = state.tours.isPurchaseStarted;
        this.isAuthenticated = state.auth.isAuthenticated
      });

    const tourSlug = this.route.snapshot.params.slug;
    this.store.dispatch(
      TourActions.fetchTourDetails({ tourSlug })
    );
  }

  purchaseTour() {
    if (!this.isAuthenticated) {
      return;
    }

    this.store.dispatch(TourActions.startCheckout({ tourId: this.tour?._id || '-1' }));
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
