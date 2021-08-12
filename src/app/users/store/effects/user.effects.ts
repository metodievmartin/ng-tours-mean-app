import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions, UserApiActions, UserBookingActions } from '../actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UsersService } from '../../services';
import { AuthService } from '../../../auth/services';


@Injectable()
export class UserEffects {
  updateCurrentUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateCurrentUserInfo),
      switchMap(action => {
        return this.usersService.updateCurrentUserInfo(action.name, action.email, action.photo).pipe(
          map(res => res.data.user),
          map(user => UserApiActions.updateUserInfoSuccess({ user: user })),
          catchError(error => of(UserApiActions.updateUserInfoFailure({ error })))
        )
      })
    )
  );

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
    private usersService: UsersService,
    private authService: AuthService
  ) {
  }
}
