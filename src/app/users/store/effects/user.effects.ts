import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserApiActions, UserBookingActions } from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UsersService } from '../../services';


@Injectable()
export class UserEffects {
  getAllUserBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserBookingActions.fetchUserBookings),
      switchMap(() => {
        return this.usersService.getAllCompleteAndPaidBookings().pipe(
          map(res => res.data.data),
          map(bookings => UserApiActions.fetchBookingsSuccess({ bookings })),
          catchError(error => of(UserApiActions.fetchBookingsFailure({ error })))
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
  }
}
