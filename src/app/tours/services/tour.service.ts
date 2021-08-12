import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AllToursResponse, SingleTourResponse } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private host = environment.restApiHost;
  private allTours = environment.allToursUrl;
  private topFiveTours = environment.topFiveToursUrl;
  private myTours = environment.myToursUrl;
  private oneTourBySlug = environment.oneTourBySlugUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllTours(): Observable<AllToursResponse> {
    return this.http.get<AllToursResponse>(
      this.host  + this.allTours
    );
  }

  getTopFiveTours(): Observable<AllToursResponse> {
    return this.http.get<AllToursResponse>(
      this.host + this.topFiveTours
    );
  }

  getMyTours(): Observable<AllToursResponse> {
    return this.http.get<AllToursResponse>(
      this.host + this.myTours
    );
  }

  getOneTourBySlug(tourSlug: string): Observable<SingleTourResponse> {
    return this.http.get<SingleTourResponse>(
      this.host + this.oneTourBySlug + tourSlug
    );
  }

  getOneTourById(tourId: string): Observable<SingleTourResponse> {
    return this.http.get<SingleTourResponse>(
      this.host + this.allTours + tourId
    );
  }
}
