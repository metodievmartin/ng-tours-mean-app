import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../reducers'
import { AuthActions } from '../../../auth/store/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }
}
