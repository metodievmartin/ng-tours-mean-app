import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromAuth from '../../auth/+store/reducers'
import * as fromTours from '../../tours/+store/reducers'
import * as fromUsers from '../../users/+store/reducers'
import { environment } from '../../../environments/environment';

export interface AppState {
  auth: fromAuth.State,
  tours: fromTours.State,
  users: fromUsers.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  tours: fromTours.reducer,
  users: fromUsers.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
