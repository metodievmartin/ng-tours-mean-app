import { createReducer, on } from '@ngrx/store';

import { AuthApiActions, AuthActions, LoginPageActions, RegisterPageActions } from '../actions';
import { User } from '../../interfaces';



export interface State {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  loading: boolean;
}

export const initialState: State = {
  user: null,
  isAuthenticated: false,
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

  on(AuthApiActions.authSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    error: null,
    loading: false,
  })),

  on(AuthApiActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    isAuthenticated: false,
    loading: false,
  })),

  on(RegisterPageActions.register, (state) => ({
    ...state,
    error: null,
    loading: true,
  })),

  on(AuthActions.logout, () => initialState)
);
