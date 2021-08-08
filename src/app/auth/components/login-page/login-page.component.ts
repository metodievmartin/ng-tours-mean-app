import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../reducers';
import { LoginPageActions } from '../../store/actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loading = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    public store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select(state => state.auth)
      .subscribe(authState => {
        this.loading = authState.loading;
      });
  }


  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.store.dispatch(
      LoginPageActions.login({ email, password })
    );
  }
}
