import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../reducers';
import { UserActions } from '../../store/actions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
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
