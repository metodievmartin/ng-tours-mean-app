import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import * as fromApp from '../../../reducers';
import { TourActions } from '../../store/actions';
import { Tour } from '../../interfaces';
import { environment } from '../../../../environments/environment';
import { CheckoutService } from '../../services';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  tourImagesUrl = environment.restApiHost + environment.tourImg;
  tour: Tour | null = null;
  loading: boolean = false;
  isAuthenticated: boolean = false;
  isPurchaseStarted = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private checkout: CheckoutService
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.tours)
      .subscribe(toursState => {
        this.tour = toursState.tourDetails;
        this.loading = toursState.loading;
        this.isPurchaseStarted = toursState.isPurchaseStarted;
      });

    this.store.select(state => state.auth)
      .subscribe(authState => this.isAuthenticated = authState.isAuthenticated)

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
}
