import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './layouts/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RegisterPageComponent } from './layouts/register-page/register-page.component';
import { AuthGuard } from './guards';


const authRoutes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
    data: { isAuthenticationRequired: false }
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [AuthGuard],
    data: { isAuthenticationRequired: false }
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
