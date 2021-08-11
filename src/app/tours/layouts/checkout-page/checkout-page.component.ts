import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../reducers';
import { StripeApiActions, TourActions } from '../../store/actions';
import { PurchaseStatus } from '../../store/reducers';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  purchaseStatus = PurchaseStatus.PENDING;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.tours)
      .subscribe(toursState => this.purchaseStatus = toursState.purchaseStatus);

    console.log(this.purchaseStatus);

    const queryParams = this.route.snapshot.queryParams;

    if (queryParams['purchaseResult'] === 'success') {
      const bookingId = queryParams['booking'] || '-1';
      this.store.dispatch(StripeApiActions.purchaseSuccess({ bookingId }));
      return;
    }

    if (queryParams['purchaseResult'] === 'failed') {
      const tourSlug = queryParams['tour'] || '-1';
      this.store.dispatch(StripeApiActions.purchaseFailed({ tourSlug }));
      return;
    }

    this.store.dispatch(TourActions.redirect({ path: '/' }));
  }

}
