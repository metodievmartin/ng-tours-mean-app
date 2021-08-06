import { createReducer, on } from '@ngrx/store';

import { TourActions, TourApiActions } from '../actions';
import { Tour } from '../../interfaces';

export interface State {
  tours: Tour[],
  tourDetails: Tour | null,
  error: null,
  loading: boolean,
}

export const initialState: State = {
  tours: [],
  tourDetails: null,
  error: null,
  loading: false,
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
    error: null
  })),

  on(
    TourApiActions.fetchAllToursFailure,
    TourApiActions.fetchOneTourFailure,
    (state, { error }) => ({
      ...state,
      tours: [],
      tourDetails: null,
      error,
      loading: false
    }))
);
