import { createAction, props } from '@ngrx/store';


export const checkoutCreationFailure = createAction(
  '[Stripe API] Checkout Creation Failure',
  props<{ error: any }>()
);

export const checkoutCreationSuccess = createAction(
  '[Stripe API] Checkout Creation Success'
);

export const purchaseSuccess = createAction(
  '[Stripe API] Purchase Success',
  props<{ bookingId: string }>()
);

export const purchaseFailed = createAction(
  '[Stripe API] Purchase Failed',
  props<{ tourSlug: string }>()
);
