import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import * as fromApp from '../../../reducers';
import { TourActions } from '../../store/actions';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {

  constructor(
    public store: Store<fromApp.AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const tourSlug = this.route.snapshot.params.slug;
    this.store.dispatch(
      TourActions.fetchTourDetails({ tourSlug })
    );
  }

}
