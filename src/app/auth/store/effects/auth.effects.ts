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
            localStorage.setItem('auth-jwt', res.token);
            localStorage.setItem('auth-jwt-expiration', res.tokenExpirationDate);
            this.router.navigate(['/']);
          }),
          map(res => AuthApiActions.loginSuccess({ user: res.data.user })),
          catchError(error => of(AuthApiActions.loginFailure({ error })))
        )
      })
    )
  );


  constructor(
    private actions$: Actions,
    public authService: AuthService,
    private router: Router
  ) {
  }
}
