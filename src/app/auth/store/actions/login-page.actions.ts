import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login Attempt',
  props<{ email: string; password: string }>()
);
