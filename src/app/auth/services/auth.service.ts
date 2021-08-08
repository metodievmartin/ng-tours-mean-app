import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse, User } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginEndpoint = environment.restApiHost + environment.loginUrl;
  signupEndpoint = environment.restApiHost + environment.signupUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.signupEndpoint, {
      name, email, password, passwordConfirm
    });
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.loginEndpoint, {
      email, password
    });
  }

  private setStoredData(token: string, tokenExpirationDate: string, user: User): void {
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

  storeDataAndRedirect(token: string, tokenExpirationDate: string, user: User): void {
    this.setStoredData(token, tokenExpirationDate, user);
    this.router.navigate(['/']);
  }
}
