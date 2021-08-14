import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces';


export const autoLogin = createAction('[Auth - App Init] Auto Login Check');

export const autoLoginSuccess = createAction(
  '[Auth] Auto Login Success',
  props<{ user: User }>()
);

export const updateUserAuthData = createAction(
  '[Auth] Update User Auth Data',
  props<{ user: User }>()
);

export const invalidStoredUserData = createAction('[Auth] Invalid Stored User Data');

export const invalidStoredToken = createAction('[Auth] Invalid Stored Auth Token');

export const logout = createAction('[Auth] Logout');

export const clearError = createAction('[Auth] Clear error');

export const notificationDisplayed = createAction('[Auth] Notification Displayed');

