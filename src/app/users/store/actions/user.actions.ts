import { createAction, props } from '@ngrx/store';

export const updateCurrentUserInfo = createAction(
  '[User Settings Page] Update Current User Info',
  props<{ name: string; email: string; photo: File | null}>()
);

export const updateCurrentUserPassword = createAction(
  '[User Settings Page] Update Current User Password',
  props<{ currentPass: string; newPass: string; confirmPass: string; }>()
);

export const clearNotification = createAction(
  '[User Dashboard] Clear Notification'
);
