import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
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
  screenWidth: number;
  showBurgerMenu = false;

  constructor(
    public store: Store<fromApp.AppState>
  ) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.storeSubscription = this.store.select(state => state.auth)
      .subscribe(authState => {
        this.user = authState.user;
        this.isAuthenticated = authState.isAuthenticated;
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }

  toggleBurgerMenu() {
    this.showBurgerMenu = !this.showBurgerMenu;
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
