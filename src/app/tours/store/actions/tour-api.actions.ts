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

export const fetchOneTourSuccess = createAction(
  '[Tour API] Fetch One Tour Success'
);
