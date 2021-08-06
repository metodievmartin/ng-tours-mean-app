import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private allToursUrl = '/api/v1/tours/';

  constructor(
    public http: HttpClient
  ) { }

  getAllTours() {
    return this.http.get(environment.restApiHost + this.allToursUrl);
  }

  getOneTour(tourIdentifier: string) {
    return this.http.get(environment.restApiHost + this.allToursUrl + tourIdentifier);
  }
}
