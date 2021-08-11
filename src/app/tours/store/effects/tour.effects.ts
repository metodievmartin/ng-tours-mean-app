import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CheckoutService, TourService } from '../../services';
import { StripeApiActions, TourActions, TourApiActions } from '../actions';
import { Router } from '@angular/router';

@Injectable()
export class TourEffects {
  getAllTours$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TourActions.fetchAllTours),
      switchMap(() => {
        return this.tourService.getAllTours().pipe(
          map(res => res.data.data),
          map(tours => TourApiActions.fetchAllToursSuccess({ tours })),
          catchError(error => of(TourApiActions.fetchAllToursFailure({ error })))
        )
      })
    )
  );

  getTopFiveTours$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TourActions.fetchTopFiveTours),
      switchMap(() => {
        return this.tourService.getTopFiveTours().pipe(
          map(res => res.data.data),
          map(topFiveTours => TourApiActions.fetchTopFiveToursSuccess({ topFiveTours })),
          catchError(error => of(TourApiActions.fetchTopFiveToursFailure({ error })))
        )
      })
    )
  )

  getOneTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TourActions.fetchTourDetails),
      switchMap(action => {
        return this.tourService.getOneTourBySlug(action.tourSlug).pipe(
          map(res => res.data.data),
          map(tour => TourApiActions.fetchOneTourSuccess({ tour })),
          catchError(error => of(TourApiActions.fetchOneTourFailure({ error })))
        )
      })
    )
  );

  startCheckout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TourActions.startCheckout),
      switchMap(action => {
        return this.checkoutService.startTourCheckoutSession(action.tourId).pipe(
          tap(res => this.checkoutService.redirectToCheckout(res.data)),
          map(res => StripeApiActions.checkoutCreationSuccess()),
          catchError(error => of(StripeApiActions.checkoutCreationFailure(error)))
        )
      })
    )
  );

  purchaseSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StripeApiActions.purchaseSuccess),
      delay(2000),
      tap(action => this.router.navigate(['/my-profile', 'bookings', action.bookingId]))
    )
  )

  purchaseFailed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StripeApiActions.purchaseFailed),
      delay(2000),
      tap(action => this.router.navigate(['/tours', action.tourSlug]))
    )
  )

  constructor(
    private actions$: Actions,
    private tourService: TourService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {
  }
}
