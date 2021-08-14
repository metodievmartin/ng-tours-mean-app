import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services';
import { AuthActions, AuthApiActions, LoginPageActions, RegisterPageActions } from '../actions';
import {  UserApiActions } from '../../../users/store/actions';


@Injectable()
export class AuthEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterPageActions.register),
      switchMap(action => {
        return this.authService.register(
          action.name, action.email, action.password, action.passwordConfirm).pipe(
            tap(res => {
              this.authService.storeDataAndRedirect(res.token, res.tokenExpirationDate, res.data.user)
            }),
          map(authResponse => AuthApiActions.authSuccess({ authResponse, redirect: true })),
          catchError(err => {
            const error = this.mapErrorMessage(err);
            return of(AuthApiActions.registerFailure({ error }));
          })
        )
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      switchMap(action => {
        return this.authService.login(action.email, action.password).pipe(
          map(authResponse => AuthApiActions.authSuccess({ authResponse, redirect: true })),
          catchError(err => {
            const error = this.mapErrorMessage(err);
            return of(AuthApiActions.loginFailure({ error }));
          })
        )
      })
    )
  );

  authSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.authSuccess),
      tap(({ authResponse, redirect }) => {
        let path: string | undefined = undefined;
        if (redirect) {
          path = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        }
        this.authService.storeDataAndRedirect(
          authResponse.token, authResponse.tokenExpirationDate, authResponse.data.user, path);
      })
    ),
    { dispatch: false }
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.autoLogin),
      map(() => {
        const userData = this.authService.getStoredUserData();

        if (!userData || userData === 'undefined' || userData === 'null') {
          return AuthActions.invalidStoredUserData();
        }

        const token = this.authService.getStoredAuthToken();
        const tokenExpirationDate = this.authService.getStoredTokenExpirationDate();
        const isExpired = Number(tokenExpirationDate) < Date.now();

        if (!token || !tokenExpirationDate || isExpired) {
          return AuthActions.invalidStoredToken();
        }

        const user = JSON.parse(userData);


        return AuthActions.autoLoginSuccess({ user });
      }),
      catchError(err => {
        const error = this.mapErrorMessage(err);
        return of(AuthApiActions.loginFailure({ error }));
      })
    )
  );

  logout$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.authService.clearStoredDataAndRedirect('/');
        })
      ),
    { dispatch: false }
  );

  updateCurrentUserInfoSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserApiActions.updateUserInfoSuccess),
      tap(action => this.authService.updateUserStoredData(action.user)),
      map(action => AuthActions.updateUserAuthData({ user: action.user })),
      catchError(error => of(AuthApiActions.loginFailure({ error })))
    )
  );

  invalidStoredData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.invalidStoredToken, AuthActions.invalidStoredUserData),
      tap(() => {
        this.authService.clearStoredDataAndRedirect();
      })
    ),
    { dispatch: false }
  );

  onAlertDisplayed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.notificationDisplayed),
      delay(4000),
      map(() => AuthActions.clearError())
    )
  );

  private mapErrorMessage(error: any): string {
    let errorMsg = 'Something went wrong. Please try again later';

    if (error.statusText !== 'Unknown Error') {
      errorMsg = error.error.message;
    }

    return errorMsg;
  }

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
  }
}
