import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Register Page] Register Attempt',
  props<{ name: string; email: string; password: string; repeatPassword: string; }>()
);
