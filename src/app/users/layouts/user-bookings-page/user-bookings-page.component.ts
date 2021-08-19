import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../+store/reducers';
import { Booking } from '../../interfaces';
import { UserBookingActions } from '../../+store/actions';
import { environment } from '../../../../environments/environment';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings-page.component.html',
  styleUrls: ['./user-bookings-page.component.css']
})
export class UserBookingsPageComponent implements OnInit, OnDestroy {
  storeSubscription: Subscription | undefined;
  tourImagesUrl = environment.restApiHost + environment.tourImg;
  bookings: Booking[] = [];
  loading = false;

  constructor(
    public store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit(): void {
    this.storeSubscription = this.store.select(state => state.users)
      .subscribe(usersState => {
        this.bookings = usersState.bookings;
        this.loading = usersState.loading;
      });

    this.store.dispatch(UserBookingActions.fetchUserBookings());
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

}
