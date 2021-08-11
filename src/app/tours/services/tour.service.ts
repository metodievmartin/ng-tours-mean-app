import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AllToursResponse, SingleTourResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private host = environment.restApiHost;
  private allTours = environment.allToursUrl;
  private oneTourBySlug = environment.oneTourBySlugUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllTours() {
    return this.http.get<AllToursResponse>(this.host  + this.allTours);
  }

  getOneTourBySlug(tourSlug: string) {
    return this.http.get<SingleTourResponse>(
      this.host + this.oneTourBySlug + tourSlug
    );
  }

  getOneTourById(tourId: string) {
    return this.http.get<SingleTourResponse>(
      this.host + this.allTours + tourId
    );
  }
}
