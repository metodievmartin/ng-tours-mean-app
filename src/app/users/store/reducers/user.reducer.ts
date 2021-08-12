import { createReducer, on } from '@ngrx/store';

import { UserActions, UserApiActions, UserBookingActions } from '../actions';
import { Booking } from '../../interfaces';

const updateUserInfoSuccess = 'Details updated successfully ';
const updateUserPasswordSuccess = 'Password updated successfully ';

export interface State {
  bookings: Booking[];
  notification: string | null;
  error: string | null;
  loading: boolean;
}

export const initialState: State = {
  bookings: [],
  notification: null,
  error: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(
    UserActions.updateCurrentUserInfo,
    UserActions.updateCurrentUserPassword,
    (state) => ({
      ...state,
      error: null,
      loading: true,
    })),

  on(UserApiActions.updateUserInfoSuccess, (state) => ({
    ...state,
    notification: updateUserInfoSuccess,
    error: null,
    loading: false
  })),

  on(
    UserApiActions.updateUserInfoFailure,
    UserApiActions.updateCurrentUserPasswordFailure,
    (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(UserApiActions.updateCurrentUserPasswordSuccess, (state) => ({
    ...state,
    notification: updateUserPasswordSuccess,
    loading: false
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
  })),

  on(UserActions.clearNotification, (state) => ({
    ...state,
    notification: null
  }))
);
