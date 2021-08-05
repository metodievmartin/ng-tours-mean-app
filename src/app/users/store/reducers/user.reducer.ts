import { createReducer, on } from '@ngrx/store';

import { UserActions } from '../actions';

export interface State {
  error: string | null;
  loading: boolean;
}

export const initialState: State = {
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
    }))
);
