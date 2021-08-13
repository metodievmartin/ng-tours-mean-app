import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../reducers';
import { Booking } from '../../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { UserBookingActions } from '../../../store/actions';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details-page.component.html',
  styleUrls: ['./booking-details-page.component.css']
})
export class BookingDetailsPageComponent implements OnInit {
  tourImagesUrl = environment.restApiHost + environment.tourImg;
  userImagesUrl = environment.restApiHost + environment.userImg;
  booking: Booking | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    public store: Store<fromApp.AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.users)
      .subscribe(usersState => {
        this.booking = usersState.bookingDetails;
        this.loading = usersState.loading;
        this.error = usersState.error;
      });

    const bookingId = this.route.snapshot.paramMap.get('id') || '-1';

    this.store.dispatch(UserBookingActions.fetchBookingDetails({ bookingId }))
  }

}
