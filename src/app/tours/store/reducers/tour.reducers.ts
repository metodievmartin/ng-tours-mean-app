import { createReducer, on } from '@ngrx/store';

import { TourActions } from '../actions';
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

);
