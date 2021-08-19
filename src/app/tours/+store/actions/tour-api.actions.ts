import { createAction, props } from '@ngrx/store';
import { Tour } from '../../interfaces';

export const fetchAllToursSuccess = createAction(
  '[Tour API] Fetch All Tours Success',
  props<{ tours: Tour[] }>()
);

export const fetchAllToursFailure = createAction(
  '[Tour API] Fetch All Tours Failure',
  props<{ error: any }>()
);

export const fetchTopFiveToursSuccess = createAction(
  '[Tour API] Fetch Top 5 Tours Success',
  props<{ topFiveTours: Tour[] }>()
);

export const fetchTopFiveToursFailure = createAction(
  '[Tour API] Fetch Top 5 Tours Failure',
  props<{ error: any }>()
);

export const fetchMyToursSuccess = createAction(
  '[Tour API] Fetch My Tours Success',
  props<{ myTours: Tour[] }>()
);

export const fetchMyToursFailure = createAction(
  '[Tour API] Fetch My Tours Failure',
  props<{ error: any }>()
);

export const fetchOneTourSuccess = createAction(
  '[Tour API] Fetch One Tour Success',
  props<{ tour: Tour }>()
);

export const fetchOneTourFailure = createAction(
  '[Tour API] Fetch One Tour Failure',
  props<{ error: any }>()
);
