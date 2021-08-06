import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { TourService } from '../../services';
import { TourActions, TourApiActions } from '../actions';

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

  getOneTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TourActions.fetchTourDetails),
      switchMap(action => {
        return this.tourService.getOneTour(action.tourSlug).pipe(
          map(res => res.data.data),
          map(tour => TourApiActions.fetchOneTourSuccess({ tour })),
          catchError(error => of(TourApiActions.fetchOneTourFailure({ error })))
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    public tourService: TourService,
  ) {
  }
}
