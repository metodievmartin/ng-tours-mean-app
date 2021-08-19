import { createAction, props } from '@ngrx/store';
import { Booking } from '../../interfaces';
import { User } from '../../../auth/interfaces';
import { Review } from '../../../tours/interfaces';


export const updateUserInfoSuccess = createAction(
  '[Users API] Update User Info Success',
  props<{ user: User}>()
);

export const updateUserInfoFailure = createAction(
  '[Users API] Update User Info Failure',
  props<{ error: any}>()
);

export const updateCurrentUserPasswordSuccess = createAction(
  '[Users API] Update User Password Success',
);

export const updateCurrentUserPasswordFailure = createAction(
  '[Users API] Update User Password Failure',
  props<{ error: any}>()
);

export const fetchBookingsSuccess = createAction(
  '[Users API] Fetch Bookings Success',
  props<{ bookings: Booking[]}>()
);

export const fetchBookingsFailure = createAction(
  '[Users API] Fetch Bookings Failure',
  props<{ error: any}>()
);

export const fetchBookingDetailsSuccess = createAction(
  '[Users API] Fetch Booking Details Success',
  props<{ bookingDetails: Booking }>()
);

export const fetchBookingDetailsFailure = createAction(
  '[Users API] Fetch Booking Details Failure',
  props<{ error: any}>()
);

export const fetchUserReviewsSuccess = createAction(
  '[Users API] Fetch User Reviews Success',
  props<{ userReviews: Review[] }>()
);

export const fetchUserReviewsFailure = createAction(
  '[Users API] Fetch User Reviews Failure',
  props<{ error: any}>()
);
