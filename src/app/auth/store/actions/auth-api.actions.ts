import { createAction, props } from '@ngrx/store';
import { AuthResponse } from '../../interfaces';


export const authSuccess = createAction(
  '[Auth API] Authentication Success',
  props<{ authResponse: AuthResponse, redirect: boolean }>()
);

export const loginFailure = createAction(
  '[Auth API] Login Failure',
  props<{ error: any }>()
);

export const registerFailure = createAction(
  '[Auth API] Register Failure',
  props<{ error: any }>()
);
