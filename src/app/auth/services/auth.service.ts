import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse, User } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:5000/api/v1/users/login', {
      email, password
    });
  }

  setStoredData(token: string, tokenExpirationDate: string, user: User): void {
    localStorage.setItem('auth-jwt', token);
    localStorage.setItem('auth-jwt-expiration', tokenExpirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  clearStoredData(): void {
    localStorage.removeItem('userData');
    localStorage.removeItem('auth-jwt');
    localStorage.removeItem('auth-jwt-expiration');
  }

  getStoredUserData(): string | null {
    return localStorage.getItem('userData');
  }

  getStoredAuthToken(): string | null {
    return localStorage.getItem('auth-jwt');
  }

  getStoredTokenExpirationDate(): string | null {
    return localStorage.getItem('auth-jwt-expiration');
  }
}
