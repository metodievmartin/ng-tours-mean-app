import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromApp from '../../../+store/reducers'
import { AuthActions } from '../../../auth/+store/actions';
import { environment } from '../../../../environments/environment';
import { User } from '../../../auth/interfaces';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  storeSubscription: Subscription | undefined;
  urlBase = environment.restApiHost + environment.userImg;
  user: User | null = null;
  isAuthenticated: boolean = false;

  constructor(
    public store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.storeSubscription = this.store.select(state => state.auth)
      .subscribe(authState => {
        this.user = authState.user;
        this.isAuthenticated = authState.isAuthenticated;
      });
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
