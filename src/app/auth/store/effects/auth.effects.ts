import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services';
import { AuthActions, AuthApiActions, LoginPageActions } from '../actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      switchMap(action => {
        return this.authService.login(action.email, action.password).pipe(
          tap(res => {
            this.authService.setStoredData(res.token, res.tokenExpirationDate, res.data.user);
            this.router.navigate(['/']);
          }),
          map(res => AuthApiActions.loginSuccess({ user: res.data.user })),
          catchError(error => of(AuthApiActions.loginFailure({ error })))
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

        const user = JSON.parse(userData);
        const token = this.authService.getStoredAuthToken();
        const tokenExpirationDate = this.authService.getStoredTokenExpirationDate();
        const isExpired = Number(tokenExpirationDate) < Date.now();

        if (!token || !tokenExpirationDate || isExpired) {
          return AuthActions.invalidStoredToken();
        }

        return AuthApiActions.loginSuccess({ user });
      }),
      catchError(error => of(AuthApiActions.loginFailure({ error })))
    )
  );

  invalidStoredData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.invalidStoredToken, AuthActions.invalidStoredUserData),
      tap(() => {
        this.authService.clearStoredData();
      })
    ),
    { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    public authService: AuthService,
    private router: Router
  ) {
  }
}
