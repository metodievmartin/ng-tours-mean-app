import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tour } from '../../interfaces';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../reducers';
import { TourActions } from '../../store/actions';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-top-five-tours-page',
  templateUrl: './top-five-tours-page.component.html',
  styleUrls: ['./top-five-tours-page.component.css']
})
export class TopFiveToursPageComponent implements OnInit, OnDestroy {
  tourImagesUrl = environment.restApiHost + environment.tourImg;
  topFiveTours: Tour[] = [];
  loading: boolean = false;
  storeSubscription: Subscription | undefined;

  constructor(
    public store: Store<fromApp.AppState>,
  ) { }

  ngOnInit(): void {
    this.storeSubscription = this.store
      .select(state => state.tours)
      .subscribe(toursState => {
        this.topFiveTours = toursState.topFiveTours;
        this.loading = toursState.loading;
      });

    this.store.dispatch(TourActions.fetchTopFiveTours());
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }

}
