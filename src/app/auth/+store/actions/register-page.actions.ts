import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Register Page] Sign Up Request',
  props<{ name: string; email: string; password: string; passwordConfirm: string; }>()
);
