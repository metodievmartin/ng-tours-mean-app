import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import * as fromApp from '../../../reducers';
import { TourActions } from '../../store/actions';
import { Tour } from '../../interfaces';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  tourImagesUrl = environment.restApiHost + environment.tourImg;
  tour: Tour | null = null;
  loading: boolean = false;

  constructor(
    public store: Store<fromApp.AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.tours)
      .subscribe(toursState => {
        this.tour = toursState.tourDetails;
        this.loading = toursState.loading;
      });

    const tourSlug = this.route.snapshot.params.slug;
    this.store.dispatch(
      TourActions.fetchTourDetails({ tourSlug })
    );
  }

}
