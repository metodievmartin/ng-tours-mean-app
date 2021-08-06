import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AllToursResponse, SingleTourResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private allToursUrl = '/api/v1/tours/';
  private oneTourBySlug = '/api/v1/tours/slug/';

  constructor(
    public http: HttpClient
  ) { }

  getAllTours() {
    return this.http.get<AllToursResponse>(environment.restApiHost + this.allToursUrl);
  }

  getOneTour(tourIdentifier: string) {
    return this.http.get<SingleTourResponse>(
      environment.restApiHost + this.oneTourBySlug + tourIdentifier
    );
  }
}
