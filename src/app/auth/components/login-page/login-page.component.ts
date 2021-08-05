import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../reducers';
import { LoginPageActions } from '../../store/actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
  }


  onSubmit($event: Event) {
    $event.preventDefault();
    this.store.dispatch(
      LoginPageActions.login({ email: 'test@example.com', password: '123456' })
    );
  }
}
