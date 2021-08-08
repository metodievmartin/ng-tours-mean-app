import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../reducers'
import { AuthActions } from '../../../auth/store/actions';
import { environment } from '../../../../environments/environment';
import { User } from '../../../auth/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  urlBase = environment.restApiHost + environment.userImg;
  user: User | null = null;
  isAuthenticated: boolean = false;

  constructor(
    public store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.auth)
      .subscribe(authState => {
        this.user = authState.user;
        this.isAuthenticated = authState.isAuthenticated;
      });
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }
}
