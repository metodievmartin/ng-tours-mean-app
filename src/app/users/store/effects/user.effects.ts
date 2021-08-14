import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions, UserApiActions, UserBookingActions, UserReviewActions } from '../actions';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

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
          catchError(err => {
            const error = this.mapErrorMessage(err);
            return of(UserApiActions.updateUserInfoFailure({ error }))
          })
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
          catchError(err => {
            const error = this.mapErrorMessage(err);
            return of(UserApiActions.updateCurrentUserPasswordFailure({ error }))
          })
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
          catchError(err => {
            const error = this.mapErrorMessage(err);
            return of(UserApiActions.fetchBookingDetailsFailure({ error }))
          })
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
          catchError(err => {
            const error = this.mapErrorMessage(err);
            return of(UserApiActions.fetchBookingsFailure({ error }))
          })
        )
      })
    )
  );

  getCurrentUserReviews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserReviewActions.fetchUserReviews),
      switchMap(() => {
        return this.usersService.getCurrentUserReviews().pipe(
          map(res => res.data.data),
          map(userReviews => UserApiActions.fetchUserReviewsSuccess({ userReviews })),
          catchError(err => {
            const error = this.mapErrorMessage(err);
            return of(UserApiActions.fetchUserReviewsFailure({ error }))
          })
        )
      })
    )
  );

  onAlertDisplayed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.notificationDisplayed),
      delay(4000),
      map(() => UserActions.clearNotification())
    )
  );

  private mapErrorMessage(error: any): string {
    let errorMsg = 'Something went wrong. Please try again later';

    if (error.statusText !== 'Unknown Error') {
      errorMsg = error.error.message;
    }

    return errorMsg;
  }

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
  ) {
  }
}
