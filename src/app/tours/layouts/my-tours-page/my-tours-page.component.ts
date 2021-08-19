import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Tour } from '../../interfaces';
import * as fromApp from '../../../+store/reducers';
import { TourActions } from '../../+store/actions';


@Component({
  selector: 'app-my-tours-page',
  templateUrl: './my-tours-page.component.html',
  styleUrls: ['./my-tours-page.component.css']
})
export class MyToursPageComponent implements OnInit, OnDestroy {
  tourImagesUrl = environment.restApiHost + environment.tourImg;
  myTours: Tour[] = [];
  loading: boolean = false;
  storeSubscription: Subscription | undefined;

  constructor(
    public store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.storeSubscription = this.store
      .select(state => state.tours)
      .subscribe(toursState => {
        this.myTours = toursState.myTours;
        this.loading = toursState.loading;
      });

    this.store.dispatch(TourActions.fetchMyTours());
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

}
