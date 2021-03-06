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

  on(
    AuthActions.updateUserAuthData,
    AuthActions.autoLoginSuccess,
    (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    error: null,
    loading: false,
  })),

  on(AuthApiActions.authSuccess, (state, { authResponse }) => ({
    ...state,
    user: authResponse.data.user,
    isAuthenticated: true,
    error: null,
    loading: false,
  })),

  on(AuthApiActions.loginFailure, AuthApiActions.registerFailure, (state, { error }) => ({
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

  on(AuthActions.logout, () => initialState),

  on(AuthActions.clearError, (state) => ({
    ...state,
    error: null
  }))
);
