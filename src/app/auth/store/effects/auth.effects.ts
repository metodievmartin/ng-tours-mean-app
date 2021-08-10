import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../../services';
import { AuthActions, AuthApiActions, LoginPageActions, RegisterPageActions } from '../actions';
import { ActivatedRoute } from '@angular/router';


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
          map(res => AuthApiActions.authSuccess({ user: res.data.user })),
          catchError(error => this.handleAuthError(error))
        )
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      switchMap(action => {
        return this.authService.login(action.email, action.password).pipe(
          tap(res => {
            const path = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
            console.log(path);
            this.authService.storeDataAndRedirect(res.token, res.tokenExpirationDate, res.data.user, path)
          }),
          map(res => AuthApiActions.authSuccess({ user: res.data.user })),
          catchError(error => this.handleAuthError(error))
        )
      })
    )
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.autoLogin),
      map(() => {
        const userData = this.authService.getStoredUserData();

        if (!userData) {
          return AuthActions.invalidStoredUserData();
        }

        const token = this.authService.getStoredAuthToken();
        const tokenExpirationDate = this.authService.getStoredTokenExpirationDate();
        const isExpired = Number(tokenExpirationDate) < Date.now();

        if (!token || !tokenExpirationDate || isExpired) {
          return AuthActions.invalidStoredToken();
        }

        const user = JSON.parse(userData);

        return AuthApiActions.authSuccess({ user });
      }),
      catchError(error => this.handleAuthError(error))
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

  invalidStoredData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.invalidStoredToken, AuthActions.invalidStoredUserData),
      tap(() => {
        this.authService.clearStoredDataAndRedirect();
      })
    ),
    { dispatch: false }
  );

  private handleAuthError(error: any) {
    const errorMsg = { error: 'Something went wrong. Please try again later' };

    if (error.statusText !== 'Unknown Error') {
      errorMsg.error = error.error.message;
    }

    return of(AuthApiActions.registerFailure(errorMsg));
  }

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
  }
}
