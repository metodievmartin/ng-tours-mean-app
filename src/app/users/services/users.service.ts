import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AllBookingsResponse, UpdateUserResponse } from '../interfaces';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UsersService {
  private host = environment.restApiHost;
  private updateUser = environment.updateUserInfoUrl;
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

  updateCurrentUserInfo(name: string, email: string, photo: File | null): Observable<UpdateUserResponse> {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);

    if (photo) {
      formData.append('photo', photo);
    }

    return this.http
      .patch<UpdateUserResponse>(this.host + this.updateUser, formData);
  }
}
