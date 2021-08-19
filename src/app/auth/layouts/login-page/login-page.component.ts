import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as fromApp from '../../../+store/reducers';
import { AuthActions, LoginPageActions } from '../../+store/actions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  storeSubscription: Subscription | undefined;
  loading = false;
  error: string | null = null;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    public store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit(): void {
    this.storeSubscription = this.store.select(state => state.auth)
      .subscribe(authState => {
        this.loading = authState.loading;
        this.error = authState.error;
      });
  }

  onSubmit() {
    if (!this.loginForm.valid) return;

    const { email, password } = this.loginForm.value;

    this.store.dispatch(
      LoginPageActions.login({ email, password })
    );

    this.loginForm.controls.password.reset();
  }

  onAlertClose() {
    this.store.dispatch(
      AuthActions.clearError()
    );
  }

  onAlertInit() {
    this.store.dispatch(
      AuthActions.notificationDisplayed()
    );
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
