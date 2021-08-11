import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AllBookingsResponse } from '../interfaces';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UsersService {
  private host = environment.restApiHost;
  private allBookings = environment.allBookingsUrl;
  private allCompletedAndPaidBookings = environment.allCompleteAndPaidBookingsUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllBookings(): Observable<AllBookingsResponse> {
    return this.http.get<AllBookingsResponse>(this.host + this.allBookings);
  }

  getAllCompleteAndPaidBookings(): Observable<AllBookingsResponse> {
    return this.http.get<AllBookingsResponse>(this.host + this.allCompletedAndPaidBookings);
  }
}
