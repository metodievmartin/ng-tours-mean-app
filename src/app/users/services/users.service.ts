import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AllBookingsResponse, AllReviewsResponse, BookingDetailsResponse, UpdateUserResponse } from '../interfaces';
import { AuthResponse } from '../../auth/interfaces';


@Injectable({ providedIn: 'root' })
export class UsersService {
  private host = environment.restApiHost;
  private updateUser = environment.updateUserInfoUrl;
  private updatePassword= environment.updateUserPasswordUrl;
  private allBookings = environment.allBookingsUrl;
  private allCompletedAndPaidBookings = environment.allCompleteAndPaidBookingsUrl;
  private currentUserReviews = environment.currentUserReviewsUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllBookings(): Observable<AllBookingsResponse> {
    return this.http.get<AllBookingsResponse>(this.host + this.allBookings);
  }

  getAllCompleteAndPaidBookings(): Observable<AllBookingsResponse> {
    return this.http.get<AllBookingsResponse>(this.host + this.allCompletedAndPaidBookings);
  }

  getBookingDetails(bookingId: string): Observable<BookingDetailsResponse> {
    return this.http.get<BookingDetailsResponse>(this.host + this.allBookings + bookingId);
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

  updateCurrentUserPassword(
    passwordCurrent: string,
    password: string,
    passwordConfirm: string
  ): Observable<AuthResponse> {
    const body = {
      passwordCurrent,
      password,
      passwordConfirm
    };

    console.log(body);
    return this.http.patch<AuthResponse>(this.host + this.updatePassword, body);
  }

  getCurrentUserReviews(): Observable<AllReviewsResponse> {
    return this.http.get<AllReviewsResponse>(this.host + this.currentUserReviews);
  }
}
