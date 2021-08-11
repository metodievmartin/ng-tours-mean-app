import { createAction, props } from '@ngrx/store';
import { Booking } from '../../interfaces';


export const fetchBookingsSuccess = createAction(
  '[Users API] Fetch Bookings Success',
  props<{ bookings: Booking[]}>()
);

export const fetchBookingsFailure = createAction(
  '[Users API] Fetch Bookings Failure',
  props<{ error: any}>()
);
