import { createAction, props } from '@ngrx/store';

export const updateCurrentUserInfo = createAction(
  '[User Settings Page] Update Current User Info',
  props<{ name: string; email: string; photo: File | null}>()
);

export const updateCurrentUserPassword = createAction(
  '[User Settings Page] Update Current User Password',
  props<{ currentPassword: string; newPassword: string; passwordConfirm: string; }>()
);

export const notificationDisplayed = createAction(
  '[User Dashboard] Notification Displayed'

);export const clearNotification = createAction(
  '[User Dashboard] Clear Notification'
);
