import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login Request',
  props<{ email: string; password: string }>()
);
