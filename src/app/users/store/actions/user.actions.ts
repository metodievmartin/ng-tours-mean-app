import { createAction, props } from '@ngrx/store';

export const updateUserInfo = createAction(
  '[User Settings Page] Update User Info',
  props<{ name: string; email: string; }>()
);

export const updateUserPassword = createAction(
  '[User Settings Page] Update User Password',
  props<{ currentPass: string; newPass: string; confirmPass: string; }>()
);
