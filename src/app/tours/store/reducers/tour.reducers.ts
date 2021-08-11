import { createReducer, on } from '@ngrx/store';

import { StripeApiActions, TourActions, TourApiActions } from '../actions';
import { Tour } from '../../interfaces';

export enum PurchaseStatus {
  'PENDING',
  'COMPLETED',
  'FAILED'
}

export interface State {
  tours: Tour[],
  tourDetails: Tour | null,
  error: null,
  loading: boolean,
  isPurchaseStarted: boolean,
  purchaseStatus: PurchaseStatus
}

export const initialState: State = {
  tours: [],
  tourDetails: null,
  error: null,
  loading: false,
  isPurchaseStarted: false,
  purchaseStatus: PurchaseStatus.PENDING
};

export const reducer = createReducer(
  initialState,

  on(
    TourActions.fetchAllTours,
    TourActions.fetchTourDetails,
    (state) => ({
      ...state,
      error: null,
      loading: true,
    })),

  on(TourApiActions.fetchAllToursSuccess,
    (state, { tours }) => ({
      ...state,
      tours,
      tourDetails: null,
      error: null,
      loading: false,
    })),

  on(TourApiActions.fetchOneTourSuccess, (state, { tour }) =>({
    ...state,
    tours: [],
    tourDetails: tour,
    loading: false,
    error: null,
    isPurchaseStarted: false
  })),

  on(
    TourApiActions.fetchAllToursFailure,
    TourApiActions.fetchOneTourFailure,
    (state, { error }) => ({
      ...state,
      tours: [],
      tourDetails: null,
      error,
      loading: false,
      isPurchaseStarted: false
    })),

  on(TourActions.startCheckout, (state) => ({
    ...state,
    loading: true,
    isPurchaseStarted: true
  })),

  on(StripeApiActions.checkoutCreationSuccess, (state) => ({
    ...state,
    error: null,
    loading: false,
    isPurchaseStarted: false
  })),

  on(StripeApiActions.checkoutCreationFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    isPurchaseStarted: false
  })),

  on(StripeApiActions.purchaseSuccess, (state) => ({
    ...state,
    error: null,
    loading: false,
    isPurchaseStarted: false,
    purchaseStatus: PurchaseStatus.COMPLETED
  })),

  on(StripeApiActions.purchaseFailed, (state) => ({
    ...state,
    error: null,
    loading: false,
    isPurchaseStarted: false,
    purchaseStatus: PurchaseStatus.FAILED
  })),
);
