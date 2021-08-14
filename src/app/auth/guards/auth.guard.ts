import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuthenticated = this.authService.isAuthenticated();

    if (isAuthenticated === route.data.isAuthenticationRequired) {
      // authorised so return true
      return true;
    }

    if (isAuthenticated) {
      // logged in so redirect to my-profile page
      this.router.navigate(['/my-profile']);
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
    }

    return false;
  }
}
