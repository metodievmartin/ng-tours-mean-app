import { createAction } from '@ngrx/store';

export const autoLogin = createAction('[Auth - App Init] Auto Login Check');

export const invalidStoredUserData = createAction('[Auth] Invalid Stored User Data');

export const invalidStoredToken = createAction('[Auth] Invalid Stored Auth Token');

export const logout = createAction('[Auth] Logout');

export const clearError = createAction('[Auth] Clear error');

