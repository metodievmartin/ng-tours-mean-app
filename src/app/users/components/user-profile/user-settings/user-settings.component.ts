import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../../reducers';
import { UserActions } from '../../../store/actions';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  constructor(
    public store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit(): void {
  }

  onUserInfoUpdate($event: Event) {
    $event.preventDefault();
    this.store.dispatch(
      UserActions.updateUserInfo({ name: 'Test', email: 'test@example,com' })
    );
  }

  onPasswordUpdate($event: Event) {
    $event.preventDefault();
    this.store.dispatch(
      UserActions.updateUserPassword({
        currentPass: 'test',
        newPass: 'test1234',
        confirmPass: 'test1234',
      })
    );
  }
}
