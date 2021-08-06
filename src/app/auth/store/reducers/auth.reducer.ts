import { createReducer, on } from '@ngrx/store';

import { AuthApiActions, AuthActions, LoginPageActions, RegisterPageActions } from '../actions';
import { User } from '../../models';


export interface State {
  user: User | null;
  error: string | null;
  loading: boolean;
}

export const initialState: State = {
  user: null,
  error: null,
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(LoginPageActions.login, (state) => ({
    ...state,
    error: null,
    loading: true,
  })),

  on(AuthApiActions.loginSuccess, (state) => ({
    ...state,
    error: null,
    loading: false,
  })),

  on(AuthApiActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(RegisterPageActions.register, (state) => ({
    ...state,
    error: null,
    loading: true,
  })),

  on(AuthActions.logout, () => initialState)
);