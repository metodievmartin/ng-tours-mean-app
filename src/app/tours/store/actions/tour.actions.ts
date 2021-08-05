import { createAction, props } from '@ngrx/store';

export const fetchAllTours = createAction(
  '[All Tours Page] Fetch All Tours'
);

export const fetchTourDetails = createAction(
  '[Tour Details Page] Fetch Tour Details',
  props<{ tourId: string }>()
);
