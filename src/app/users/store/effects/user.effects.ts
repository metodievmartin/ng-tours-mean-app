import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions, UserApiActions, UserBookingActions } from '../actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { UsersService } from '../../services';
import { AuthApiActions } from '../../../auth/store/actions';


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

  updateCurrentUserPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateCurrentUserPassword),
      switchMap(action => {
        return this.usersService.updateCurrentUserPassword(
          action.currentPassword, action.newPassword, action.passwordConfirm).pipe(
            switchMap(authResponse => of(
              UserApiActions.updateCurrentUserPasswordSuccess(),
              AuthApiActions.authSuccess({ authResponse, redirect: false })
            )),
          catchError(error => of(UserApiActions.updateCurrentUserPasswordFailure({ error })))
        )
      })
    )
  );

  getBookingDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserBookingActions.fetchBookingDetails),
      switchMap(action => {
        return this.usersService.getBookingDetails(action.bookingId).pipe(
          map(res => res.data.data),
          map(bookingDetails => UserApiActions.fetchBookingDetailsSuccess({ bookingDetails })),
          catchError(error => of(UserApiActions.fetchBookingDetailsFailure({ error })))
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
  ) {
  }
}
