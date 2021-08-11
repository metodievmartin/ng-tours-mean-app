import { createAction, props } from '@ngrx/store';


export const fetchAllTours = createAction(
  '[All Tours Page] Fetch All Tours'
);

export const fetchTourDetails = createAction(
  '[Tour Details Page] Fetch Tour Details',
  props<{ tourSlug: string }>()
);

export const startCheckout = createAction(
  '[Tour Details Page] Start Checkout',
  props<{ tourId: string }>()
);

export const redirect = createAction(
  '[Tour Details Page] Redirect',
  props<{ path: string }>()
);





