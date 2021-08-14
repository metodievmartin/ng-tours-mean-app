import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../reducers';
import { UserReviewActions } from '../../store/actions';
import { Review } from '../../../tours/interfaces';

@Component({
  selector: 'app-user-reviews-page',
  templateUrl: './user-reviews-page.component.html',
  styleUrls: ['./user-reviews-page.component.css']
})
export class UserReviewsPageComponent implements OnInit {
  reviews: Review[] = [];
  loading = false;

  constructor(
    public store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.users)
      .subscribe(usersState => {
        this.reviews = usersState.userReviews;
        this.loading = usersState.loading;
      });

    this.store.dispatch(UserReviewActions.fetchUserReviews());
  }

}
