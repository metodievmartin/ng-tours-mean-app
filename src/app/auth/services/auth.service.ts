import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse, User } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../reducers';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginEndpoint = environment.restApiHost + environment.loginUrl;
  signupEndpoint = environment.restApiHost + environment.signupUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    public store: Store<fromApp.AppState>
  ) {
  }

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

  isAuthenticated(): boolean {
    if (!this.getStoredUserData()) return false;
    if (!this.getStoredAuthToken()) return false;
    if (!this.getStoredTokenExpirationDate()) return false;
    if (Number(this.getStoredTokenExpirationDate()) < Date.now()) return false
    return true;
  }


  private setStoredData(token: string, tokenExpirationDate: string, user: User): void {
    localStorage.setItem('auth-jwt', token);
    localStorage.setItem('auth-jwt-expiration', tokenExpirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private clearStoredData(): void {
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

  updateUserStoredData(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
  }

  storeDataAndRedirect(token: string, tokenExpirationDate: string, user: User, path?: string): void {
    this.setStoredData(token, tokenExpirationDate, user);
    if (path) {
      this.router.navigate([path]);
    }
  }

  clearStoredDataAndRedirect(path?: string): void {
    if (path) {
      this.router.navigate([path]);
    }
    this.clearStoredData();
  }
}
