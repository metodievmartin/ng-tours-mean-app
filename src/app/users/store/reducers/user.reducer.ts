import { createReducer, on } from '@ngrx/store';

import { UserActions, UserApiActions, UserBookingActions } from '../actions';
import { Booking } from '../../interfaces';

export interface State {
  bookings: Booking[]
  error: string | null;
  loading: boolean;
}

export const initialState: State = {
  bookings: [],
  error: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(
    UserActions.updateUserInfo,
    UserActions.updateUserPassword,
    (state) => ({
      ...state,
      error: null,
      loading: true,
    })),

  on(UserBookingActions.fetchUserBookings, (state) => ({
    ...state,
    error: null,
    loading: true
  })),

  on(UserApiActions.fetchBookingsSuccess, (state, { bookings }) => ({
    ...state,
    bookings: bookings,
    error: null,
    loading: false
  })),

  on(UserApiActions.fetchBookingsFailure, (state, { error }) => ({
    ...state,
    bookings: [],
    error,
    loading: false
  }))
);
