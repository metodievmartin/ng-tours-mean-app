import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../reducers';
import { UserActions } from '../../store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit, OnDestroy {
  storeSubscription: Subscription | undefined;
  notification: string | null = null;
  error: string | null = null;

  constructor(
    public store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.storeSubscription = this.store.select(state => state.users)
      .subscribe(usersState => {
        this.notification = usersState.notification;
        this.error = usersState.error;
      });
  }

  onAlertInit() {
    this.store.dispatch(UserActions.notificationDisplayed());
  }

  closeAlert() {
    this.store.dispatch(UserActions.clearNotification());
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
