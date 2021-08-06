import { createReducer, on } from '@ngrx/store';

import { TourActions, TourApiActions } from '../actions';
import { Tour } from '../../interfaces';

export interface State {
  tours: Tour[],
  error: null,
  loading: boolean,
}

export const initialState: State = {
  tours: [],
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
      error: null,
      loading: false,
    })),

  on(TourApiActions.fetchAllToursFailure, (state, { error }) =>({
    ...state,
    tours: [],
    error,
    loading: false
  }))
);
