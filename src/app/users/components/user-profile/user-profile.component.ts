import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../reducers';
import { UserActions } from '../../store/actions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  notification: string | null = null;
  error: string | null = null;

  constructor(
    public store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.users)
      .subscribe(usersState => {
        this.notification = usersState.notification;
        this.error = usersState.error;
      });
  }

  closeAlert() {
    this.store.dispatch(UserActions.clearNotification());
  }
}
