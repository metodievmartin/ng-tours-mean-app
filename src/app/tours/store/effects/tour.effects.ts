import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { TourService } from '../../services';
import { TourActions, TourApiActions } from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

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

  constructor(
    private actions$: Actions,
    public tourService: TourService,
  ) { }
}
