import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from './reducers';
import { AuthActions } from './auth/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-tours-mean-app';

  constructor(
    public store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(AuthActions.autoLogin());
  }
}
