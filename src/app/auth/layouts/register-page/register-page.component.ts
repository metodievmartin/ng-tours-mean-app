import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../reducers';
import { AuthActions, LoginPageActions, RegisterPageActions } from '../../store/actions';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  loading = false;
  error: string | null = null;

  constructor(
    public store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.auth)
      .subscribe(authState => {
        this.loading = authState.loading;
        this.error = authState.error;
      });
  }

  onSubmit() {
    if (!this.registerForm.valid) return;

    if (this.registerForm.controls.password !== this.registerForm.controls.passwordConfirm) return;

    const { name, email, password, passwordConfirm } = this.registerForm.value;
    this.store.dispatch(
      RegisterPageActions.register({ name, email, password, passwordConfirm })
    );
  }

  onAlertClose() {
    this.store.dispatch(AuthActions.clearError());
  }
}
