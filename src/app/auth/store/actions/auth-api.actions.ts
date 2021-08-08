import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces';


export const authSuccess = createAction(
  '[Auth API] Authentication Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth API] Login Failure',
  props<{ error: any }>()
);


export const registerFailure = createAction(
  '[Auth API] Register Failure',
  props<{ error: any }>()
);
