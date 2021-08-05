import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromAuth from '../auth/store/reducers'
import { environment } from '../../environments/environment';

export interface AppState {
  auth: fromAuth.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
